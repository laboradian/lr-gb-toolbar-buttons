<?php
/**
 * Plugin Name:     Laboradian Gutenberg toolbar buttons Plugin
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     Gutenberg のツールバーにボタンを追加する
 * Author:          Laboradian
 * Author URI:      laboradian.com
 * Text Domain:     lr-gb-toolbar-buttons
 * Domain Path:
 * Version:         0.1.0
 *
 * @package         Lr_Gb_Toolbar_Buttons
 */

add_action( 'init', function() {
	wp_register_script(
		'lr-gb-toolbar-buttons-js',
		plugins_url( 'lr-gb-toolbar-buttons.js', __FILE__ ),
		array( 'wp-rich-text', 'wp-element', 'wp-editor', 'wp-compose', 'wp-data' )
	);
});

add_action( 'enqueue_block_editor_assets', function() {
	wp_enqueue_script( 'lr-gb-toolbar-buttons-js' );
});

