"use client";
import '../stories/output.css';
import React, { useEffect, useState, useRef } from "react";
import { BiFullscreen, BiRightArrowAlt, BiLeftArrowAlt, BiX} from 'react-icons/bi';
import { handlefullscreen } from "./Fullscreen";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Controls, Component } from "./ZoomImage";


export default function Modal({imgSrc,setShowModal = "true", images ,autoSlide = false, autoSlideInterval = 3000}) {
      const [filteredImages, setFilteredImages] = useState(images);
      const refImage = useRef(null);
      const [currentSlide, setCurrentSlide] = useState(0);
      const prevSlide = () => {
          const isFirtsSlide = currentSlide === 0;
          const newSlide = isFirtsSlide ? filteredImages.length - 1 : currentSlide - 1;
          setCurrentSlide(newSlide);
      }
      const nextSlide = () => {
          const lastSlide = currentSlide === filteredImages.length - 1;
          const newSlide = lastSlide ? 0 : currentSlide + 1;
          setCurrentSlide(newSlide);
      }

      useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(nextSlide, autoSlideInterval)
        return () => clearInterval(slideInterval)
      }, [currentSlide])

      const selectedImage = filteredImages.find(image => image.image === imgSrc);
      const selectedImageIndex = filteredImages.indexOf(selectedImage);
      useEffect(() => { 
        setCurrentSlide(selectedImageIndex);
      }, [setCurrentSlide]);

  return(
<>
<div className="overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="h-screen border-0 shadow-lg relative bg-gray-900/90">
              <div className="grid grid-cols-2 py-2">
                  <div className="text-white col-span-1">{`${currentSlide +1 }/${filteredImages.length -1}`}</div>
                  <div className="col-span-1 text-end text-white place-self-end px-2">
                    <div className="flex flex-row">
                    <div className="p-2">
                      <BiFullscreen size={20} onClick={() => handlefullscreen(refImage)} />
                    </div>
                      {/* <div className="p-1">
                      <BiZoomIn size={25} />
                      </div> */}
                      <div className="content-center p-1">
                      <BiX size={28} onClick={() => setShowModal(false)}/>
                    </div>
                    </div>
                  </div>
              </div>
              <div className="relative">
                {/* Left Arrow*/}
                 <div className='absolute top-[50%] -traslate-x-0 traslate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BiLeftArrowAlt onClick={prevSlide} size={20} />
                </div> 
                {/* Right Arrow*/}
                 <div className='absolute top-[50%] -traslate-x-0 traslate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BiRightArrowAlt onClick={nextSlide} size={20} />
                </div>
                <div className="grid grid-cols-3 place-content-center mt-20">
                  <div className="col-span-1"></div>
                  <div className="col-span-1">
                <TransformWrapper ref={Component.transformComponentRef}>
                  {(utils) => (
                    <React.Fragment>
                      <Controls {...utils} />
                      <TransformComponent>
                        <img className="lg:h-96 h-100 object-cover" src={`${filteredImages[currentSlide].image}`} ref={refImage} alt="gallery" /> 
                    
                        </TransformComponent>
                    
                    </React.Fragment>
                  )}
                </TransformWrapper>
                </div>
                <div className="col-span-1"></div>
                </div>
                </div>
                
              </div>
            </div>
</>
  );
}
