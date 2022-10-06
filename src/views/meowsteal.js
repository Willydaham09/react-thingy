import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './meowsteal.css'

const Meowsteal = (props) => {
  return (
    <div className="meowsteal-container">
      <Helmet>
        <title>meowsteal - Meow Studios web</title>
        <meta property="og:title" content="meowsteal - Meow Studios web" />
      </Helmet>
      <div className="meowsteal-hero">
        <div className="meowsteal-bg"></div>
        <Header></Header>
        <div className="meowsteal-container01" style="margin-left: auto; margin-right: auto;">
          <img src="/playground_assets/logo.png"></img>
          <div className="meowsteal-container02">
            <h1 className="meowsteal-text">MeowSteal SMP</h1>
            <span className="meowsteal-text01">
              <span>The best lifesteal SMP server</span>
              <br></br>
            </span>
          </div>
          <div className="meowsteal-container03">
            <a
              href="https://meowsteal.tebex.io"
              target="_blank"
              rel="noreferrer noopener"
              className="meowsteal-link button"
            >
              STORE
            </a>
            <a
              href="https://dsc.gg/meowsteal"
              target="_blank"
              rel="noreferrer noopener"
              className="meowsteal-link1 button"
            >
              DISCORD
            </a>
            <a href="#info" className="meowsteal-link2 button">
              PLAY
            </a>
          </div>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className="meowsteal-image"
          />
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="meowsteal-image1"
          />
        </div>
      </div>
      <div className="meowsteal-section1">
        <div className="meowsteal-container04">
          <div className="meowsteal-container05">
            <h6 className="meowsteal-text04">
              More compatibilty + more gamemodes = more players
            </h6>
            <h3 className="meowsteal-text05 healine">MeowSteal SMP</h3>
          </div>
          <div className="meowsteal-cards-container">
            <div className="meowsteal-card1">
              <div className="meowsteal-container06">
                <img
                  alt="image"
                  src="/playground_assets/1218741-800h.png"
                  className="meowsteal-image2"
                />
              </div>
              <h6 className="meowsteal-text06 textXL">Lifesteal</h6>
              <span className="meowsteal-text07">
                <span>
                  We offer lifesteal! The best gamemode in minecraft! How many
                  hearts can you stack up?
                </span>
                <br></br>
              </span>
            </div>
            <div className="meowsteal-card2">
              <div className="meowsteal-container07">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="meowsteal-icon"
                >
                  <path d="M512 930.857l365.714-199.429v-363.429l-365.714 133.143v429.714zM475.429 436.571l398.857-145.143-398.857-145.143-398.857 145.143zM950.857 292.571v438.857c0 26.857-14.857 51.429-38.286 64l-402.286 219.429c-10.857 6.286-22.857 9.143-34.857 9.143s-24-2.857-34.857-9.143l-402.286-219.429c-23.429-12.571-38.286-37.143-38.286-64v-438.857c0-30.857 19.429-58.286 48-68.571l402.286-146.286c8-2.857 16.571-4.571 25.143-4.571s17.143 1.714 25.143 4.571l402.286 146.286c28.571 10.286 48 37.714 48 68.571z"></path>
                </svg>
              </div>
              <h6 className="meowsteal-text10 textXL">EssentialsX</h6>
              <span className="meowsteal-text11">
                <span>
                  This awesome plugin features tools like /home, /spawn, /pay
                  and much more!
                </span>
                <br></br>
              </span>
            </div>
            <div className="meowsteal-card3">
              <div className="meowsteal-container08">
                <svg viewBox="0 0 1024 1024" className="meowsteal-icon2">
                  <path d="M229.714 404l282.286 174.286-195.429 162.857-280-182.286zM793.143 721.143v61.714l-280 167.429v0.571l-0.571-0.571-0.571 0.571v-0.571l-279.429-167.429v-61.714l84 54.857 195.429-162.286v-1.143l0.571 0.571 0.571-0.571v1.143l196 162.286zM316.571 67.429l195.429 162.857-282.286 173.714-193.143-154.286zM794.286 404l193.143 154.857-279.429 182.286-196-162.857zM708 67.429l279.429 182.286-193.143 154.286-282.286-173.714z"></path>
                </svg>
              </div>
              <h6 className="meowsteal-text14 textXL">Crates</h6>
              <span className="meowsteal-text15">
                Crates! You get awesome crates and keys! Who knows, you might
                get lucky!
              </span>
            </div>
          </div>
          <div id="serverinfo" className="meowsteal-work-with-us">
            <div id="info" className="meowsteal-container09">
              <h3 className="meowsteal-text16 healine">How can i join?</h3>
              <span className="meowsteal-text17">
                <span className="meowsteal-text18">
                  Server ip: play.meowsteal.net
                </span>
                <br></br>
                <span className="meowsteal-text20">
                  Server port: 19132 (bedrock)
                </span>
                <br></br>
                <br></br>
                <span>
                  You can join on java and bedrock editions of the game! You may
                  also join using versions 1.18 -&gt; 1.19
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Meowsteal
