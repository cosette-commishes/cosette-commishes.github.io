import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';
import { IoChatbubblesOutline } from 'react-icons/io5';


const FloatingButton = () => {
    const [showBtns, setShowBtn] = useState(true);
    const changess = () => {
        setShowBtn(!showBtns);
    }

    return (
        <div class="floating-buttons"  onMouseOver={() => setShowBtn(false)} onMouseOut={() => setShowBtn(true)}>
            <a href="#" className={showBtns ? "floating-button instagram" : "floating-button sc-active"}><TbBrandTelegram /></a>
            <a href="#" className={showBtns ? "floating-button instagram" : "floating-button sc-active"}><FiFacebook /> </a>
            <a href="#" className={showBtns ? "floating-button telegram" : "floating-button telegram active"}><IoChatbubblesOutline /></a>
        </div>



    );
}

export default FloatingButton;