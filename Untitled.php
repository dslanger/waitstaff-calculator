<?php
/**
 * Style Guide functions and definitions
 *
 * @package Style Guide
 */

if ( ! function_exists( 'rookierugby_setup' ) ) :

function rookierugby_setup() {

	// Make theme available for translation.
	load_theme_textdomain( 'rookierugby', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	//Enable support for Post Thumbnails on posts and pages.
	add_theme_support( 'post-thumbnails' );

  // This theme uses wp_nav_menu() in one location.
  register_nav_menus( array(
    'primary'        => __( 'Primary Menu', 'rookie' ),
    'schools'       => __( 'Schools Menu', 'rookie' ),
    'clubs'        => __( 'Rugby Clubs Menu', 'rookie' ),
    'community'    => __( 'Community Organizations Menu', 'rookie' ),
    'clubs'        => __( 'Rugby Clubs Menu', 'rookie' ),
    'players'        => __( 'Players Menu', 'rookie' ),
    'mobile'       => __( 'Mobile Menu', 'rookie' ),
  ) );

}
endif; // rookierugby_setup

add_action( 'after_setup_theme', 'rookierugby_setup' );

//Add Image Sizes ---------------------------------------------------------------------------------------------------------------

add_image_size( 'card', 615, 410, true );


// Selects Custom Post Type Templates for single and archive pages ---------------------------------------------------------------
add_filter('template_include', 'custom_template_include');
function custom_template_include($template) {
	$custom_template_location = '/views/';
     if ( get_post_type () ) {
        if ( is_archive() ) :
           if(file_exists(get_stylesheet_directory() . $custom_template_location . 'archive-' . get_post_type() . '.php'))
              return get_stylesheet_directory() . $custom_template_location . 'archive-' . get_post_type() . '.php';
        endif;
        if ( is_single() ) :
           if(file_exists(get_stylesheet_directory() . $custom_template_location . 'single-' . get_post_type() . '.php'))
              return get_stylesheet_directory() . $custom_template_location . 'single-' . get_post_type() . '.php';
        endif;
          if ( is_page() ) :
           if(file_exists(get_stylesheet_directory() . $custom_template_location . 'page-' . get_post_type() . '.php'))
              return get_stylesheet_directory() . $custom_template_location . 'page-' . get_post_type() . '.php';
        endif;
    }
    return $template;
  }



// Register Widgets --------------------------------------------------------------------------------------------------

function rookie_widgets_init() {

  register_sidebar( array(
    'name'          => __( 'Schools Sidebar', 'rookie' ),
    'id'            => 'schools-sidbar',
    'before_widget' => '<div>',
    'after_widget'  => '</div>',
    'before_title'  => '<h2 class="hide">',
    'after_title'   => '</h2>',
  ) );




}
add_action( 'widgets_init', 'rookie_widgets_init' );


// Log Activity Schools & Clubs --------------------------------------------------------------------------------------------------
add_filter('gform_pre_render_1', 'populate_schools_clubs');
add_filter('gform_pre_validation_1', 'populate_schools_clubs');
add_filter('gform_pre_submission_filter_1', 'populate_schools_clubs');
add_filter('gform_admin_pre_render_1', 'populate_schools_clubs');

function populate_schools_clubs($form) {
	global $wpdb;

	foreach ($form['fields'] as &$field) {
		if ($field->type != 'select' || strpos($field->cssClass, 'gform_schools_clubs') === false) {
			continue;
		}

		// Load the schools/clubs from the `wp_rr_orgs` table
		$choices = array();
		$orgs = $wpdb->get_results("SELECT * FROM wp_rr_orgs ORDER BY area ASC") or die(mysql_error());
		foreach ($orgs as $org) {
			$choiceText = $org->name . " - " . $org->area . ", " . $org->province;
			$choices[] = array('text' => $choiceText, 'value' => $org->name);
		}

		$field->placeholder = 'Select a School/Club:';
		$field->choices = $choices;
	}
	return $form;
}

// Log Activity: Show form again after submission ----------------------------------------------------------------------------------
add_filter( 'gform_confirmation_2', 'custom_confirmation_message', 1, 1 );
function custom_confirmation_message( $confirmation, $form, $entry, $ajax ) {
    $confirmation = 'Your activity log has been submitted successfully! <a href="http://rookierugby.ca/log-activity">Log more activity?</a>';
    return $confirmation;
}

// Define custom user role that can just view reports
$auditorRole = add_role('auditor', __('Auditor'), array( 'read' => true ));
