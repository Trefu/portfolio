import { useState } from "react";
import close from '../assets/close.png';
import open from '../assets/open.png'
export const NavbarBtn = (props) => {
    const { showMenu } = props;
    const [isOpen, setIsOpen] = useState(true);
    const [imgBtn, setImgBtn] = useState(open);
    const handleClick = (e) => {
        e.preventDefault()
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            showMenu(true)
            setImgBtn(close);
            setIsOpen(false);
            return;
        }
        document.body.style.overflow = 'unset'

        showMenu(false)
        setImgBtn(open);

        return setIsOpen(true)
    }
    return (
        <button className='flex self-end md:hidden' onClick={handleClick}>
            <img src={imgBtn} alt="" style={{ width: '28px' }} />
        </button>
    )
}