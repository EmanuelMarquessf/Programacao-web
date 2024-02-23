import styles from './styles.module.css'

export default function Information(props){
  return <div className={styles.wrapper}>{props.children}</div>
}