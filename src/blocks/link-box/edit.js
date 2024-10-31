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
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	PanelColorSettings,
	InnerBlocks,
} from "@wordpress/block-editor";

import {
	PanelBody,
	PanelRow,
	TextControl,
	SelectControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const { className, attributes, setAttributes } = props;

	const ALLOWED_BLOCKS = [
		"core/heading",
		"core/paragraph",
		"core/image",
		"core/list",
		"core/group",
	];

	const blockProps = useBlockProps({
		className: "bl_linkBox",
		style: {
			"--backgroundColor": attributes.backgroundColor,
			"--textColor": attributes.textColor,
			"--backgroundColorHover": attributes.backgroundColorHover,
			"--textColorHover": attributes.textColorHover,
		},
	});

	const onChangeBgColor = (newBgColor) => {
		setAttributes({
			backgroundColor: newBgColor,
		});
	};
	const onChangeTextColor = (newTextColor) => {
		setAttributes({
			textColor: newTextColor,
		});
	};
	const onChangeBgHoverColor = (newBgHoverColor) => {
		setAttributes({
			backgroundColorHover: newBgHoverColor,
		});
	};
	const onChangeTextHoverColor = (newTextHoverColor) => {
		setAttributes({
			textColorHover: newTextHoverColor,
		});
	};

	const onChangeLink = (newLink) => {
		setAttributes({
			link: newLink,
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__("色設定", "ImageAbsolute")}
					initialOpen={true}
					colorSettings={[
						{
							value: attributes.backgroundColor,
							onChange: onChangeBgColor,
							label: __("背景色", "ImageAbsolute"),
						},
						{
							value: attributes.textColor,
							onChange: onChangeTextColor,
							label: __("文字色", "ImageAbsolute"),
						},
						{
							value: attributes.backgroundColorHover,
							onChange: onChangeBgHoverColor,
							label: __("背景色ホバー", "ImageAbsolute"),
						},
						{
							value: attributes.textColorHover,
							onChange: onChangeTextHoverColor,
							label: __("文字色ホバー", "ImageAbsolute"),
						},
					]}
				/>
				<PanelBody title={__("リンクURL", "Link-URL")} initialOpen={true}>
					<PanelRow>
						<fieldset>
							<TextControl
								label="リンク"
								value={attributes.link}
								onChange={onChangeLink}
								help="URLを入力してください"
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<BlockControls></BlockControls>
			<div {...blockProps} href={attributes.link}>
				<InnerBlocks />
			</div>
		</>
	);
}
