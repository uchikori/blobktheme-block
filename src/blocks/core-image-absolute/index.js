/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType, registerBlockVariation } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	title: "ImageAbsolute",
	description: "絶対配置する画像ブロックです",
	icon: "format-gallery",
	category: "media",
	supports: {
		html: false,
	},
	attributes: {
		mediaID: {
			type: "number",
		},
		imageUrl: {
			type: "string",
			default: "",
		},
		imageAlt: {
			type: "string",
			default: "",
		},
		borderRadius: {
			type: "number",
			default: 0,
		},
		mediaWidth: {
			type: "string",
			default: "400px",
		},
		mediaHeight: {
			type: "string",
			default: "400px",
		},
		top: {
			type: "string",
			default: "0px",
		},
		left: {
			type: "string",
			default: "0px",
		},
		right: {
			type: "string",
			default: "0px",
		},
		bottom: {
			type: "string",
			default: "0px",
		},
		zIndex: {
			type: "number",
			default: 0,
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
