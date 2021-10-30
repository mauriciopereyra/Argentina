import GalleryPhoto from './GalleryPhoto'

import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import p4 from './p4.jpg';
import p5 from './p5.jpg';
import p6 from './p6.jpg';
import p7 from './p7.jpg';
import p8 from './p8.jpg';
import p9 from './p9.jpg';
import p10 from './p10.jpg';
import p11 from './p11.jpg';
import p12 from './p12.jpg';
import p13 from './p13.jpg';
import p14 from './p14.jpg';
import p15 from './p15.jpg';
import p16 from './p16.jpg';
import p17 from './p17.jpg';
import p18 from './p18.jpg';
import p19 from './p19.jpg';
import p20 from './p20.jpg';

function Gallery() {
	return (
	<div className="Gallery" id="gallery">
		<div className="section-title">
			<h1>Gallery</h1>
		</div>
	  <div className="wrapper" style={{ width:'99%'}}>
	    <GalleryPhoto classes='w2 h2' x='0' y='0' alt="Argentina-Bolivia" src={p1} />
	    <GalleryPhoto classes='w2 h1' x='2' y='0' alt="Argentina-Bolivia" src={p2} />
	    <GalleryPhoto classes='w2 h1' x='2' y='1' alt="Argentina-Bolivia" src={p3} />
	    <GalleryPhoto classes='w1 h1' x='4' y='0' alt="Argentina-Bolivia" src={p4} />
	    <GalleryPhoto classes='w2 h2' x='5' y='0' alt="Argentina-Bolivia" src={p6} />
	    <GalleryPhoto classes='w1 h2' x='7' y='0' alt="Argentina-Bolivia" src={p7} />
	    <GalleryPhoto classes='w1 h2' x='4' y='1' alt="Argentina-Bolivia" src={p5} />
	    <GalleryPhoto classes='w2 h2' x='0' y='2' alt="Argentina-Bolivia" src={p8} />
	    <GalleryPhoto classes='w1 h2' x='2' y='2' alt="Argentina-Bolivia" src={p9} />
	    <GalleryPhoto classes='w1 h1' x='3' y='2' alt="Argentina-Bolivia" src={p10}  />
	    <GalleryPhoto classes='w1 h1' x='3' y='3' alt="Argentina-Bolivia" src={p11}  />
	    <GalleryPhoto classes='w1 h1' x='4' y='3' alt="Argentina-Bolivia" src={p12}  />
	    <GalleryPhoto classes='w2 h2' x='5' y='2' alt="Argentina-Bolivia" src={p13}  />
	    <GalleryPhoto classes='w1 h1' x='7' y='2' alt="Argentina-Bolivia" src={p14}  />
	    <GalleryPhoto classes='w2 h1' x='0' y='4' alt="Argentina-Bolivia" src={p16}  />
	    <GalleryPhoto classes='w2 h1' x='2' y='4' alt="Argentina-Bolivia" src={p17}  />
	    <GalleryPhoto classes='w2 h1' x='4' y='4' alt="Argentina-Bolivia" src={p18}  />
	    <GalleryPhoto classes='w1 h1' x='6' y='4' alt="Argentina-Bolivia" src={p19}  />
	    <GalleryPhoto classes='w1 h2' x='7' y='3' alt="Argentina-Bolivia" src={p20}  />
	  </div>
	</div>
	)
}

export default Gallery