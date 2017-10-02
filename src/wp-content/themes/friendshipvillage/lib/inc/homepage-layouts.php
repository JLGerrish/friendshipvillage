<?php
/*** WIDGET AREAS ***/
/**
 * Hero and (3) widget areas
 */
function msdlab_add_homepage_hero_flex_sidebars(){
    genesis_register_sidebar(array(
    'name' => 'Homepage Hero',
    'description' => 'Homepage hero space',
    'id' => 'homepage-top',
    'before_title' => '<h2 class="hero-title">',
    'after_title' => '</h2>',
            ));
}

/**
 * Add a hero space with the site description
 */
 add_action('genesis_after_header','msdlab_hero');
function msdlab_hero(){
    if(is_active_sidebar('homepage-top') && is_front_page()){
        print '<div id="hp-top" class="hp-top">';
        dynamic_sidebar('homepage-top');
        print '</div>';
    } 
}

/* eof */