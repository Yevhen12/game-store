import React, { useState, useEffect } from 'react'
import DropMenu from '../../../../../../components/Modals/DropMenu/DropMenu'
import { useAppDispatch } from '../../../../../../redux/hooks'
import { setSearch, setPage } from '../../../../../../redux/slices/filterSlice/filterSlice'
import { setSearching } from '../../../../../../redux/slices/loadingSlice/loadingSlice'
import styles from './styles.module.scss'

type PropsType = {
  refInput: React.RefObject<HTMLInputElement>
}

const Search: React.FC<PropsType> = ({ refInput }) => {

  const dispatch = useAppDispatch()
  const [activeModal, setActiveModal] = useState<boolean>(false)
  const [textForm, setTextForm] = useState<string>('')

  useEffect(() => {
    if (textForm.length > 0) setActiveModal(true)
  }, [textForm])

  useEffect(() => {
    dispatch(setSearching(true))
    const subsriber = setTimeout(() => {
      dispatch(setSearch(textForm))
      dispatch(setPage(1))
      dispatch(setSearching(false))
    }, 300)

    return () => clearTimeout(subsriber)

  }, [textForm, dispatch])

  const clearTextForm = () => {
    setTextForm('')
    if (refInput.current) {
      refInput.current.focus()
    }
  }

  return (
    <div className={styles.block_input}>
      <div className={`${styles.position_block_input}`}>
        <input
          ref={refInput}
          type='text'
          value={textForm}
          placeholder="Search"
          className={`${styles.input} ${styles.active}`}
          onFocus={() => setActiveModal(true)}
          onChange={(e) => setTextForm(e.target.value)}
        />
      </div>
      {activeModal && textForm.length > 0 && <img alt='delete' src={process.env.PUBLIC_URL + '/images/improved-delete-icon.png'} className={styles.delete} onClick={clearTextForm} />}

      {/* <DropMenu
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        topAnimation={topAnimation}
        rigthPosition='0px'
      >
        <div className={styles.dropMenu_items}>
          
        </div>
      </DropMenu> */}
    </div>
  )
}

export default React.memo(Search)
