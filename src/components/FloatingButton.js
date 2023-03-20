import React, { useState } from "react";
import { BsFillPatchPlusFill } from 'react-icons/bs';
import { FiFacebook } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';


const FloatingButton = () => {
    const [showBtns, setShowBtn] = useState(true);

    return (
        <div className="floating-buttons"  onMouseOver={() => setShowBtn(false)} onMouseOut={() => setShowBtn(true)}>
            <a href="https://t.me/Crymosas" target="_blank" rel="noopener noreferrer" className={showBtns ? "floating-button instagram" : "floating-button sc-active"}><TbBrandTelegram /></a>
            <a href="https://www.facebook.com/Cosettelullaby" target="_blank" rel="noopener noreferrer" className={showBtns ? "floating-button instagram" : "floating-button sc-active"}><FiFacebook /> </a>
            <button 
            onClick={() => {
                setShowBtn(!showBtns)
            }} className={showBtns ? "floating-button telegram" : "floating-button telegram active"}>
                <BsFillPatchPlusFill />
            </button>
        </div>
    );
}

export default FloatingButton;