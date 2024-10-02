import React from 'react'

const Rightside = () => {
  return (
    <div className="right_icon_bar">
        <ul>
            <li><a href="app-inbox.html"><i className="fa fa-envelope"></i></a></li>
            <li><a href="app-chat.html"><i className="fa fa-comments"></i></a></li>
            <li><a href="app-calendar.html"><i className="fa fa-calendar"></i></a></li>
            <li><a href="file-dashboard.html"><i className="fa fa-folder"></i></a></li>
            <li><a href="app-contact.html"><i className="fa fa-id-card"></i></a></li>
            <li><a href="blog-list.html"><i className="fa fa-globe"></i></a></li>
            <li><a href="javascript:void(0);"><i className="fa fa-plus"></i></a></li>
            <li><a href="javascript:void(0);" className="right_icon_btn"><i className="fa fa-angle-right"></i></a></li>
        </ul>
    </div>
  )
}

export default Rightside



