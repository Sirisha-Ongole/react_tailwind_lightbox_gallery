"use client";

import React, {useState, useRef } from "react";
import { BiZoomIn, BiZoomOut} from 'react-icons/bi';
 
export const Controls = ({ zoomIn, zoomOut }) => {
    const [clickzoomIn, setClickZoomIn ] = useState(true);
    return (
    <>
    <div className="text-white">
     {clickzoomIn ? <BiZoomIn onClick={() => {zoomIn(); setClickZoomIn(false)}} size={25} /> :<BiZoomOut onClick={() => {zoomOut(); setClickZoomIn(true);}} size={25} />}
     </div>
    </>
    )
    };
  
 export const Component = () => {
    const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
}