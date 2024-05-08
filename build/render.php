<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$author_id = get_the_author_meta('ID');
$author_nickname = get_the_author_meta('nickname', $author_id);
$author_first_name = get_the_author_meta('first_name', $author_id);
$author_last_name = get_the_author_meta('last_name', $author_id);
$author_biografy = get_the_author_meta('description', $author_id);
$author_avatar = get_avatar_url($author_id);
$author_name = "";
$blockId = 'block-'.$attributes['blockId'];

/**
 * controllo sull'esistenza o meno del nome e cognome - nel caso non siano stati impostati 
 * prende il nickname
 */
if ($author_first_name) {
	$author_name = $author_first_name;
	if ($author_last_name) {
		$author_name = $author_name . " " . $author_last_name;
	}
} else {
	$author_name = $author_nickname;
}


/**
 * in caso di fallback sulla save basta scommentare la parte commentata
 * e la riga con la save in index.js
 */
/* if (!$author_id) {
	$block_content = $content;
} else { */
$block_content = '<div class=' . '"wp-block-post-author-container"' . '>
						<div ' . get_block_wrapper_attributes() . ' id='.$blockId.'> '
							. '<img src=\'' . esc_html($author_avatar) . '\'/>'
							. '<div>
								<p>' . esc_html($author_name) . '</p>
								<p class="' . esc_html($attributes['hideBiografy'] ? 'bio-hidden' : '') . '">' . esc_html($author_biografy) . '</p>
							</div>'
						. '</div>
					</div>';
/* }; */

/**
 * render solo nel caso in cui ci troviamo negli articoli
 * per evitare il render nelle pagine normali
 */
if(is_single()){
	echo wp_kses_post($block_content);
	echo '<style>#'.
			$blockId.' {
				border-radius:' . esc_html($attributes['radiusLeft']) . 'px ' . esc_html($attributes['radiusRight']) . 'px;
			}
		</style>';
}
