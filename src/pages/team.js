import React, {useState} from 'react';
import styles from "./signUp.module.css"
  
const SignUp = () => {

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
  });

  const handleChange = (e) => {
   const name = e.target.name;
   const value = e.target.value;
  setData({...data, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.firstName === "") {
      alert("please enter your firstName");
    }
    if (data.lastName === "") {
      alert("please enter your lastName");
    }
    if (data.gender === "") {
      alert("please enter your Gender");
    }
  };

  return (
    <div
      // style={{
      //   display: 'flex',
      //   justifyContent: 'Right',
      //   alignItems: 'Right',
      //   height: '100vh'
      // }}
    >
      <h1>Sign Up</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
     <div className={styles.form__group}>
      <label htmlFor=""className={styles.form__label}>
        First Name
      </label>
        <input type="text" name="firstName" className={styles.form__input} />
     </div>

     <div className={styles.form__group}>
      <label htmlFor=""className={styles.form__label}>
        Last Name
      </label>
        <input type="text" name="lastName" className={styles.form__input} />
      </div>
      
     <div className={styles.form__group}>
      <label htmlFor=""className={styles.form__label}>
        Gender
      </label>
      <select name="gender" onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female----</option>
      </select>
      <button type="submit">Submit</button>
    </div>
   </form>
     )
    </div>
  );
};
  
export default SignUp;