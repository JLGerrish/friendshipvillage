jQuery(document).ready(function($){var e=$("#homepage-widgets section.widget").length;$("#homepage-widgets").addClass("cols-"+e);var d=12/e;$("#homepage-widgets section.widget").addClass("col-sm-"+d),$("#homepage-widgets section.widget").addClass("col-xs-12"),$(window).width()>480&&$(".hp-top").sticky({topSpacing:144})});