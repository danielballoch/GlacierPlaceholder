import React from "react"
import Video from "../components/video"
import GlacierVideo from "../images/TundraReelBrightSmall.mp4"
import GlacierVideoMobile from "../images/TundraReelMobileSmall.mp4"
import styled from '@emotion/styled';
import Layout from "../components/layout";

const pageStyles = {
    padding: 0,
    margin: 0,
  }

const Main = styled.div`
padding: 0;
margin: 0;
color: white;
h1 {
    color: white;
    font-family: sans-serif;
    font-size: 50px;
}
body {
    margin: 0;
    padding: 0;
}

video {
    gridArea: 1/1;
    position: relative;
    placeItems: center;
    display: grid;
    object-fit: cover;
    object-position: 32%; 
    /* filter: saturate(100%); */
    height: 100vh;
    @media(maxWidth){
        /* object-fit: cover;
        object-position: 32%; 
        height: 100vw;
        */
    }
}
`

const LogoOver = styled.div`
mix-blend-mode: darken;
opacity: .7;
width: 100%;
height: 100vh;
z-index: 2;
position: relative;
background-color: #000;
text-align: center;
border: 0;
margin: 0;
.cls-1 {
    fill: #FFFFFF;
    text-anchor: middle;
    font-size: 150px;
    font-family: Cardo;
}
.cls-2 {
    fill: #FFFFFF;
    text-anchor: middle;
    font-size: 36px;
    font-family: "Open Sans";
    letter-spacing: 12px;
    margin-right: -12px;
}
    ::after, ::before {
    box-sizing: border-box;
    }
}
`

const CenterContent = styled.div`
    /* max-width: 98vw; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-content: center; */
    /* background-color: rgba(0,0,0,0.5); */
.herotext {
    display: flex;
    position: absolute;
    z-index: 2;
    opacity: .8;
    top: 67vh;
    width: 100%;
    
    justify-content: center;
    margin: 0 auto;
    p {
        max-width: 900px;
        width: 98%;
    }
}
div {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
p {
    max-width: 1100px;
    margin: 40px auto 20px auto;
    text-align: center;
    /* font-family: visby,sans-serif; */
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1.4px;
    font-size: 13px;
    opacity: 1;
    color: white;
}
p:nth-of-type(2n) {
    margin-top: 0px;
}
a {
    margin: auto;
}
button {
    margin: auto;
    border: 1px solid white;
    color: white;
    background: rgba(0,0,0,0);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    line-height: 1.5;
    font-family: sans-serif;
    font-size: 14px;
    padding: 12px 60px;
    transition: .3s;
    :hover {
        cursor: pointer;
        background: rgba(255,255,255,1);
        color: black;
    }
}
`



const isBrowser = typeof window !== "undefined";

const IndexPage = () => {
  let HeroVideo;
  if (isBrowser && window.innerWidth <= 450){
    HeroVideo = <Video className="videoClass" videoSrcURL={GlacierVideoMobile} videoTitle="Glacier Hero Video"/>
  } else if (isBrowser && window.innerWidth > 450) {
    HeroVideo = HeroVideo = <Video className="videoClass" videoSrcURL={GlacierVideo} videoTitle="Glacier Hero Video"/>
  }
  return (
    <Layout title="Glacier International | New Website Coming Soon!">
        <Main style={pageStyles}>
        <div style={{ display: "grid", maxHeight: "100vh"}} id="homeSection">
            {HeroVideo}
            {/* <Video
                className="videoClass"
                videoSrcURL={HeroVideo}
                videoTitle="Glacier Hero Video"
            /> */}
            <div
                style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeItems: "center",
                    display: "grid",
                    }}
                >
                <CenterContent>
                
                    <div>
                    <LogoOver>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="89 0 700 194">
                            <text id="GLACIER" className="cls-1" transform="translate(436.953 118.261) scale(.8)"><tspan x="0">GLACIER</tspan></text>
                            <text id="_-_INTERNATIONAL_-" data-name="- INTERNATIONAL -" className="cls-2" transform="translate(441.978 159.767) scale(.8)"><tspan x="0">- INTERNATIONAL -</tspan></text>
                        </svg>
                    </LogoOver>
                    <div className="herotext">
                        <p>Glacier International is a one-stop shop for importing, right hand drive re-manufacturing, and customising your Toyota Sequoia or Tundra. With cutting edge technology, the 2023 Toyota Sequoia and Tundra are meticulously engineered luxury hybrid machines, and our goal is to deliver them to Kiwis who value reliability, performance and class over anything else. </p>
                        <p>New Website Coming soon - For any questions about our right hand drive 2023 Sequoia or Tundra packages please email sales@glacier.nz</p>
                    </div>
                    </div>
                </CenterContent>
            </div>
        </div>
        </Main>
        </Layout>
  )
}

export default IndexPage
