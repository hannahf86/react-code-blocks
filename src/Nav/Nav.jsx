// REACT
import { useState } from 'react'

// ASSETS
import logo from '../Assets/LOGO.png'

// ICONS
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const Nav = () => {

    const styles = {
        container: 'fixed w-full h-[6em] flex justify-between items-center px-4 bg-[#F2C572]',
        text: 'text-[#4A4873] flex items-center px-6 font-bold',
        desktopMenu: 'hidden md:flex',
        hamburger: 'md:hidden z-10 text-[#4A4873] m-2 cursor-pointer',
        mobileMenu: 'absolute top-0 left-0 w-full h-screen bg-[#F2C572] flex flex-col justify-center items-center',
        mobileItem: 'text-[#4A4873] py-4 font-bold text-xl cursor-pointer',
    }


    {/* MENU FUNCTION */ }
    const [mobileNav, setMobileNav] = useState(false);
    const handleMobileNav = () => setMobileNav(!mobileNav);

    return (
        <>
            <div className={styles.container}>

                {/* LOGO */}
                <div className='z-10'>
                    <img src={logo} width={60} />
                </div>

                {/* MENU */}
                <ul className={styles.desktopMenu}>
                    <a href='/'><li className={styles.text}>Home</li></a>
                    <a href='/#levelOne'><li className={styles.text}>Page one</li></a>
                    <a href='/#levelTwo'><li className={styles.text}>Page two</li></a>
                    <a href='/#references'><li className={styles.text}>Settings</li></a>
                </ul>

                {/* HAMBURGER */}
                <div onClick={handleMobileNav} className={styles.hamburger}>
                    {
                        !mobileNav ? <HiMenuAlt3 size={36} /> : <HiX size={36} />
                    }
                </div>

                {/* MOBILE MENU */}
                <ul className={
                    !mobileNav ? 'hidden' : styles.mobileMenu}>
                    <a href='/'><li className={styles.mobileItem}>START</li></a>
                    <a href='/#levelOne'><li className={styles.mobileItem}>LEVEL ONE</li></a>
                    <a href='/#levelTwo'><li className={styles.mobileItem}>LEVEL TWO</li></a>
                    <li className={styles.mobileItem}></li>
                    <li className={styles.mobileItem}></li>
                    <li className={styles.mobileItem}></li>
                    <a href='/#references'><li className={styles.mobileItem}>References</li></a>
                </ul>

            </div>
        </>
    )
}


export default Nav
