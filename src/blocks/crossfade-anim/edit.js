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
		className: "bl_crossFadeAnim",
		style: {
			width: `${attributes.mediaWidth}`,
			height: `${attributes.mediaHeight}`,
		},
	});
	const onSelectImage = (media) => {
		console.log(media);

		const media_ID = media.map((image) => image.id);
		const imageUrl = media.map((image) => image.url);
		const imageAlt = media.map((image) => image.alt);
		setAttributes({
			mediaID: media_ID,
			imageUrl: imageUrl,
			imageAlt: imageAlt,
		});
	};

	const getImage = (urls) => {
		let imageArray = urls.map((url) => {
			return <img src={url} className="image" alt={attributes.imageAlt} />;
		});

		return imageArray;
	};

	const getImageButton = (open) => {
		if (attributes.mediaID.length > 0) {
			return (
				<div
					onClick={open}
					className="block-container"
					style={{ borderRadius: `${attributes.borderRadius}px` }}
				>
					{getImage(attributes.imageUrl)}
				</div>
			);
		} else {
			return (
				<div className="block-container">
					<Button onClick={open} className="button button-large">
						画像を選択
					</Button>
				</div>
			);
		}
	};

	const removeMedia = () => {
		setAttributes({
			mediaID: [],
			imageUrl: [],
			imageAlt: [],
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

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("スライダー設定", "my-slider")} initialOpen={true}>
					<PanelRow>
						<fieldset>
							<RangeControl
								label={__("角丸", "my-slider")}
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
				</PanelBody>
			</InspectorControls>
			<BlockControls></BlockControls>
			<div {...blockProps}>
				<MediaUploadCheck>
					<MediaUpload
						multiple={true}
						gallery={true}
						onSelect={onSelectImage}
						allowedTypes={["image"]}
						value={attributes.mediaID}
						render={({ open }) => getImageButton(open)}
					/>
				</MediaUploadCheck>
				{attributes.imageUrl.length > 0 && (
					<MediaUploadCheck>
						<Button onClick={removeMedia} isDestructive className="removeImage">
							画像を削除
						</Button>
					</MediaUploadCheck>
				)}
			</div>
		</>
	);
}
