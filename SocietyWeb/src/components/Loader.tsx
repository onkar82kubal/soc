import React from 'react'
import LoaderIcon from "../asset/images/logo-icon.svg"

const Loader = () => {
  return (
    <div className="page-loader-wrapper">
    <div className="loader">
        <div className="m-t-30">
            <img src={LoaderIcon} width="48" height="48" alt="Iconic" />
        </div>
        <p>Please wait...</p>
    </div>
</div>
  )
}

export default Loader



