import styles from "./styles.module.css";

export default function Button(props) {

  return (
    <a
      className={styles.link}
      href={props.link}
      target="_blank"
    >
      {props.children}
    </a>
  );
}
