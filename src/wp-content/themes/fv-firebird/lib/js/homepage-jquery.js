jQuery(document).ready(function($) {
    var numwidgets = $('#homepage-widgets section.widget').length;
    $('#homepage-widgets').addClass('cols-'+numwidgets);
    var cols = 12/numwidgets;
    $('#homepage-widgets section.widget').addClass('col-sm-'+cols);
    $('#homepage-widgets section.widget').addClass('col-xs-12');

    var preheaderheight = $(".pre-header").outerHeight();
    var headerheight = $(".site-header").outerHeight();
    if($( window ).width() > 480){
        //$(".hp-top").sticky({topSpacing:preheaderheight+headerheight});
    } else {
    }
});