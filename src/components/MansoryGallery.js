import React, { useState } from 'react';
import GalleryItem from './GalleryItem';
import ImageModal from './ImageModal';
import './MansoryGallery.css';
import imgBaguettes from '../images/baguettes.jpg';
import imgAbout1 from '../images/about-us-image-1.jpg';
import imgAbout2 from '../images/about-us-image-2.jpg';
import imgInterior from '../images/interior-of-a-bakery.webp';
import imgRye from '../images/rye.jpg';
import imgHero from '../images/hero-image.jpg';
import imgCroissants from '../images/ChatGPT Image Dec 10, 2025, 09_00_47 PM.png';
import imgteam from '../images/Gemini_Generated_Image_j2hu6sj2hu6sj2hu.png';
import imgcustomers from '../images/Gemini_Generated_Image_olmdm4olmdm4olmd.png';
import hello from '../images/Gemini_Generated_Image_pbgwgfpbgwgfpbgw.png';
import jaaaaaa from '../images/Gemini_Generated_Image_7682zw7682zw7682.png';


const MansoryGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const galleryItems = [
    { id: 1, size: 'large', image: imgBaguettes},
    { id: 2, size: 'medium', image: imgAbout1 },
    { id: 3, size: 'large', image: imgInterior},
    { id: 4, size: 'medium', image: imgAbout2},
    { id: 5, size: 'medium', image: imgHero},
    { id: 6, size: 'medium', image: imgRye},
    { id: 7, size: 'medium', image: imgBaguettes},
    { id: 8, size: 'large', image: imgAbout1},
    { id: 9, size: 'medium', image: imgCroissants},
    { id: 10, size: 'medium', image: imgteam},
    { id: 11, size: 'large', image: imgcustomers},
    { id: 12, size: 'medium', image: hello},
    { id: 13, size: 'medium', image: jaaaaaa},
  ];

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNext = () => {
    if (selectedIndex < galleryItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div className="gallery-container">
      
      
      <div className="masonry-grid">
        {galleryItems.map((item, index) => (
          <GalleryItem 
            key={item.id} 
            id={item.id} 
            size={item.size} 
            image={item.image}
            // title={item.title}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={galleryItems[selectedIndex].image}
        title={galleryItems[selectedIndex].title}
        onNext={goToNext}
        onPrevious={goToPrevious}
        canGoNext={selectedIndex < galleryItems.length - 1}
        canGoPrevious={selectedIndex > 0}
      />
    </div>
  );
};

export default MansoryGallery;
