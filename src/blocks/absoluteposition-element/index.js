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
	title: "Absolute Position Element",
	description: "絶対配置用のブロックです",
	icon: "move",
	category: "design",
	supports: {
		html: false,
	},
	attributes: {
		borderRadius: {
			type: "number",
			default: 0,
		},
		top: {
			type: "string",
			default: "",
		},
		left: {
			type: "string",
			default: "",
		},
		right: {
			type: "string",
			default: "",
		},
		bottom: {
			type: "string",
			default: "",
		},
		zIndex: {
			type: "number",
			default: 0,
		},
		textColor: {
			type: "string",
			default: "",
		},
		backgroundColor: {
			type: "string",
			default: "",
		},
	},
	supports: {
		spacing: {
			padding: true,
			margin: true,
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
