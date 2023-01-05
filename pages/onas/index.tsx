import PhotoAlbum from "react-photo-album";
import NextJsImage from "../../components/NextJsImage";
import LightGallery from 'lightgallery/react';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
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

const Onas = () => {
  return (
    <div className="max-w-7xl">
        <div className="w-1/2">
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="img/img1.jpg">
                    <Image src={photos[0].src} alt={photos[0].src} />
                </a>
                <a href="img/img2.jpg">
                    <Image src={photos[1].src} alt={photos[1].src} />
                </a>
            </LightGallery>
        </div>
    </div>
  )
}

export default Onas