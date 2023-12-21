import { useEffect, useState } from 'react';
import classes from '../Sales/sales.module.css';

const Sales = () => {
    const [sales, setSales] = useState([]);
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await fetch('http://localhost:3333/products/all');
                const data = await response.json();
                console.log(data);
                setSales(data);
            } catch (error) {
                console.log("Error fetching product list");
            }
        };

        fetchSales();
    }, []);

    const expandedHandler = () => {
        setIsExpanded(!isExpanded);
    };

    const discountedSales = sales.filter((sale) => sale.discont_price !== null);

    return (
        <div className={classes.salesWrapper}>
            <div className={classes.salesTextWrapper}>
                <h2 className={classes.saleText}>Sale</h2>
                <div className={classes.salesLine}></div>
                <button className={classes.saleBtn} type="button" onClick={expandedHandler}>
                    {isExpanded ? 'All Sales' : 'All Sales'}
                </button>
            </div>

            {isExpanded && (
                <div className={classes.saleCardWrapper}>
                    {discountedSales.slice(0, 4).map((sale) => (
                        <div key={sale.id} className={classes.saleCard}>
                            <img className={classes.saleImg} src={`http://localhost:3333${sale.image}`} alt={sale.title} />
                            <h2 className={classes.saleCardText}>{sale.title}</h2>

                            <div className={classes.salePriceWrapper}>
                                <p className={classes.realPrice}>${sale.discont_price}</p>
                                
                                {sale.discont_price ? <p className={classes.firstPrice}>${sale.price}</p> : null}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Sales;