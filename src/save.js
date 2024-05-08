



/**
 *  save per la fallback non completata. superflua
 * se si vuole utilizzare scommentare in index.js la save e il controllo nella render.php
 */



import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { hideBiografy, blockId, radiusLeft, radiusRight } = attributes;
	const blockProps = useBlockProps.save({
		id: "block-" + blockId,
		"data-hidebiografy": hideBiografy,
	});
	return (
		<>
			<div {...blockProps}>
				<div>
					<img
						width="50px"
						height="50px"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Microsoft_Account.svg/512px-Microsoft_Account.svg.png"
					/>
				</div>
				<div>
					<RichText.Content tagName="p" value="autore" placeholder="Nome Autore" />
					<RichText.Content
						tagName="p"
						value="lorem ipsum"
						placeholder="biografia autore"
						className={hideBiografy ? "bio-hidden" : ""}
					/>
				</div>
			</div>
			<style>{"#block-"+blockId+"{border-radius:" + radiusLeft + "px "+radiusRight+"px;}"}</style>
		</>
	);
}
