import styles from "./styles.module.css";

export default function TextInput(){
  return(
    <div className={styles.container}>
      <label htmlFor="">Email</label>
      <input type="text" required/>
    </div>
  )
}