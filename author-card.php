<?php
/**
 * Plugin Name:       Author Card
 * Description:       crea un blocco che visualizza le informazioni dell'autore come foto, nome e biografia
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            AdrianFRC
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       author-card
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

function block_author_card_block_init() {
	register_block_type( __DIR__ . '/build');
}
add_action( 'init', 'block_author_card_block_init' );
