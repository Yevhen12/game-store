import React from 'react'
import styles from './styles.module.scss'
import useSuggestions from '../../../helpers/hooks/useSuggestions'
import SuggestionItem from './SuggestionItem/SuggestionItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const GameSuggestions = () => {

  const GAMES_TO_FETCH = 6
  const { fetchGames } = useSuggestions()
  const suggestionsArray = fetchGames(GAMES_TO_FETCH)

  const mappedArray = suggestionsArray.map(elem => <SwiperSlide key={elem.id}><SuggestionItem game={elem} /></SwiperSlide>)


  return (
    <div className={styles.wrapper}>
      <p>Other games</p>
      <div className={styles.blockSlider}>
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {mappedArray}
        </Swiper>
      </div>
    </div>
  )
}

export default GameSuggestions