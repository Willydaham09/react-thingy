import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Meow Studios web</title>
        <meta property="og:title" content="Profile - Meow Studios web" />
      </Helmet>
      <div className="profile-image">
        <Header></Header>
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className="profile-image1"
        />
        <div className="profile-bg"></div>
      </div>
      <img
        alt="image"
        src="/playground_assets/server%20icon-200h.jpg"
        className="profile-image2"
      />
      <div className="profile-container01">
        <div className="profile-container02">
          <div className="profile-container03"></div>
          <img
            alt="image"
            src="/playground_assets/img_0423-modified-200h.png"
            className="profile-image3"
          />
          <div className="profile-container04">
            <div className="profile-container05"></div>
          </div>
        </div>
        <div className="profile-container06">
          <h3 className="profile-text text2XL">AwesomePeep7</h3>
          <div className="profile-container07">
            <span className="profile-text1">
              <span>    Owner of Meow Studios</span>
              <br></br>
              <span>I am only 12 (believe it or not)</span>
              <br></br>
            </span>
          </div>
          <div className="profile-container08"></div>
          <div className="profile-container09">
            <div className="profile-container10"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Profile
