import React from 'react';
import AOS from 'aos';

AOS.init({
    duration: 2000
});
const Header = () => {
    return (
        <div className='container py-5' style={{padding:''}}>
            <div className='d-flex flex-wrap justify-content-center align-items-center'>
                <div className='col-md-6 text-left' >
                    <p className='' style={{fontWeight: 'bold', fontFamily: "Comic Neue, cursive", fontSize:'20px'}}>Sudah coba rutin upload video, share link ke segala penjuru, mendaki gunung, lewatin lembah tapi viewers dan subscribermu mogok segitu aja? <br/><br/><br/>

                    eiiits, jangan pesimis dulu bosque. Inilah saatnya PENDEKAR TURUN GUNUNG!
                    siapa tau, kamilah yang ditakdirkan jadi jawaban terakhir semua gundahmu #UhukLebaay</p>
                </div>
                <div className='col-md-6' data-aos='' >
                <iframe  style={{position: 'relative', top:'0', left:'0', right:'0', width:'100%', height:'300px'}}  src="https://www.youtube.com/embed/kFthJgdiHrw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Header;