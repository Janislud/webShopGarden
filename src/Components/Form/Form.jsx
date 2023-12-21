import { useState } from 'react';
import classes from '../Form/form.module.css';
import discount from '../Media/Form-media/form-img.svg'


const FormDiscount = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const nameReturn = (event) => {
    setName(event.target.value);
  };

  const phoneReturn = (event) => {
    setPhone(event.target.value);
  };

  const emailReturn = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Отправлено: ', { name, phone, email });
    setName('')
    setPhone('')
    setEmail('')
  };

  return (
    <div className={classes.backGround}>
      <h2 className={classes.FormDescription}>5% off on the first order</h2>
      <div className={classes.discountImgFormWrapper}>
        <img src={discount} alt="discount form icon" />
        <div className={classes.formWrapper}>
        <form onSubmit={handleSubmit}>
          <label className={classes.formLabel}>
            <input className={classes.formInput} placeholder='Name' type="text" value={name} id="name" onChange={nameReturn} />
          </label>
          <label className={classes.formLabel}>
            <input className={classes.formInput} placeholder='Phone' type="text" value={phone} id="phone" onChange={phoneReturn} />
          </label>
          <label className={classes.formLabel}>
            <input className={classes.formInput} placeholder='Email' type="text" value={email} id="email" onChange={emailReturn} />
          </label>
          <button className={classes.fomrBtn} type="submit"><p>Get a discount</p></button>
        </form>
        </div>
      </div>
    
    </div>
  );
};

export default FormDiscount;