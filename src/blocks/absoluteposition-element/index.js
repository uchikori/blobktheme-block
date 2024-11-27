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
		__experimentalOnEnter: true,
		__experimentalOnMerge: true,
		__experimentalSettings: true,
		align: ["wide", "full"],
		anchor: true,
		ariaLabel: true,
		html: false,
		background: {
			backgroundImage: true,
			backgroundSize: true,
			__experimentalDefaultControls: {
				backgroundImage: true,
			},
		},
		color: {
			gradients: true,
			heading: true,
			button: true,
			link: true,
			__experimentalDefaultControls: {
				background: true,
				text: true,
			},
		},
		spacing: {
			margin: ["top", "bottom"],
			padding: true,
			blockGap: true,
			__experimentalDefaultControls: {
				padding: true,
				blockGap: true,
			},
		},
		dimensions: {
			minHeight: true,
		},
		__experimentalBorder: {
			color: true,
			radius: true,
			style: true,
			width: true,
			__experimentalDefaultControls: {
				color: true,
				radius: true,
				style: true,
				width: true,
			},
		},
		position: {
			sticky: true,
		},
		typography: {
			fontSize: true,
			lineHeight: true,
			__experimentalFontFamily: true,
			__experimentalFontWeight: true,
			__experimentalFontStyle: true,
			__experimentalTextTransform: true,
			__experimentalTextDecoration: true,
			__experimentalLetterSpacing: true,
			__experimentalDefaultControls: {
				fontSize: true,
			},
		},
		layout: {
			allowSizingOnChildren: true,
		},
		interactivity: {
			clientNavigation: true,
		},
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
