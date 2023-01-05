import LightGallery from 'lightgallery/react';

import lgZoom from 'lightgallery/plugins/zoom';
import Image from "next/image";


const photos = [
    {
        src: "/onas0.jpg",
        width: 800,
        height: 600
    },
    {
        src: "/onas1.jpg",
        width: 1300,
        height: 900
    },
    {
        src: "/onas2.jpg",
        width: 1200,
        height: 900
    },
    {
        src: "/onas3.jpg",
        width: 800,
        height: 900
    },
    {
        src: "/onas4.jpg",
        width: 900,
        height: 900
    },
    {
        src: "/onas5.jpg",
        width: 1600,
        height: 900
    },
    {
        src: "/onas6.jpg",
        width: 1600,
        height: 900
    },
    {
        src: "/onas7.jpg",
        width: 900,
        height: 900
    },
    {
        src: "/onas8.jpg",
        width: 1400,
        height: 900
    }
];

const Oklubie = () => {
  return (
    <div className="max-w-7xl">
        <div className="">
            <LightGallery
                speed={500}
                plugins={[lgZoom]}
            >
                {photos.map(({src}) =>
                    <a key={src} href={src} >
                        <Image src={src} alt={src} width={200} height={200} />
                    </a>            
                )}
            </LightGallery>
        </div>
    </div>
  )
}

export default Oklubie