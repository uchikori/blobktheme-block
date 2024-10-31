/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save(props) {
	const { attributes } = props;

	const getImageSave = (url, alt) => {
		let imageElm;
		let imageArray = [];

		for (let i = 0; i < url.length; i++) {
			if (url.length === 0) {
				imageElm = null;
			} else {
				if (alt[i]) {
					imageElm = <img src={url[i]} alt={alt[i]} />;
				} else {
					imageElm = <img src={url[i]} alt="" />;
				}
			}
			imageArray.push(imageElm);
		}

		return imageArray;
	};

	const blockProps = useBlockProps.save({
		className: "bl_crossFadeAnim",
		style: {
			width: `${attributes.mediaWidth}`,
			height: `${attributes.mediaHeight}`,
		},
	});
	return (
		<div {...blockProps}>
			<div
				className="bl_crossFadeAnim_inner"
				style={{ borderRadius: `${attributes.borderRadius}px` }}
			>
				{getImageSave(attributes.imageUrl, attributes.imageAlt)}
			</div>
		</div>
	);
}
