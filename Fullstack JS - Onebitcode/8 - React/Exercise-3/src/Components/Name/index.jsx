import styles from './styles.module.css'

export default function Name(props){
  return(
    <div className={styles.name}>{props.children}</div>

  )
}