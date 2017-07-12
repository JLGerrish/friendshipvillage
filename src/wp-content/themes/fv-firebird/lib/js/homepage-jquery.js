jQuery(document).ready(function($) {
    var numwidgets = $('#homepage-widgets section.widget').length;
    $('#homepage-widgets').addClass('cols-'+numwidgets);
    var cols = 12/numwidgets;
    $('#homepage-widgets section.widget').addClass('col-sm-'+cols);
    $('#homepage-widgets section.widget').addClass('col-xs-12');

    function windowResizeHandler() {
        var preheaderheight = $(".pre-header").outerHeight();
        var headerheight = $(".site-header").outerHeight();
        if($( window ).width() >= 768){
            //$(".hp-top").sticky({topSpacing:preheaderheight+headerheight});
            $(".site-container").css({marginTop: preheaderheight + headerheight + "px"});
        } else {
            $(".site-container").css({marginTop: ""});
        }
    }

    windowResizeHandler();
    $(window).on('resize', windowResizeHandler);
});