import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import useSuggestions from '../../../helpers/hooks/useSuggestions'
import SuggestionItem from './SuggestionItem/SuggestionItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper';
import { IGameItem } from '../../../interfaces/interfaces'
import { useParams } from 'react-router-dom'
import useWindowSize from '../../../helpers/hooks/useWindowSize';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'


const GameSuggestions: React.FC = () => {

  const GAMES_TO_FETCH = 6
  const { gameId } = useParams()
  const { fetchGames } = useSuggestions()
  const [suggestionsArray, setSuggestionsArray] = useState<IGameItem[]>([])
  const { innerWidth } = useWindowSize()

  useEffect(() => {
    setSuggestionsArray(fetchGames(GAMES_TO_FETCH, Number(gameId)))
  }, [])

  const mappedArray = suggestionsArray.length > 0 && suggestionsArray.map(elem => <SwiperSlide key={elem.id}><SuggestionItem game={elem} /></SwiperSlide>)
  let countVisibleSuggestions = 3

  if (innerWidth < 1300 && innerWidth > 930) {
    countVisibleSuggestions = 2
  } else if (innerWidth < 930) {
    countVisibleSuggestions = 1
  }



  console.log(suggestionsArray)


  return (
    <div className={styles.wrapper}>
      <p className={styles.other}>Other games</p>
      <div className={styles.blockSlider}>
        <Swiper
          modules={[Pagination, A11y, Scrollbar]}
          slidesPerView={countVisibleSuggestions}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          watchSlidesProgress={true}
        >
          <div className={styles.suggestions_block_items}>
            {mappedArray}
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default React.memo(GameSuggestions)