import React from 'react'
import moment from 'moment'
const Copyright = () => {
  return (
    <div className="copyright">
            <div className='copyrText'>
            &copy; Copyright {moment().format('YYYY')} SocietyWale. All Rights Reserved.
            </div>
        </div>
  )
}

export default Copyright