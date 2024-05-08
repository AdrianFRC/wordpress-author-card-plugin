/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { InspectorControls, BlockControls } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	ToolbarButton,
	RangeControl,
} from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes, clientId }) {
	const { hideBiografy, radiusLeft, radiusRight, blockId } = attributes;
	setAttributes({ blockId: clientId });
	const toogleBiorgrafy = () =>
		setAttributes({
			hideBiografy: !hideBiografy,
		});

	return (
		<>
			<InspectorControls key="settings" group="settings">
				<PanelBody title={__("Settings", "author-card")}>
					<ToggleControl
						checked={hideBiografy}
						label={__("Nascondi Biografia", "author-card")}
						onChange={toogleBiorgrafy}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls key="styles" group="styles">
				<PanelBody title={__("Border Radius", "author-card")}>
					<RangeControl
						label="Left Radius"
						initialPosition={0}
						value={radiusLeft}
						onChange={(radiusLeft) => setAttributes({ radiusLeft })}
						min="0"
						step="1"
						max="50"
					/>
					<RangeControl
						label="Right Radius"
						initialPosition={0}
						value={radiusRight}
						onChange={(radiusRight) => setAttributes({ radiusRight })}
						min="0"
						step="1"
						max="50"
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls key="controls">
				<ToolbarButton
					label="Nascondi biografia"
					value={hideBiografy}
					onClick={toogleBiorgrafy}
					isPressed={hideBiografy}
					icon={hideBiografy ? "hidden" : "visibility"}
				/>
			</BlockControls>
			<div className="wp-block-post-author-container">
				<div {...useBlockProps()}>
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Microsoft_Account.svg/512px-Microsoft_Account.svg.png" />
					<div>
						<p>Nome dell'autore</p>
						<p className={hideBiografy ? "bio-hidden" : ""}>
							Biografia dell'autore
						</p>
					</div>
				</div>
			</div>
			<style>
				{"#block-" +
					blockId +
					"{border-radius:" +
					radiusLeft +
					"px " +
					radiusRight +
					"px;}"}
			</style>
		</>
	);
}
