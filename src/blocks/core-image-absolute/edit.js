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
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
	BlockControls,
	AlignmentControl,
} from "@wordpress/block-editor";

import {
	Button,
	PanelBody,
	PanelRow,
	RangeControl,
	__experimentalUnitControl as UnitControl,
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

	const blockProps = useBlockProps({
		className: "bl_positionAbsolute",
		style: {
			width: `${attributes.mediaWidth}`,
			height: `${attributes.mediaHeight}`,
			top: `${attributes.top}`,
			left: `${attributes.left}`,
			bottom: `${attributes.bottom}`,
			right: `${attributes.right}`,
			zIndex: `${attributes.zIndex}`,
			margin: "0 !important",
			borderRadius: `${attributes.borderRadius}px`,
		},
	});
	const onSelectImage = (media) => {
		setAttributes({
			mediaID: media.id,
			imageUrl: media.url,
			imageAlt: media.alt,
		});
	};

	const getImage = (url) => {
		return <img src={url} className="image" alt={attributes.imageAlt} />;
	};

	const getImageButton = (open) => {
		if (attributes.mediaID) {
			return (
				<img
					src={attributes.imageUrl}
					className="image"
					alt={attributes.imageAlt}
					onClick={open}
					style={{ borderRadius: `${attributes.borderRadius}px` }}
				/>
			);
		} else {
			return (
				<Button onClick={open} className="button button-large">
					画像を選択
				</Button>
			);
		}
	};

	const removeMedia = () => {
		setAttributes({
			mediaID: "",
			imageUrl: "",
			imageAlt: "",
		});
	};

	const onChangeWidth = (newMediaWidth) => {
		setAttributes({
			mediaWidth: newMediaWidth,
		});
	};

	const onChangeHeight = (newMediaHeight) => {
		setAttributes({
			mediaHeight: newMediaHeight,
		});
	};

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

	return (
		<>
			<InspectorControls>
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
								label="横幅"
								value={attributes.mediaWidth}
								onChange={onChangeWidth}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<UnitControl
								label="縦幅"
								value={attributes.mediaHeight}
								onChange={onChangeHeight}
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
			<figure {...blockProps}>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={["image"]}
						value={attributes.mediaID}
						render={({ open }) => getImageButton(open)}
					/>
				</MediaUploadCheck>
				{attributes.imageUrl !== "" && (
					<MediaUploadCheck>
						<Button onClick={removeMedia} isDestructive className="removeImage">
							画像を削除
						</Button>
					</MediaUploadCheck>
				)}
			</figure>
		</>
	);
}
