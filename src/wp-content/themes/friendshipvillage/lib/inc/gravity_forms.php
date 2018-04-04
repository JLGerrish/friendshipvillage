<?php

add_filter('gform_validation', 'gform_validate_email_briteverify');
function gform_validate_email_briteverify($validation_result) {
    $form = $validation_result['form'];

    foreach ($form['fields'] as &$field) {
        //print var_dump($field);

        // validate all field of type email
        if ($field['type'] == 'email') {
            // get the field value
            $email = rgpost("input_{$field['id']}");

            if ($email && is_email($email)) {
                // make request to BriteVerify to validate
                if (!briteverify_validate_email($email)) {
                    $validation_result["is_valid"] = false;
                    $field["failed_validation"] = true;
                    $field["validation_message"] = __('Invalid Email.');
                }
            }
        }
    }
    
    return $validation_result;
}

function briteverify_validate_email($email) {
    $api_key = '5221fb0a-b2da-40d8-946e-762bb20be948';
    $url = 'https://bpi.briteverify.com/emails.json?address='.$email.'&apikey='.$api_key;

    $request = wp_remote_get($url);
    
    if (is_wp_error($request)) {
        GFCommon::log_debug('gform_validation: BriteVerify API response => WPERROR');
    } else {
        GFCommon::log_debug('gform_validation: BriteVerify API response => '.print_r($response['body'], true));

        $body = wp_remote_retrieve_body($request);
        $data = json_decode($body);
        
        if ($data->status == "invalid") {
            return false;
        }
    }

    return true;
}
add_filter("gform_validation_message", "change_message", 10, 2);
function change_message($message, $form){
return '
<div class="validation_error">There was a problem with your submission. Errors have been highlighted below.</div>
';
}

add_filter( 'gform_confirmation_anchor_14', function() {
    return 300;
} );

add_filter( 'gform_confirmation_14', 'custom_confirmation_message', 10, 4 );
function custom_confirmation_message( $confirmation, $form, $entry, $ajax ) {
  $confirmation = 'Thank you!  The Evaluation Guide Checklist is downloading.  <a title="Download Now" href="https://friendshipvillagemi.com/wp-content/uploads/2018/03/FriendshipVillage-Checklist-D5.pdf" target="_blank">Click here</a> if your download does not start automatically.' .
                    "<script>
                    jQuery(document).bind('gform_confirmation_loaded', function () {window.location = 'https://friendshipvillagemi.com/wp-content/uploads/2018/03/FriendshipVillage-Checklist-D5.pdf{$entry['10']}';});
                
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                     'event': 'formSubmission'
                    });
                    </script>";

  return $confirmation;
}

