import React from "react";
import { IGameItem } from "../../../../../interfaces/interfaces";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import Favorite from "../../../../../components/Favorite/Favorite";


const GameItem: React.FC<IGameItem> = (game) => {

  const navigate = useNavigate();
  const { thumbnail,
    title,
    price,
    platform,
    id,
    age } = game

  const styleObject = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    height: '25px',
    opacity: '0.9'
  }


  return (
    <div className={styles.item_block} onClick={() => navigate(`/games/${game.id}`)}>
      <img alt="gamePhoto" src={thumbnail} className={styles.image} />
      <Favorite styleObject={styleObject} game={game} />
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
