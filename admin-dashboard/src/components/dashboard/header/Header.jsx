import React from 'react'
import './header.css'
function Header() {
  return (
  <section className="top-header">
  <div className="container-fluid">
    <div className="row d-lg-none top-mobile-view">
      <div className="top-header-list mobile-view-list">
        <ul>
            <li><a href="#"><i className="fa fa-user-circle-o" aria-hidden="true"></i>admin</a></li>
            <li><a href="#"><i className="fa fa-globe mx-2 p-0" aria-hidden="true"></i>redirect.ringoncore.com</a></li>
        </ul>
    </div>
    </div>
      <div className="row">
          <div className="col-lg-8 col-md-8 col-10 d-flex align-items-center">
              <div className="top-logo">
                  <a href="#">
                      <img src="/img/loging-logo.png" className="img-fluid d-block" alt=""/>
                  </a>
              </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12 d-flex align-items-center dsm_none">
              <div className="top-header-list">
                  <ul>
                      <li><a href="#"><i className="fa fa-user-circle-o" aria-hidden="true"></i>admin</a></li>
                      <li><a href="#"><i className="fa fa-globe mx-2 p-0" aria-hidden="true"></i>redirect.ringoncore.com</a></li>
                  </ul>
              </div>
          </div>
          <div className="col-lg-1 col-md-1 col-2 dsm-show">
              <div className="logout-button">
                  <a href="#"><i className="fa fa-sign-in" aria-hidden="true"></i>
                  </a>
              </div>
          </div>
      </div>
  </div>
</section>
  )
}

export default Header