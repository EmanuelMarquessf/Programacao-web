import ExternalTitle from "./components/Title"
import {Subtitle} from "./components/Subtitle"
import styles from "./App.module.css"

function sum(num1, num2){
  return num1 + num2
}

function Title(){
  const tech = 'React'
  return(
    <h3>Course {tech}</h3>
  )
}

export default function App(){
  const name = 'Emanuel'
  const status = true;
  const value1 = 2;
  const value2 = 3
  return(
    <div className={styles.app}>
      <Title />
      <ExternalTitle />
      <Subtitle />
      <p>My name`s {name}</p>
      <p>Sum {value1} + {value2} = {sum(value1, value2)}</p>
      <p
      style={{
        color: status ? '#00ff9f' : '#f64348'
      }}
      >Status: {status ? 'ON' : 'OFF'}</p>
    </div>
  )
}