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
	console.log(attributes);

	const getImageSave = (url, alt) => {
		let imageElm;

		if (alt) {
			imageElm = (
				<img
					src={url}
					alt={alt}
					style={{ borderRadius: `${attributes.borderRadius}px` }}
				/>
			);
		} else {
			imageElm = (
				<img
					src={url}
					alt=""
					style={{ borderRadius: `${attributes.borderRadius}px` }}
				/>
			);
		}

		return imageElm;
	};

	const blockProps = useBlockProps.save({
		className: "bl_positionAbsolute",
		style: {
			width: `${attributes.mediaWidth}`,
			height: `${attributes.mediaHeight}`,
			top: `${attributes.top}`,
			left: `${attributes.left}`,
			bottom: `${attributes.bottom}`,
			right: `${attributes.right}`,
			zIndex: `${attributes.zIndex}`,
			marginLeft: 0,
			marginRight: 0,
		},
	});
	return (
		<figure {...blockProps}>
			{getImageSave(attributes.imageUrl, attributes.imageAlt)}
		</figure>
	);
}
