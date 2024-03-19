
import React, { useEffect } from "react";
import Modal from "./ImgLightBox";

export default function Gallery({images}) {
  const [showModal, setShowModal] = React.useState(false);
  const [imgSrc, setImgScr] = React.useState("");
  const getImage = (imgsrc) => {
        setImgScr(imgsrc);
        setShowModal(true);
  }

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 w-5/6 mx-auto my-12">
        {images.map((item, index) => (
          <div
            key={index}
            className={`h-[150px] w-auto lg:h-[230px] lg:w-auto`} onClick={() => getImage(`${item.image}`)}
          >
            <img
              className="w-full h-full object-cover"
              src={`${item.image}`}
              alt="gallery"
            />
          </div>
        ))}
      </div>
      {showModal ? <Modal imgSrc={imgSrc} setShowModal={setShowModal} images={images} /> : null}
    </>
  );
}