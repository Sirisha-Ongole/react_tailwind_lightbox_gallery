import { ImgLightBox } from "./ImgLightBox";
import React from 'react';
import IMG1 from './assets/IM1.jpg';
import IMG2 from './assets/IM2.jpg';
import IMG3 from './assets/IM3.jpg';
import IMG4 from './assets/IM4.jpg';
import Gallery from "../components/ImgGrid";

export default {
  title: 'Example/ImgLightBox',
  component: Gallery,
  tags: ['autodocs'],
  
};

export const Primary = {
    args: {
        images: [
        {
            image: IMG1,
        },
        {
            image: IMG2,
        },
        {
            image: IMG3,
        },
        {
            image: IMG4,
        } 
        ]
    },render: (args) => <ImgLightBox {...args} />
};