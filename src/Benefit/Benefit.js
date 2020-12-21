import React from 'react';
import circle from '../circle-cropped.png'
import bergana from '../images/bergana.png'
import community from '../images/community.png'
import human from '../images/human.png'
import indonesia from '../images/indonesia.png'
import privacy from '../images/privacy.png'
import simple from '../images/simple.png'
import support from '../images/support.png'
import video from '../images/video.png'

const benefit = [
    {
        id: 1,
        image: circle,
        text: '100% AMAN'
    },
    {
        id: 2,
        image: video,
        text: 'materi optimasi channel'
    },
    {
        id: 3,
        image: support,
        text: 'support system'
    },
    {
        id: 4,
        image: simple,
        text: 'Mudah & simple'
    },
    {
        id: 5,
        image: community,
        text: 'Komunitas Youtuber paling solid'
    },
    {
        id: 6,
        image: human,
        text: 'Real Human'
    },
    {
        id: 7,
        image: privacy,
        text: 'Opsi Privasi'
    },
    {
        id: 8,
        image: bergana,
        text: 'Bergaransi'
    },
]

const Benefit = () => {
    return (
        <div style={{fontFamily: "Comic Neue, cursive", fontWeight:'800'}}>
            <h4 className='text-center' style={{margin:'100px 0'}}>FITUR DAN BENEFIT YANG KAMI TAWARKAN</h4>
            <div className='d-flex flex-wrap'>
                {
                    benefit.map(x =>
                        <div className='d-flex col-md-3 col-6 justify-content-center'>
                            <div className='text-center mb-5' data-aos="flip-left">
                                <img src={x.image} style={{ width: '100px', margin:'auto' }} alt="" />
                                <h4 className='mt-2'>{x.text}</h4>
                            </div>
                            
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Benefit;