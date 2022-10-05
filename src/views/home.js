import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Meow Studios web</title>
        <meta property="og:title" content="Meow Studios web" />
      </Helmet>
      <div className="home-hero">
        <div className="home-bg"></div>
        <Header></Header>
        <div className="home-container01">
          <div className="home-container02">
            <h1 className="home-text">MeowNetwork</h1>
            <span className="home-text01">
              <span>The best minecraft server network</span>
              <br></br>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className="home-image"
          />
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="home-image1"
          />
        </div>
      </div>
      <div className="home-section1">
        <div className="home-container03">
          <div className="home-container04">
            <h6 className="home-text04">
              Crossplay + fun gamemodes = better server
            </h6>
            <h3 className="home-text05 healine">MeowNetwork</h3>
          </div>
          <div className="home-cards-container">
            <div className="home-card1">
              <div className="home-container05">
                <img
                  alt="image"
                  src="/playground_assets/1218741-800h.png"
                  className="home-image2"
                />
              </div>
              <h6 className="home-text06 textXL">Survival</h6>
              <span className="home-text07">
                <span>We offer Survival on the server which</span>
                <br></br>
                <span>
                  has essentials on it. This makes the game WAY more fun
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-card2">
              <div className="home-container06">
                <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
                  <path d="M512 930.857l365.714-199.429v-363.429l-365.714 133.143v429.714zM475.429 436.571l398.857-145.143-398.857-145.143-398.857 145.143zM950.857 292.571v438.857c0 26.857-14.857 51.429-38.286 64l-402.286 219.429c-10.857 6.286-22.857 9.143-34.857 9.143s-24-2.857-34.857-9.143l-402.286-219.429c-23.429-12.571-38.286-37.143-38.286-64v-438.857c0-30.857 19.429-58.286 48-68.571l402.286-146.286c8-2.857 16.571-4.571 25.143-4.571s17.143 1.714 25.143 4.571l402.286 146.286c28.571 10.286 48 37.714 48 68.571z"></path>
                </svg>
              </div>
              <h6 className="home-text12 textXL">Creative</h6>
              <span className="home-text13">
                <span className="home-text14">
                  Get a plot to build on! You can build anything on your plot or
                  even combine plots!
                </span>
                <br></br>
                <span>Can you build the best structure?</span>
                <br></br>
              </span>
            </div>
            <div className="home-card3">
              <div className="home-container07">
                <img
                  alt="image"
                  src="/playground_assets/download-removebg-preview-1500h.png"
                  className="home-image3"
                />
              </div>
              <h6 className="home-text18 textXL">Skyblock</h6>
              <span className="home-text19">
                Try to survive on an island with limited resources! Can you
                survive on a floating island?
              </span>
            </div>
          </div>
          <div className="home-cards-container1">
            <div className="home-card31">
              <div className="home-container08">
                <img
                  alt="image"
                  src="/playground_assets/48530-200-1500h.png"
                  className="home-image4"
                />
              </div>
              <h6 className="home-text20">
                <span className="home-text21 textXL">Bridge Duels</span>
                <br></br>
              </h6>
              <span className="home-text23">
                Try to get on to the other team&apos;s island and jump in their
                portal! First team to 5 points wins! 
              </span>
            </div>
            <div className="home-card32">
              <div className="home-container09">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M1009.996 828.976l-301.544-301.544c-18.668-18.668-49.214-18.668-67.882 0l-22.626 22.626-184-184 302.056-302.058h-320l-142.058 142.058-14.060-14.058h-67.882v67.882l14.058 14.058-206.058 206.060 160 160 206.058-206.058 184 184-22.626 22.626c-18.668 18.668-18.668 49.214 0 67.882l301.544 301.544c18.668 18.668 49.214 18.668 67.882 0l113.136-113.136c18.67-18.666 18.67-49.214 0.002-67.882z"></path>
                </svg>
              </div>
              <h6 className="home-text24 textXL">Build Battle</h6>
              <span className="home-text25">
                <span>
                  Are you good at building? If so, check out Build Battle! This
                  minigame
                </span>
                <br></br>
                <span>
                  lets you battle with other builders to see who&apos;s is the
                  best!
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-card33">
              <div className="home-container10">
                <img
                  alt="image"
                  src="/playground_assets/689447-200-1500h.png"
                  className="home-image5"
                />
              </div>
              <h6 className="home-text30 textXL">Parkour</h6>
              <span className="home-text31">
                <span className="home-text32">
                  Jump from block to block and hope you dont fall! This gamemode
                  is
                </span>
                <br></br>
                <span>super fun (and a little frustrating)</span>
                <br></br>
              </span>
            </div>
          </div>
          <h1 className="home-text36">Coming Soon</h1>
          <div className="home-cards-container2">
            <div className="home-card34">
              <div className="home-container11">
                <img
                  alt="image"
                  src="/playground_assets/48530-200-1500h.png"
                  className="home-image6"
                />
              </div>
              <h6 className="home-text37">
                <span className="textXL">Kit Duels</span>
                <br></br>
              </h6>
              <span className="home-text40">
                Fight PvP-legacy style at school! Battle your friends or even
                bet on your battle!
              </span>
            </div>
            <div className="home-card35">
              <div className="home-container12">
                <svg
                  viewBox="0 0 1170.2857142857142 1024"
                  className="home-icon4"
                >
                  <path d="M146.286 585.143h987.429c20 0 36.571 16.571 36.571 36.571v256h-146.286v-146.286h-877.714v146.286h-146.286v-694.857c0-20 16.571-36.571 36.571-36.571h73.143c20 0 36.571 16.571 36.571 36.571v402.286zM475.429 402.286c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM1170.286 548.571v-36.571c0-121.143-98.286-219.429-219.429-219.429h-402.286c-20 0-36.571 16.571-36.571 36.571v219.429h658.286z"></path>
                </svg>
              </div>
              <h6 className="home-text41 textXL">Bedwars</h6>
              <span className="home-text42">
                <span>
                  Try to destroy enemies beds as you gather resources and become
                  the very best of them all!
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div id="serverinfo" className="home-work-with-us">
            <div id="info" className="home-container13">
              <h3 className="home-text45 healine">How can i join?</h3>
              <span className="home-text46">
                <span className="home-text47">Server ip: new.meowsmp.ga</span>
                <br></br>
                <span className="home-text49">
                  Server port: 19132 (bedrock)
                </span>
                <br></br>
                <br></br>
                <span>
                  You can join on
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://eaglercraft.net"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  Eaglercraft
                </a>
                <span>, Java and even Bedrock Edition! You can also join </span>
                <span>on any version from 1.8-1.19!</span>
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

export default Home
