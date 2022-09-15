import React from 'react';
import { ImCancelCircle } from "react-icons/im";
import { v4 as uuidv4 } from "uuid";

const Popup = ({ visible, onClose, imgSrc, title, desc }) => {
    if (!visible) return null;

    return (
        <div className="popup">
            <div className='modal-content'>
                <div className='modal-text'>
                    <h1 className='popup_h1'>{title}</h1>

                    {desc.map((steps) => (
                        <p key={uuidv4()}>{steps.text}</p>
                    ))}

                    <button className='close-modal' onClick={onClose} >
                        <ImCancelCircle size={35} />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Popup;