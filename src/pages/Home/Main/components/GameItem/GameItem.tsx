import React from "react";
import { IGameItem } from "../../../../../interfaces/interfaces";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const GameItem: React.FC<IGameItem> = ({
  thumbnail,
  title,
  price,
  platform,
  id,
  age
}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.item_block} onClick={() => navigate(id)}>
      <img alt="gamePhoto" src={thumbnail} className={styles.image} />
      <img alt="like" src="/images/favorite.png" className={styles.favorite} />
      <div className={styles.text_block}>
        <p className={styles.price}>€ {price}</p>
        <p className={styles.title}>{title}</p>
        <div className={styles.age_platform_block}>
          <p className={styles.text_age_platform}>{platform}</p>
        <p className={styles.text_age_platform}>{age}+</p>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
