import React from "react";
import styles from "./styles.module.scss";
import { ageArray, priceArray, genreArray, platfromArray } from "../FilterForm/FilterForm";
import {
  setAge,
  setPrice,
  setGenre,
  setPlatform,
} from "../../../../../../redux/slices/filterSlice/filterSlice";
import { useAppSelector, useAppDispatch } from "../../../../../../redux/hooks";
import ListFilterButton from "./Button/ListFilterButton";

const ListFilters: React.FC = () => {

  const ageFilter = useAppSelector((state) => state.filter.age);
  const priceFilter = useAppSelector((state) => state.filter.price);
  const genreFilter = useAppSelector((state) => state.filter.genre);
  const platformFilter = useAppSelector((state) => state.filter.platform)

  const dispatch = useAppDispatch()

  const isFiltersImplemented = ageFilter !== null || priceFilter !== null || genreFilter !== null || platformFilter !== null;

  const clearAllFilters:() => void = () => {
    dispatch(setAge(null))
    dispatch(setPrice(null))
    dispatch(setGenre(null))
    dispatch(setPlatform(null))
  }

  return (
    <>
      {isFiltersImplemented ? (
        <div className={styles.filter_block}>
          {ageFilter !== null && (
            <ListFilterButton text={ageArray[ageFilter]} setFilters={setAge} />
          )}
          {priceFilter !== null && (
            <ListFilterButton
              text={priceArray[priceFilter]}
              setFilters={setPrice}
            />
          )}
          {genreFilter !== null && (
            <ListFilterButton
              text={genreArray[genreFilter]}
              setFilters={setGenre}
            />
          )}
          {platformFilter !== null && (
            <ListFilterButton
              text={platfromArray[platformFilter]}
              setFilters={setPlatform}
            />
          )}
          
          <button className={styles.clearAllFilters} onClick={clearAllFilters}>Clear all filters</button>
        </div>
      ) : null}
    </>
  );
};

export default React.memo(ListFilters);
