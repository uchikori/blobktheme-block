<?php
/**
 * Plugin Name:       Blobktheme Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blobktheme-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_blobktheme_block_block_init() {
	foreach(glob(plugin_dir_path(__FILE__) . 'build/blocks/*') as $block) {
		register_block_type($block );
	}
}
add_action( 'init', 'create_block_blobktheme_block_block_init' );

function add_my_script(){
	$dir = dirname( __FILE__ );
	wp_enqueue_script(
		'crossfade-anim',
		plugins_url( '/assets/main.js', __FILE__ ),
		array(),
		filemtime( "$dir/assets/main.js" ),
		true
	);
}
add_action('wp_enqueue_scripts', 'add_my_script');

// エディター画面用のスクリプトを登録
function add_my_editor_script() {
	$dir = dirname( __FILE__ );

	wp_enqueue_script(
		'crossfade-anim-editor',
		plugins_url( '/assets/main.js', __FILE__ ),
		array(),
		filemtime( "$dir/assets/main.js" ),
		true
	);
}
add_action('enqueue_block_editor_assets', 'add_my_editor_script');

function custom_block_styles(){
  register_block_style(
    'create-block/link-box',
    array(
      'name' => 'pettern2',
      'label' => 'パターン2',
    ),
  );
}
add_action( 'init', 'custom_block_styles' );
