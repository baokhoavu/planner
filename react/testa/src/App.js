import React, { Component } from 'react';
import ParticleComponent from "./components/ParticleComponent";
import Tree from "./components/Tree";
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import './App.css';
import imageA from './assets/imageA.png';
import imageB from './assets/imageB.png';
import imageC from './assets/imageC.png';
import imageD from './assets/imageD.png';
import imageE from './assets/imageE.png';
import imageF from './assets/imageF.png';


const bounceAction = keyframes`${bounce}`;

const Background = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 5;

    > div {
        height: 100%;
    }

    > div:nth-of-type(2) {
        left: 25%;
    }

    > div:nth-of-type(3) {
        left: 50%;
    }

    > div:nth-of-type(4) {
        left: 75%;
    }

    &:nth-of-type(2) {
        left: 25%;
        position: absolute;
    }
`

const Container = styled.div`
    overflow: scroll;
    height: 100vh;
    scroll-snap-type: y mandatory;
    position: relative;
    z-index: 10;
    transition: 0.4s;
`

const Box = styled.div`
    transition: 0.4s;
    width: 100vw;
    display: table;
    overflow: hidden;
    scroll-snap-align: start;
    
    &.whole {
        height: 100vh;
    }

    > div {
        display: table-cell;
        vertical-align: middle;
    }


    &.first div div {
        width: 300px;
        margin: 0 auto;
        text-align: left;
    }

    &.second > .a {
        vertical-align: unset;
    }

    &.second > .a > .b {
        // width: 90%;
        // margin: 5% auto;
    }

    &.third div div {
        width: 600px;
        margin: 0 auto;
    }

    &.third div div p {
        text-align: left;
    }

    &.third div div a {
        color: #fff;
    }

    &.third div div a:hover {
        color: #5b6670;
    }
    

`

const Scrollable = styled.div`
    // height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    transition: 0.4s;

    > div > div {
        scroll-snap-align: start;
    }

    > div > div > div:nth-child(1) {
        display: inline-block;
        width: 65%;
    }

    > div > div > div:nth-child(2) {
        display: inline-block;
        width: 35%;
        position: relative;
        bottom: 280px;
        // padding: 12.5%;
    }

    > div > div > div:nth-child(2) > div {
        padding-left: 10%;
    }


    > div > div > div > div {
        // margin: 50px 50px 0;
    }

    > div > div > div > div > img {
        // height: 100%;
        // width: 100%;
        transition: 0.4s;
        // max-height: 575px;
    }

    > div > div > div > div > img:hover {
        transform: scale(1.025)
    }

    > div > div > div > div > p {
        text-align: left;
    }

    > div > div > div p > a {
        color: #fff
    }

    > div > div > div > p:hover,
    > div > div > div p > a:hover {
        color: #5b6670;
    }

`

const Bounce = styled.div`
    position: relative;
    top: 50px;
    transition: 0.4s;
    max-width: 50px;
    margin: 0 auto;

    &.bouncing {
        animation: 6s ${bounceAction}
        animation-iteration-count: infinite;
    }
`

// const Image = styled.Img`
//     height: 100vh;
//     width: 400px;
//     background-image: url("${imageF}");
//     -webkit-transition: 0.4s;
//     transition: 0.4s;
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: 50% 50%;
// `
const Image = styled.div`
    height: 100vh;
    width: 100%;    
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border: 1px solid #000;

    &.a {
        background-image: url("${imageA}");
    }

    &.b {
        background-image: url("${imageD}");
        background-position-x: left;
    }

    &.c {
        background-image: url("${imageE}");
        background-position-x: left;
    }

    &.d {
        background-image: url("${imageB}");
    }

    
`

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bounce: true,
        }

    
    }


    componentDidMount() {
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Background>
                        {/* <Tree></Tree> */}
                        <ParticleComponent />
                    </Background>
                    <Container>
                        <Box className="first whole">
                            <div>
                                <div>
                                    <p>B A O</p>
                                    <p>ReactJS, Angular 7</p>
                                    <p>Full Stack Developer</p>
                                    <Bounce className='bouncing'>V</Bounce>
                                </div>
                            </div>
                        </Box>

                        <Box className="second whole">
                            <div className="a">
                                <div className="b">
                                    <Scrollable>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <Image className="a"></Image>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <p>Ride To Conquer Cancer Toronto</p>
                                                        <p>ReactJS, Redux, Blackbaud Luminate</p>
                                                        <p>
                                                            <a href="https://secure.conquercancer.ca/devReactBao">Link</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Scrollable>
                                </div>
                                
                            </div>
                        </Box>

                        <Box className="second whole">
                            <div className="a">
                                <div className="b">
                                    <Scrollable>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <Image className='b'></Image>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <p>Online Check In</p>
                                                        <p>Angular 5, Typescript, Express, Blackbaud Luminate</p>
                                                        <p>
                                                            <a href="https://secure.conquercancer.ca/va19_dev/index.html#/step-01">Link</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Scrollable>
                                </div>
                            </div>
                        </Box>

                        <Box className="second whole">
                            <div className="a">
                                <div className="b">
                                    <Scrollable>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <Image className='c'></Image>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <p>KOI</p>
                                                        <p>Angular 5, Express, Mongodb, Blackbaud Luminate</p>
                                                        <p>
                                                            <a href="https://secure.conquercancer.ca/va19_dev/index.html#/step-01">Link</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Scrollable>
                                </div>
                            </div>
                        </Box>

                        <Box className="second whole">
                            <div className="a">
                                <div className="b">
                                    <Scrollable>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <Image className='d'></Image>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <p>Weekend To Conquer Cancer</p>
                                                        <p>Wordpress, jQuery, Blackbaud Luminate</p>
                                                        <p>
                                                            <a href="https://secure.weekendtoconquercancer.ca/site/SPageNavigator/to20_homepage">Link</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Scrollable>
                                </div>
                            </div>
                        </Box>

                        <Box className="third whole">
                            <div>
                                <div>
                                    <p>
                                        <a href="https://www.facebook.com/baokhoa.vu">
                                            Facebook
                                        </a>
                                        {/* <a href="#">
                                            A
                                        </a> */}
                                    </p>
                                    <p>
                                        <a href="https://www.linkedin.com/in/baokhoadvu/">
                                            Linkedin
                                        </a>
                                        {/* <a href="#">
                                            A
                                        </a> */}
                                    </p>
                                </div>
                            </div>
                        </Box>

                    </Container>
                </header>
            </div>
        )
    }
}
