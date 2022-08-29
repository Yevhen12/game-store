import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import useSuggestions from '../../../helpers/hooks/useSuggestions'
import { useAppSelector } from '../../../redux/hooks'
import SuggestionItem from './SuggestionItem/SuggestionItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper';
import { IGameItem } from '../../../interfaces/interfaces'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'


const GameSuggestions:React.FC = () => {

  const GAMES_TO_FETCH = 6
  const { fetchGames } = useSuggestions()
  const [suggestionsArray, setSuggestionsArray] = useState<IGameItem[]>([])

  useEffect(() => {
    setSuggestionsArray(fetchGames(GAMES_TO_FETCH))
  }, [])
  const orderModal = useAppSelector(state => state.modal.activeModal)
  console.log(orderModal)

  const mappedArray = suggestionsArray.map(elem => <SwiperSlide key={elem.id}><SuggestionItem game={elem} /></SwiperSlide>)


  return (
    <div className={styles.wrapper}>
      <p>Other games</p>
      <div className={styles.blockSlider}>
        <Swiper
          modules={[Pagination, A11y, Scrollbar]}
          slidesPerView={3}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          watchSlidesProgress={true}
        >
          {mappedArray}
        </Swiper>
      </div>
    </div>
  )
}

export default GameSuggestions