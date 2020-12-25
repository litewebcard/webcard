import React from 'react';
import {  MdFlipToBack, MdFlipToFront } from 'react-icons/md';

function HandleFlip({isFlipped,handleCardFlip}) {
    return (
        <div className="px-5 font-bold text-lg cursor-pointer flex 
        content-center flex-col bg-white max-w-sm mx-auto w-full"
            onClick={()=>handleCardFlip()}>

            {isFlipped && <div className="flex flex-row justify-center text-sm text-gray-600"><MdFlipToFront style={{ marginTop: "4px" }} />Move to front</div>}
            {!isFlipped && <div className="flex flex-row justify-center text-sm text-gray-600"><MdFlipToBack style={{ marginTop: "4px" }} />Move to back</div>}
        </div>
    )
}

export default HandleFlip
