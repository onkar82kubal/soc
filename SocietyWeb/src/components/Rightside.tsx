import React from "react";

const Rightside = () => {
  return (
    <div className="right_icon_bar">
      <ul>
        <li className="dropdown">
          <a
            href="javascript:void(0);"
            className="dropdown-toggle icon-menu"
            data-toggle="dropdown"
          >
            <i className="fa fa-bell"></i>
            <span className="notification-dot"></span>
          </a>
          <ul className="dropdown-menu notifications">
            <li className="header">
              <strong>You have 4 new Notifications</strong>
            </li>
            <li>
              <a href="javascript:void(0);">
                <div className="media">
                  <div className="media-left">
                    <i className="icon-info text-warning"></i>
                  </div>
                  <div className="media-body">
                    <p className="text">
                      Campaign <strong>Holiday Sale</strong> is nearly reach
                      budget limit.
                    </p>
                    <span className="timestamp">10:00 AM Today</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <div className="media">
                  <div className="media-left">
                    <i className="icon-like text-success"></i>
                  </div>
                  <div className="media-body">
                    <p className="text">
                      Your New Campaign <strong>Holiday Sale</strong> is
                      approved.
                    </p>
                    <span className="timestamp">11:30 AM Today</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <div className="media">
                  <div className="media-left">
                    <i className="icon-pie-chart text-info"></i>
                  </div>
                  <div className="media-body">
                    <p className="text">
                      Website visits from Twitter is 27% higher than last week.
                    </p>
                    <span className="timestamp">04:00 PM Today</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <div className="media">
                  <div className="media-left">
                    <i className="icon-info text-danger"></i>
                  </div>
                  <div className="media-body">
                    <p className="text">
                      Error on website analytics configurations
                    </p>
                    <span className="timestamp">Yesterday</span>
                  </div>
                </div>
              </a>
            </li>
            <li className="footer">
              <a href="javascript:void(0);" className="more">
                See all notifications
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="page-login.html" className="icon-menu">
            <i className="fa fa-power-off"></i>
          </a>
        </li>
        <li>
          <a href="app-inbox.html">
            <i className="fa fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="app-chat.html">
            <i className="fa fa-comments"></i>
          </a>
        </li>
        <li>
          <a href="app-calendar.html">
            <i className="fa fa-calendar"></i>
          </a>
        </li>
        <li>
          <a href="file-dashboard.html">
            <i className="fa fa-folder"></i>
          </a>
        </li>
        <li>
          <a href="app-contact.html">
            <i className="fa fa-id-card"></i>
          </a>
        </li>
        <li>
          <a href="blog-list.html">
            <i className="fa fa-globe"></i>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">
            <i className="fa fa-plus"></i>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" className="right_icon_btn">
            <i className="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Rightside;
