import React, { useState, useEffect } from 'react';
import classes from './category.module.css';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:3333/categories/all');
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

    return (
        <div className={classes.CategoryWrapper}>

            <div className={classes.CategoryTextWrapper}>
                <h2 className={classes.categoryDescription}>Categories</h2>
       
                <div className={classes.line}></div>
        
                <button className={classes.categoryBtn} onClick={toggleCategories}>
                    <a className={classes.categoryBtnDescription} href="#">{isExpanded ? 'All Categoris' : 'All Categoris'}</a>
                </button>
            </div>

            {isExpanded && (
                <div className={classes.categoryCardWrapper}>
                    {categories.slice(0,4).map((category) => (
                        <div key={category.id} className={classes.categoryCard}>
                            <img className={classes.categoryImg} src={`http://localhost:3333${category.image}`} alt={category.title} />
                            <h2 className={classes.categoryCardText}>{category.title}</h2>
                            
                        </div>
                    ))}
                    
                </div>
            )}
                <button className={classes.categoryBtnAdaptive} onClick={toggleCategories}>
                    <a className={classes.categoryBtnDescription} href="#">{isExpanded ? 'All Categoris' : 'All Categoris'}</a>
                </button>
        </div>
    );
};

export default Categories;