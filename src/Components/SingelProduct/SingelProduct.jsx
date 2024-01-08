import React, { useState, useEffect } from 'react';
import classes from './singelProduct.module.css';

const SingleProduct = () => {
    const [categories, setCategories] = useState([]);
    const [isExpanded, setIsExpanded] = useState(true);
    const [number,setNumber] = useState(1);


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:3333/products/all');
                const data = await response.json();
                console.log(data);
                setCategories(data);
            } catch (error) {
                console.log("Error fetching category list");
            }
        };

        fetchCategories();
    }, []);

    const toggleCategories = () => {
        setIsExpanded(!isExpanded);
    };

    const handlePlusClick = () => {
        setNumber((prevAge) => prevAge + 1)
    }

    const handleMinusClick = () => {
        if(number > 0) {
            setNumber((prevAge) => prevAge - 1)
        }
    }

    return (
    
        <div className={classes.CategoryWrapper}>

            <div className={classes.CategoryTextWrapper}>
                 <button className={classes.categoryBtn} onClick={toggleCategories}>
                    <a className={classes.categoryBtnDescription} href="#">{isExpanded ? 'Main Page' : 'Main Page'}</a>
                </button>
       
                <div className={classes.line}></div>
        
                <button className={classes.categoryBtn} onClick={toggleCategories}>
                    <a className={classes.categoryBtnDescription} href="#">{isExpanded ? 'Categoris' : 'Categoris'}</a>
                </button>
            </div>

            {isExpanded && (
                <div className={classes.categoryCardWrapper}>
                    {categories.slice(0,1).map((singleProduct) => (
                        <div key={singleProduct.id} className={classes.categoryCard}>
                            <img className={classes.categoryImg} src={`http://localhost:3333${singleProduct.image}`} alt={singleProduct.title} />
                            <div className={classes.singleCardDescription}>
                            <h2 className={classes.categoryCardText}>{singleProduct.title}</h2>
                            <div>
                            <p>{singleProduct.discont_price}</p>
                            <p>{singleProduct.price}</p> 
                            <div className={classes.saleBlock}>
                            {singleProduct.price && singleProduct.discont_price && (
                             `-${Math.round(((singleProduct.price - singleProduct.discont_price) / singleProduct.price) * 100)}%`
                            )}
                            </div>
                            </div>
                            <div className={classes.conculation}>
                            <button onClick={handleMinusClick}>-</button>
                            <p>{number}</p>
                            <button onClick={handlePlusClick}>+</button>
                            <button>Add to Card</button>
                            </div>
                            <h3>Description</h3>
                            <p>{singleProduct.description}</p>
                            <h3>Read more</h3>
                            </div>
                          
                            
                        </div>
                    ))}
                    
                </div>
            )}
                <button className={classes.categoryBtnAdaptive} onClick={toggleCategories}>
                    <a className={classes.categoryBtnDescription} href="#">{isExpanded ? 'All Categoris' : 'All Categoris'}</a>
                </button>
        </div>
            
       
    )
}

export default SingleProduct;