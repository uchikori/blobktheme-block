/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

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

	const blockProps = useBlockProps.save({
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
	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
