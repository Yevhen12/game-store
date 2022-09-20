import React, { useMemo } from 'react'
import styles from './styles.module.scss'
import FilterButton from './DropMenuButton/FilterButton'
import PlatfromButton from './PlatformButton/PlatfromButton'
import { setAge, setPrice, setGenre, setPlatform } from '../../../../../../redux/slices/filterSlice/filterSlice'


export const ageArray = ['6+', '9+', '12+', '16+', '18+']
export const genreArray = ['MMORPG', 'ARPG', 'Shooter', 'Strategy', 'Fighting', 'Action RPG', 'Battle Royale', 'Card Game', 'Sports']
export const priceArray = ['30 - 35€', '35 - 40€', '40 - 45€', '45 - 50€', '50 - 55€', '55 - 60€']
export const platfromArray = ['PS4', 'PS5', 'PC (Windows)']


const FilterForm = () => {

  const mappedPlatfromButtons = useMemo(() => platfromArray.map((elem, idx) => <PlatfromButton key={idx} text={elem} setPlatform={setPlatform} />), [platfromArray])
  return (
    <div className={styles.form_block}>
      <div className={styles.buttons_block}>
        <FilterButton dataArray={genreArray} text='Genre' setFilters={setGenre} />
        <FilterButton dataArray={priceArray} text='Price' setFilters={setPrice} />
        <FilterButton dataArray={ageArray} text='Age rating' setFilters={setAge} />
      </div>
      <div className={styles.buttons_block}>
        {mappedPlatfromButtons}
      </div>
    </div>
  )
}

export default React.memo(FilterForm)
