import './GalleryPhoto.css'

function GalleryPhoto(props){
	return (
		<a href={props.src}>
			<img 
			className={props.classes}
			src={props.src}
			alt={props.alt}
			style={{top: `calc(${props.y}*21.571% + 10px)`, left: `calc(${props.x}*12.5% + 10px)`}}
			>
			</img>
		</a>
		)
}







export default GalleryPhoto