import gardenLogo from '../Components/Media/Header-media/garden-shop-logo.svg'
import bucketLogo from '../Components/Media/Header-media/bucket-icon.svg'
import classes from './header.module.css'

const Header = () =>  {

    return (
        <>
        
            <header>
                <div className={classes.navigationWrapper}>
                    <a href="#"><img className={classes.gardenLogo} src={gardenLogo} alt="" /></a>
                    
                    <nav className={classes.mainNavigation}>
                    <ul className={classes.mainNavigationList}>
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
                    <a href="#"><img className={classes.bucketLogo} src={bucketLogo} alt="" /></a>
                    
                </div>
            </header>
        </>
    ) 
}

export default Header;