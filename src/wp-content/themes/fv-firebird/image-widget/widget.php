<?php
/**
 * Widget template. This template can be overriden using the "sp_template_image-widget_widget.php" filter.
 * See the readme.txt file for more info.
 */

// Block direct requests
if ( !defined('ABSPATH') )
    die('-1');

echo $before_widget;
if(is_front_page()){
    echo '<div class="image-widget-background" style="background-image: url('.$imageurl.'); background-position: center center; background-repeat: no-repeat; background-size: cover;" id="'.$this->id.'"><div class="wrap">';

    if ( !empty( $title ) ) { echo $before_title . $title . $after_title; }
    
    if ( !empty( $subtitle ) ) { $subtitle = '<span class="subtitle">'.$subtitle.'</span>'; }
    
    echo '<div class="widget-content">';
    
    if ( !empty( $description ) ) {
        echo '<h3 class="'.$this->widget_options['classname'].'-description" >';
        echo wpautop( $subtitle.$description );
        echo "</h3>";
    }
    if ( $link ) {
        $linktext = $linktext != ''?$linktext:'Read More >';
        echo '<div class="link"><a class="'.$this->widget_options['classname'].'-link button" href="'.$link.'" target="'.$linktarget.'">'.$linktext.'</a><div class="clear"></div></div>';
    }
    echo '</div>
        </div>
    </div>';

}else{
    if ( !empty( $title ) ) { echo $before_title . $title . $after_title; }
    echo '<div class="widget-content">';
    echo $this->get_image_html( $instance, true );
    
    if ( !empty( $description ) ) {
        echo '<div class="'.$this->widget_options['classname'].'-description" >';
        echo wpautop( $description );
        echo "</div>";
    }
    if ( $link ) {
        $linktext = $linktext != ''?$linktext:'Read More >';
        echo '<div class="link"><a class="'.$this->widget_options['classname'].'-link readmore" href="'.$link.'" target="'.$linktarget.'">'.$linktext.' ></a><div class="clear"></div></div>';
    }
    echo '<div class="clear"></div>
    </div>';
}
echo $after_widget;