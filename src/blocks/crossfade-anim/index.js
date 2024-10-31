/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

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
	title: "CrossfadeAnimation",
	description: "クロスフェードアニメーション用のブロックです",
	icon: "format-gallery",
	category: "media",
	supports: {
		html: false,
	},
	attributes: {
		mediaID: {
			type: "array",
			default: [],
		},
		imageUrl: {
			type: "array",
			default: [],
		},
		imageAlt: {
			type: "array",
			default: [],
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
