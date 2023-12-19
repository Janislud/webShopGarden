import classes from '../Sales/sales.module.css'
import bridge from '../Media/Sales-media/bridge-img.svg'
import flower from '../Media/Sales-media/flower-basket-img.svg'
import aquarium from '../Media/Sales-media/aquarium-lock-img.svg'
import secateurs from '../Media/Sales-media/secateurs-img.svg'

const Sales = () => {
    return <div className={classes.salesWrapper}>

        <div className={classes.salesTextWrapper}>
        <h2 className={classes.saleText}>Sale</h2>
        <div className={classes.salesLine}></div>
        <button className={classes.saleBtn}><a href="#">All sales</a></button>
        </div>

        <div className={classes.saleCardWrapper}>
        <div className={classes.saleCard}>
            <img className={classes.saleImg} src={bridge} alt="Decorative forged bridge" />
            <h3 className={classes.saleCardText}>Decorative forged bridge</h3>
            <div className={classes.salePriceWrapper}>
                <p className={classes.realPrice}>$500</p>
                <p className={classes.firstPrice}>$1000</p>
            </div>
        </div>
        <div className={classes.saleCard}>
            <img className={classes.saleImg} src={flower} alt="Flower basket" />
            <h3 className={classes.saleCardText}>Flower basket</h3>
            <div className={classes.salePriceWrapper}>
                <p className={classes.realPrice}>$100</p>
                <p className={classes.firstPrice}>$150</p>
            </div>
        </div>
        <div className={classes.saleCard}>
            <img className={classes.saleImg} src={aquarium} alt="Aquarium lock" />
            <h3 className={classes.saleCardText}>Aquarium lock</h3>
            <div className={classes.salePriceWrapper}>
                <p className={classes.realPrice}>$150</p>
                <p className={classes.firstPrice}>$200</p>
            </div>
        </div>
        <div className={classes.saleCard}>
            <img className={classes.saleImg} src={secateurs} alt="Secateurs" />
            <h3 className={classes.saleCardText}>Secateurs</h3>
            <div className={classes.salePriceWrapper}>
                <p className={classes.realPrice}>$199</p>
                <p className={classes.firstPrice}>$240</p>
            </div>
        </div>
        </div>
        
    </div>
}


export default Sales;