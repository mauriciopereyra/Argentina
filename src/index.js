import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test'
import GalleryPhoto from './GalleryPhoto'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="Gallery">
      <div className="wrapper" style={{ width:'99%'}}>
        <GalleryPhoto classes='w2 h2' x='0' y='0' alt="Argentina-Bolivia" src="https://messi.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-11-at-11.03.49.jpeg" />
        <GalleryPhoto classes='w2 h1' x='2' y='0' alt="Argentina-Bolivia" src="https://imagenes.elpais.com/resizer/OcNnh12aLsaw_s4g_7vacj_-IZ4=/414x233/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SSUEZTI2KSVSZNVOH7TKFIUEKU.jpg" />
        <GalleryPhoto classes='w2 h1' x='2' y='1' alt="Argentina-Bolivia" src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/06/30/5fa4368e06b42.jpeg" />
        <GalleryPhoto classes='w1 h1' x='4' y='0' alt="Argentina-Bolivia" src="https://radiopasionydeporte.com/wp-content/uploads/2020/11/1605725191605-2-edited-1.jpg" />
        <GalleryPhoto classes='w2 h2' x='5' y='0' alt="Argentina-Bolivia" src="https://resizer.glanacion.com/resizer/8lfgzm2_JvOC0eLs2nPqV0A1q9Y=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/AA2F5RJTEREJZJGE6CK5TEYHMA.JPG" />
        <GalleryPhoto classes='w1 h2' x='7' y='0' alt="Argentina-Bolivia" src="https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2021/07/28/16274967125267.jpg" />
        <GalleryPhoto classes='w1 h2' x='4' y='1' alt="Argentina-Bolivia" src="https://pbs.twimg.com/media/E5-5n7FWQAIYewD.jpg" />
        <GalleryPhoto classes='w2 h2' x='0' y='2' alt="Argentina-Bolivia" src="https://resizer.glanacion.com/resizer/i3epk_dNpi8HAbpHKB9Niy3obN8=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/3Q6ZIXIPUFHNNB4E33VFV5QIQI.JPG" />
        <GalleryPhoto classes='w1 h2' x='2' y='2' alt="Argentina-Bolivia" src="https://pbs.twimg.com/media/E5qem7EWQAE4ydH.jpg" />
        <GalleryPhoto classes='w1 h1' x='3' y='2' alt="Argentina-Bolivia" src="https://www.sportsmax.tv/media/k2/items/cache/bdbefc44fec3d8f3939bc40d67423c0f_XL.jpg" />
        <GalleryPhoto classes='w1 h1' x='3' y='3' alt="Argentina-Bolivia" src="https://media.minutemediacdn.com/process?url=https%3A%2F%2F90min-images-original.s3.amazonaws.com%2Fproduction%2Fitaly-v-argentina-international-friendly-5bc34ff1126aa17ac9000001.jpg&filters%5Bcrop%5D%5Bw%5D=0.9084967320261437&filters%5Bcrop%5D%5Bh%5D=1.0&filters%5Bcrop%5D%5Bo_x%5D=0.0504720406681191&filters%5Bcrop%5D%5Bo_y%5D=0.0&filters%5Bquality%5D%5Btarget%5D=80&type=.jpg&filters%5Bresize%5D%5Bw%5D=630&filters%5Bresize%5D%5Bh%5D=472" />
        <GalleryPhoto classes='w1 h1' x='4' y='3' alt="Argentina-Bolivia" src="https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/argentina-v-venezuela-quarterfinal-copa-america-brazil-2019-5d167c0f3ee312b04e000001.jpg" />
        <GalleryPhoto classes='w2 h2' x='5' y='2' alt="Argentina-Bolivia" src="https://img2.rtve.es/v/5986379?w=800&preview=1626011162591.jpg" />
        <GalleryPhoto classes='w1 h1' x='7' y='2' alt="Argentina-Bolivia" src="https://4.bp.blogspot.com/-G1EQqWwfc74/WK868XqGBOI/AAAAAAAAA3U/jxztPvrhhS0aa8P9DAe_nnCVWSWztT8TQCEw/s640/00%2BHome.png" />
        <GalleryPhoto classes='w2 h1' x='0' y='4' alt="Argentina-Bolivia" src="https://pbs.twimg.com/media/E6vYW80X0AE9vik.jpg" />
        <GalleryPhoto classes='w2 h1' x='2' y='4' alt="Argentina-Bolivia" src="https://images.clarin.com/2021/06/08/los-once-que-arrancaron-contra___4i_sx8NC3_1200x630__1.jpg" />
        <GalleryPhoto classes='w2 h1' x='4' y='4' alt="Argentina-Bolivia" src="https://media.ambito.com/p/a6bde8b528338fd5930f68f9b35dfc64/adjuntos/239/imagenes/039/087/0039087107/emiliano-martinez.jpg" />
        <GalleryPhoto classes='w1 h1' x='6' y='4' alt="Argentina-Bolivia" src="https://depor.com/resizer/FxhTGY8NAFjgUP-sf7SyX-CU_iM=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LHTMVQMYMZGCXHUVVUXLNHTY5I.jpg" />
        <GalleryPhoto classes='w1 h2' x='7' y='3' alt="Argentina-Bolivia" src="https://www.infobae.com/new-resizer/NOiIrEcooJp-Tvygo8iTJwUNARI=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/L67FEQUFBZFZ7MPEKT44RPS2HA.JPG" />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
