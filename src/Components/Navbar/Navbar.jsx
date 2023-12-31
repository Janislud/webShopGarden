import React, { useState } from "react";
import classes from "./navbar.module.css";
import gardenLogo from "../Media/Header-media/garden-shop-logo.svg"
import bucketLogo from '../Media/Header-media/bucket-icon.svg'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { Link } from "react-router-dom";


const Navbar = () => {

    const [navigation,setNavigation] = useState(false)

    const toggleNavigation = () => {
        setNavigation(!navigation);
    };

   
    return (
        <header>
                <div className={classes.navigationWrapper}>
                    <a href="#"><img className={classes.gardenLogo} src={gardenLogo} alt="" /></a>
                    <div onClick={() => toggleNavigation(!navigation)} className={classes.mobileBtm}>
                       {!navigation ? <AiOutlineMenu size={25}/> : ' '} 
                    </div>
                    <nav className={classes.mainNavigation}>
                   
                    <ul className={navigation ? [classes.mainNavigationList, classes.active].join(' ') : [classes.mainNavigationList]}>
                    <div onClick={() => toggleNavigation(!navigation)} className={classes.mobileBtmSec}>
                        <AiOutlineClose size={25}/> 
                    </div>
                        <li className={classes.list}>
                            <Link className={classes.headerText} to="/main">Main Page</Link>
                        </li>
                        <li>
                            <Link className={classes.headerText} to="/category">Categories</Link>
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