jQuery(document).ready(function($) {	
    $('*:first-child').addClass('first-child');
    $('*:last-child').addClass('last-child');
    $('*:nth-child(even)').addClass('even');
    $('*:nth-child(odd)').addClass('odd');
	
	var numwidgets = $('#footer-widgets div.widget').length;
	$('#footer-widgets').addClass('cols-'+numwidgets);
	$.each(['show', 'hide'], function (i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function () {
          this.trigger(ev);
          return el.apply(this, arguments);
        };
      });

	$('.nav-footer ul.menu>li').after(function(){
		if(!$(this).hasClass('last-child') && $(this).hasClass('menu-item') && $(this).css('display')!='none'){
			return '<li class="separator">|</li>';
		}
	});
	/*$('form.gplaceholder .gfield_label').each(function(){
	    var placeholder = $(this).html();
	    if(!$(this).next('.ginput_container').hasClass('ginput_container_radio')){
    	    $(this).addClass('hidden');
            //$(this).next('.ginput_container').find('input').attr('placeholder',placeholder.replace(/(<([^>]+)>)/ig,""));
            //$(this).next('.ginput_container').find('select option.first-child').html(placeholder.replace(/(<([^>]+)>)/ig,""));
        }
	});*/
    
    $(window).scroll(function() {
       if($(window).scrollTop() == 0) {
           $(".sticky-wrapper").css('height','auto');
       }
    });
    //add element to page
    
    //$('.text-sizer').sticky({topSpacing:210});
    var size = parseInt($('html').css('font-size'));
    $('.site-container').on('click', '.text-sizer .plus', function(){
        size = size*1.05;
        $('html').css('font-size',size + 'px');
    });
    $('.site-container').on('click', '.text-sizer .minus', function(){
        size = size*0.95;
        $('html').css('font-size',size + 'px');
    });
    
    $('a').not('[href*="mailto:"]').each(function () {
        var isInternalLink = new RegExp('/' + window.location.host + '/');
        if ( ! isInternalLink.test(this.href) ) {
            $(this).attr('target', '_blank');
        }
    });

    function windowResizeHandler() {
        //var $preheaderWidget = $(".pre-header").html();

        if($( window ).width() >= 768){
            if ($('.content').find('.text-sizer').length <= 0) {
                $('.content').prepend('<div class="text-sizer"><div>Text Size: <i class="minus fa fa-minus"></i><i class="plus fa fa-plus"></i></div></div>');
                $('#page-title-area').next('.text-sizer').remove();
            }
        } else {
            if ( $('#page-title-area').next('.text-sizer').length <= 0) {
                $('#page-title-area').after('<div class="text-sizer"><div>Text Size: <i class="minus fa fa-minus"></i><i class="plus fa fa-plus"></i></div></div>');
                $('.content').find('.text-sizer').remove();
            }
        }

        if($( window ).width() >= 1024){
            if ($("#nav-phone").length > 0) {
                $("#nav-phone .wrap").css({height: ''});
                $(".pre-header").html($("#nav-phone").html());
                $("#nav-phone").remove();
            }

            var preheaderheight = $(".pre-header").outerHeight();
            var headerheight = $(".site-header").outerHeight();
            //var hpTopHeight = $(".hp-top").outerHeight();

            $(".pre-header").css({position: "fixed", top: 0});
            $(".site-header").css({position: "fixed", top: preheaderheight+"px"});
            $(".hp-top").css({position: "fixed", top: preheaderheight+headerheight+"px"});
            $(".site-container").css({marginTop: preheaderheight + headerheight + "px"});
            //$(".page-title-area").css({marginTop: preheaderheight+headerheight+hpTopHeight+"px" })
            //$(".pre-header").sticky();
            //$(".site-header").sticky({topSpacing:preheaderheight});
            //$(".notification-bar").sticky({topSpacing:headerheight});
        } else {
            //$(".site-header").sticky();
            if ($("#nav-phone").length <= 0) {
                $(".site-header > .wrap").append("<div id=\"nav-phone\">"+$(".pre-header").html()+"</div>");
                $(".pre-header").empty();
            }

            var headerheight = $(".site-header").outerHeight();

            $(".pre-header").css({position: "", top: ""});
            $(".site-header").css({position: "fixed", top: 0});
            $(".hp-top").css({position: "", top: ""});
            $(".site-container").css({marginTop: headerheight + "px"});
        }
    }

    windowResizeHandler();
    var windowResizeTimeout;
    $(window).on('resize', function() {
        clearTimeout(windowResizeTimeout);
        windowResizeTimeout = setTimeout(windowResizeHandler, 0);
    });
});
