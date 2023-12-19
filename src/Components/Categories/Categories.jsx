import classes from './category.module.css'
import firstCard from '../Media/Category-media/fertilizer-img.svg'
import secondCard from '../Media/Category-media/planting-material-img.svg'
import threeCard from '../Media/Category-media/protective-product-and-septic-tanks-img.svg'
import fourCard from '../Media/Category-media/tools-and-equipment-img.svg'

const Categories = () => {
    return <div className={classes.CategoryWrapper}>
        <div className={classes.CategoryTextWrapper}>
        <h2 className={classes.categoryDescription}>Categories</h2>
        <div className={classes.line}>
      
        </div>
        <button className={classes.categoryBtn}><a className={classes.categoryBtnDescription} href="#">All categories</a></button>
        </div>
      
      <div className={classes.categoryCardWrapper}>
        <div className={classes.categoryCard}>
            <img src={firstCard} alt="" />
            <p className={classes.categoryCardText}>Fertilizer</p>
        </div>
        <div className={classes.categoryCard}>
            <img src={secondCard} alt="" />
            <p className={classes.categoryCardText}>Protective products and septic tanks</p>
        </div>
        <div className={classes.categoryCard}>
            <img src={threeCard} alt="" />
            <p className={classes.categoryCardText}>Planting material</p>
        </div>
        <div className={classes.categoryCard}>
            <img src={fourCard} alt="" />
            <p className={classes.categoryCardText}>Tools and equipment</p>
        </div>
      </div>
      

    </div>
}

export default Categories