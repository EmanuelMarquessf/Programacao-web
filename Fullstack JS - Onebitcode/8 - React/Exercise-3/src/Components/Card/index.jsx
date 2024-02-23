import { useState } from "react";

import useCounter from "../../hooks/useCounter";

import styles from "./styles.module.css";
import Name from "../Name";
import Button from "../Button";
import ProfileSection from "../ProfileSection";

export default function Card(props) {
  let [isFollow, setIsFollow] = useState(false);
  const [followText, setFollowText] = useState("Follow");
  const counter = useCounter();

  function handleClick() {
    setIsFollow(!isFollow);
    setFollowText(isFollow ? "Follow" : "Following");
    alert("Você está seguindo");
  }

  return (
    <div className={styles.card}>
      <img className={styles.perfilImg} src={props.img} alt="" />
      <Name>
        {props.name}
        <button className={styles.followButton} onClick={handleClick}>
          {followText}
        </button>
        <button className={styles.followButton} onClick={counter.increment}>Follows: {counter.count}</button>
      </Name>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <Button click="teste" link={props.git}>
        GitHub
      </Button>
      <Button link={props.linkedin}>LinkedIn</Button>
      <Button link={props.twitter}>Twitter</Button>
    </div>
  );
}
