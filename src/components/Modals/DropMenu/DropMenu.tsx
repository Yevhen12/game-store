import React from 'react'

interface IDropMenu {
    activeModal: boolean
    setActiveModal: Function
    children: any
}

const DropMenu:React.FC<IDropMenu> = ({children, activeModal, setActiveModal}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default DropMenu
