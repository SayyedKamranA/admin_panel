import React from 'react'
import './index.css'
function Dashboard() {
  return (
    <div><div id="page-content-wrapper"> 
    <div class="page-content-top">
      <ul>
        <li>
          <h5>user</h5>
          <p>Edit user information and group membership</p>
        </li>
        <li>
          <button type="button" class="info-btn save-button"><i class="fa-solid fa-bookmark"></i>save</button>
        </li>
      </ul>
    </div>

    <div class="page-registration-field">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-12">
          <form class="dsbrd-registration-box">
              <input type="text" class="form-control" id="fname" placeholder="First Name"/>
              <input type="text" class="form-control" id="chsuser_name" placeholder="Choose your Username"/>
              <input type="Password" class="form-control mb-0" id="Password" placeholder="Password"/>
              <span class="small-txt" style={{paddingTop: "3px",marginBottom: "28px", display: "block"}}>Password should be 8 characters with Number, Lowercase, Uppercase</span>
              <input type="text" class="form-control" id="Organization" placeholder="Organization"/>
              <select class="form-select" aria-label="Default select example">
                <option selected>Language</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
          </form>
        </div>
        <div class="col-lg-6 col-md-12 col-12">
          <form class="dsbrd-registration-box">
              <input type="text" class="form-control" id="lname" placeholder="Last Name"/>
              <input type="text" class="form-control" id="email" placeholder="Email"/>
              <input type="Password" class="form-control" id="Password" placeholder="Password"/>
              <span class="small-txt" style={{paddingTop: "0px",marginBottom: "48px", display: "block"}}></span>
              <input type="Password" class="form-control" id="Con-Password" placeholder="Confirm Password"/>
              <select class="form-select" aria-label="Default select example">
                <option selected>Groups</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
          </form>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <form class="dsbrd-registration-box">
            <select class="form-select" aria-label="Default select example" style={{margin: 0}}>
              <option selected>Status</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <span class="small-txt" style={{paddingTop: "3px",marginBottom: "37px", display: "block"}}>Set the user’s presence..</span>
            <div class="api-generate-box toggle-switch">
              <p id="state">Enable</p> 
              <div class="toggle-row">
                <a id="switch_on" class="switch-btn">on</a>
                <a id="switch_off" class="not_selected">off</a>
              </div>
            </div>   
          </form>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <form class="dsbrd-registration-box">
            <select class="form-select" aria-label="Default select example" style={{marginBottom: "47px"}}>
              <option selected>Domain</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select" aria-label="Default select example">
              <option selected>Billing Type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </form>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <form class="dsbrd-registration-box">
           <div class="api-generate-box">
            <input type="text" class="frorm-control m-0" style={{borderBottom: "none !important"}} placeholder="API Key" id="api-generate"/>
           <button type="button" class="generate-btn">Generate</button> 
          </div>
           <span class="small-txt" style={{paddingTop: "3px",marginBottom: "28px", display: "block"}}>Use the generate button to create a key.</span>
           <select class="form-select" aria-label="Default select example">
            <option selected>Call Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </form>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Dashboard