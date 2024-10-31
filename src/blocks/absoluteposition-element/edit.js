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
	RangeControl,
	__experimentalUnitControl as UnitControl,
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
		className: "bl_positionAbsolute",
		style: {
			...(attributes.top ? { top: `${attributes.top}` } : {}),
			...(attributes.left ? { left: `${attributes.left}` } : {}),
			...(attributes.bottom ? { bottom: `${attributes.bottom}` } : {}),
			...(attributes.right ? { right: `${attributes.right}` } : {}),
			zIndex: `${attributes.zIndex}`,
			borderRadius: `${attributes.borderRadius}px`,
			backgroundColor: `${attributes.backgroundColor}`,
			color: `${attributes.textColor}`,
		},
	});

	const onChangeBorderRadius = (newBorderRadius) => {
		setAttributes({
			borderRadius: newBorderRadius,
		});
	};
	const onChangeTopPosition = (newTopPosition) => {
		setAttributes({
			top: newTopPosition,
		});
	};
	const onChangeLeftPosition = (newLeftPosition) => {
		setAttributes({
			left: newLeftPosition,
		});
	};
	const onChangeRightPosition = (newRightPosition) => {
		setAttributes({
			right: newRightPosition,
		});
	};
	const onChangeBottomPosition = (newBottomPosition) => {
		setAttributes({
			bottom: newBottomPosition,
		});
	};
	const onChangeZIndex = (newZIndex) => {
		setAttributes({
			zIndex: newZIndex,
		});
	};

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

	const onChangeAspectRatio = (newAspectRatio) => {
		setAttributes({
			aspectRatio: newAspectRatio,
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
					]}
				/>
				<PanelBody
					title={__("絶対配置設定", "ImageAbsolute")}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<RangeControl
								label={__("角丸", "ImageAbsolute")}
								value={attributes.borderRadius}
								onChange={onChangeBorderRadius}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<UnitControl
								label="上"
								value={attributes.top}
								onChange={onChangeTopPosition}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<UnitControl
								label="左"
								value={attributes.left}
								onChange={onChangeLeftPosition}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<UnitControl
								label="右"
								value={attributes.right}
								onChange={onChangeRightPosition}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<UnitControl
								label="下"
								value={attributes.bottom}
								onChange={onChangeBottomPosition}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<RangeControl
								label={__("重ね順", "ImageAbsolute")}
								value={attributes.zIndex}
								onChange={onChangeZIndex}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<BlockControls></BlockControls>
			<div {...blockProps}>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		</>
	);
}
