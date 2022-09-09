import React from "react";
import styles from "./styles.module.scss";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../../../../../redux/hooks";

type PropsType = {
  text: string;
  setFilters: ActionCreatorWithPayload<number | null, string>;
};

const ListFilterButton: React.FC<PropsType> = ({ text, setFilters }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.filter_block}>
      <p className={styles.text}>{text}</p>
      <img
        alt="deleteFilter"
        src={process.env.PUBLIC_URL + "/images/improved-delete-icon.png"}
        onClick={() => dispatch(setFilters(null))}
        className={styles.img}
      />
    </div>
  );
};

export default React.memo(ListFilterButton);
