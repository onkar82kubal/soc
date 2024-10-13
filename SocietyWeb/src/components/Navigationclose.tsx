import React from 'react'
import closeIcon from "../asset/images/close_button.svg"


const Navigationclose = () => {
  return (
        <>
        <img className="btn-toggle-offcanvas sidebar__close" src={closeIcon} alt="" />
            <img className="btn-toggle-fullwidth sidebar__close" src={closeIcon} alt="" />
        </>
      )
}

export default Navigationclose