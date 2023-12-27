import React, { useState } from "react";
import classes from "./navbar.module.css";
import gardenLogo from "../Media/Header-media/garden-shop-logo.svg"
import bucketLogo from '../Media/Header-media/bucket-icon.svg'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {

    const [navigation,setNavigation] = useState(false)

    const toggleNavigation = () => {
        setNavigation(!navigation);
    };

   
    return (
        <header>
                <div className={classes.navigationWrapper}>
                    <a href="#"><img className={classes.gardenLogo} src={gardenLogo} alt="" /></a>
                    <div onClick={() => setNavigation(!navigation)} className={classes.mobileBtm}>
                       {!navigation ? <AiOutlineMenu size={25}/> : ' '} 
                    </div>
                    <nav className={classes.mainNavigation}>
                   
                    <ul className={navigation ? [classes.mainNavigationList, classes.active].join(' ') : [classes.mainNavigationList]}>
                    <div onClick={() => setNavigation(!navigation)} className={classes.mobileBtmSec}>
                        <AiOutlineClose size={25}/> 
                    </div>
                        <li className={classes.list}>
                            <a className={classes.headerText} href="#">Main Page</a>
                        </li>
                        <li>
                            <a className={classes.headerText} href="#">Categories</a>
                        </li>
                        <li>
                            <a className={classes.headerText} href="#">All products</a>
                        </li>
                        <li>
                            <a className={classes.headerText} href="#">All sales</a>
                        </li>
                    </ul>
                  
                    </nav>
                    <a className={classes.bucket} href="#"><img className={classes.bucketLogo} src={bucketLogo} alt="" /></a>
                 
                    
                </div>
            </header>
    )
}

export default Navbar;