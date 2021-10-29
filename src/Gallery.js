import GalleryPhoto from './GalleryPhoto'

function Gallery() {
	return (
	<div className="Gallery" id="gallery">
		<div className="section-title">
			<h1>Gallery</h1>
		</div>
	  <div className="wrapper" style={{ width:'99%'}}>
	    <GalleryPhoto classes='w2 h2' x='0' y='0' alt="Argentina-Bolivia" src="p1.jpg" />
	    <GalleryPhoto classes='w2 h1' x='2' y='0' alt="Argentina-Bolivia" src="p2.jpg" />
	    <GalleryPhoto classes='w2 h1' x='2' y='1' alt="Argentina-Bolivia" src="p3.jpg" />
	    <GalleryPhoto classes='w1 h1' x='4' y='0' alt="Argentina-Bolivia" src="p4.jpg" />
	    <GalleryPhoto classes='w2 h2' x='5' y='0' alt="Argentina-Bolivia" src="p6.jpg" />
	    <GalleryPhoto classes='w1 h2' x='7' y='0' alt="Argentina-Bolivia" src="p7.jpg" />
	    <GalleryPhoto classes='w1 h2' x='4' y='1' alt="Argentina-Bolivia" src="p5.jpg" />
	    <GalleryPhoto classes='w2 h2' x='0' y='2' alt="Argentina-Bolivia" src="p8.jpg" />
	    <GalleryPhoto classes='w1 h2' x='2' y='2' alt="Argentina-Bolivia" src="p9.jpg" />
	    <GalleryPhoto classes='w1 h1' x='3' y='2' alt="Argentina-Bolivia" src="p10.jpg" />
	    <GalleryPhoto classes='w1 h1' x='3' y='3' alt="Argentina-Bolivia" src="p11.jpg" />
	    <GalleryPhoto classes='w1 h1' x='4' y='3' alt="Argentina-Bolivia" src="p12.jpg" />
	    <GalleryPhoto classes='w2 h2' x='5' y='2' alt="Argentina-Bolivia" src="p13.jpg" />
	    <GalleryPhoto classes='w1 h1' x='7' y='2' alt="Argentina-Bolivia" src="p14.jpg" />
	    <GalleryPhoto classes='w2 h1' x='0' y='4' alt="Argentina-Bolivia" src="p16.jpg" />
	    <GalleryPhoto classes='w2 h1' x='2' y='4' alt="Argentina-Bolivia" src="p17.jpg" />
	    <GalleryPhoto classes='w2 h1' x='4' y='4' alt="Argentina-Bolivia" src="p18.jpg" />
	    <GalleryPhoto classes='w1 h1' x='6' y='4' alt="Argentina-Bolivia" src="p19.jpg" />
	    <GalleryPhoto classes='w1 h2' x='7' y='3' alt="Argentina-Bolivia" src="p20.jpg" />
	  </div>
	</div>
	)
}

export default Gallery