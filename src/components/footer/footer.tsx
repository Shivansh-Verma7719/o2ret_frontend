import React, { useState } from 'react';
import './index.css';
import Copyicon from '../../assets/icons/copy-svgrepo-com.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tickicon from '../../assets/icons/tick-svgrepo-com.svg';

export default function Footer() {
    const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

    const onCopyText = () => {
        setCopyStatus(true);
        setTimeout(() => setCopyStatus(false), 3000); // Reset status after 2 seconds
    };
    const Icon = () => {
        if (copyStatus) {
            return (
                <img src={Tickicon} alt="copy" width="20" height="20" />
            );
            }
        else {
            return (
                <img src={Copyicon} alt="copy" width="20" height="20" />
            );
        }
    }
    return (
        <div className="footer">
            <h1 className='text-black font-Satoshi scale-75'>Connect with us!</h1>
            <div className='emailcont'>

                <CopyToClipboard text='contact@o2ret.com' onCopy={onCopyText}>      
                <button className='flex flex-row email icon'>
                    <p className='mx-2 text-o2ret-blue'>contact@o2ret.com</p> 
                    <Icon />
                </button>
                </CopyToClipboard>
            </div>
        </div>
    );
}
