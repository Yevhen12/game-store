import React, { useState, useEffect } from 'react'
import DropMenu from '../../../../../../components/Modals/DropMenu/DropMenu'
import { useAppDispatch } from '../../../../../../redux/hooks'
import { setSearch, setPage } from '../../../../../../redux/slices/filterSlice/filterSlice'
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
    const subsriber = setTimeout(() => {
      dispatch(setSearch(textForm))
      dispatch(setPage(1))
    }, 300)

    return () => clearTimeout(subsriber)

  }, [textForm, dispatch])

  const clearTextForm = () => {
    setTextForm('')
    if (refInput.current) {
      refInput.current.focus()
    }
  }

  const topAnimation = activeModal ? '45px' : '10px'

  return (
    <div className={styles.block_input}>
      {!activeModal && <img alt='search' src='/images/search-icon.png' className={styles.search} />}
      <div className={`${styles.position_block_input} ${activeModal ? styles.z_20 : styles.z_10}`}>
        <input
          ref={refInput}
          type='text'
          value={textForm}
          placeholder="Search"
          className={`${styles.input} ${activeModal ? styles.active : styles.disabled}`}
          onFocus={() => setActiveModal(true)}
          onChange={(e) => setTextForm(e.target.value)}
        />
      </div>
      {activeModal && textForm.length > 0 && <img alt='delete' src='/images/delete-icon.png' className={styles.delete} onClick={clearTextForm} />}

      <DropMenu
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        topAnimation={topAnimation}
        rigthPosition='0px'
      >
        <div className={styles.dropMenu_items}>
          
        </div>
      </DropMenu>
    </div>
  )
}

export default Search
