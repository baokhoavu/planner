// Imported
import React, { Component } from 'react';
import styled from 'styled-components';

import aa from '../assets/aa.PNG';
import ab from '../assets/ab.PNG';
import ac from '../assets/ac.PNG';
import ad from '../assets/ad.PNG';
import ae from '../assets/ae.PNG';
import af from '../assets/af.PNG';
import ag from '../assets/ag.PNG';
import ah from '../assets/ah.PNG';
// import ai from '../assets/ai.PNG';
// import aj from '../assets/aj.PNG';

// Box Component Styles
const Box = styled.div`
    position: absolute;
    right: .375%;
    width: 24%;
    top: 5%;
    height: 10%;
    color: black;

    span {
      color: red;
    }

    p span {
      color: blue;
    }

    select {
      width: 95%;
      padding: 15px;
      border: 1px solid #000;
    }

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }
  `
;

const List = styled.div`
    margin: 25px 5px;
    height: 950px;
    overflow: hidden;
    overflow-y: auto;

`

const Item = styled.div`
    display: flex; 
    flex-flow: wrap;
    height: 125px;

    div:nth-child(1) {
        flex: 0 0 25%;
    }

    div:nth-child(2) {
        flex: 0 0 75%;
    }

    div h2, div p {
        font-size: 18px;
        text-align: left;
    }

    &.active {
        display: flex;
    }

    &.null {
        display: none;
    }
`

const Image = styled.a`
    display: block;
    height: 75px;
    max-width: 75px;
    border-radius: 150px;
    margin: 20px auto 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition-delay: 75ms;

    &.a {
        background-image: url("${aa}");
    }

    &.b {
        background-image: url("${ab}");
    }

    &.c {
        background-image: url("${ac}");
    }

    &.d {
        background-image: url("${ad}");
    }

    &.e {
        background-image: url("${ae}");
    }

    &.f {
        background-image: url("${af}");
    }

    &.g {
        background-image: url("${ag}");
    }

    &.h {
        background-image: url("${ah}");
    }
    
`

// Class based Component
export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
        events: [],
        hp: true,
        kbbq: true,
        boba: true
    }

    // Bind Event
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit = (e) => {
    // this.state.events.push(e.target.value)
    console.log(e.target.value)

    if (e.target.value === 'KBBQ') {
        this.setState({
            kbbq: true,
            hp: false,
            boba: false
        })
    } else if (e.target.value === 'BOBA') {
        this.setState({
            kbbq: false,
            hp: false,
            boba: true
        })
    } else if (e.target.value === 'HP') {
        this.setState({
            kbbq: false,
            hp: true,
            boba: false
        })
    } else if (e.target.value === 'X') {
        this.setState({
            kbbq: true,
            hp: true,
            boba: true
        })
    }
  }

  componentDidMount() {
	
  
  }

  render() {

    return (
      <div id="box" className="box">
      	<Box>
          <h2>There's always a <span>Plan</span></h2>
          <p>Local hot spots in <strong>Rowland Heights</strong> known to fill that craving</p>
          <select id="cars" onChange={this.handleSubmit}>
            <option value="X">What?</option>
            <option value="HP">Hot Pot</option>
            <option value="KBBQ">Korean BBQ</option>
            <option value="BOBA">Boba</option>
          </select>
          <List>
            <Item className={this.state.hp ? 'active' : 'null' }>
              <div>
                <Image className="a"></Image>
              </div>
              <div>
                <h2>
                  Boiling Point / <span className="hp">Hot Pot</span>
                </h2>
                <p>
                  ABG Hot Pot without cooking <br/> 
                  Special Self Customizable sauce
                </p>
              </div>
            </Item>
            <Item className={this.state.hp ? 'active' : 'null' }>
              <div>
                <Image className="b"></Image>
              </div>
              <div>
                <h2>
                  Jazz Cat / <span className="hp">Hot Pot</span>
                </h2>
                <p>
                  ABG Hot Pot with cooking<br/>
                  Special customizable sauce
                </p>
              </div>
            </Item>
            <Item className={this.state.hp ? 'active' : 'null' }>
              <div>
                <Image className="c"></Image>
              </div>
              <div>
                <h2>
                    Momo Paradise HotPot / <span className="hp">Hot Pot</span>
                </h2>
                <p>
                    ABG Hot Pot with cooking
                </p>
              </div>
            </Item>
            <Item className={this.state.kbbq ? 'active' : 'null' }>
              <div>
                <Image className="d"></Image>
              </div>
              <div>
                <h2>
                    Thirsty Cow / <span className="kbbq">Korean BBQ</span>
                </h2>
                <p>
                    AYCE KBBQ with generous meat
                </p>
              </div>
            </Item>
            <Item className={this.state.boba ? 'active' : 'null' }>
              <div>
                <Image className="e"></Image>
              </div>
              <div>
                <h2>
                    Sharetea / <span className="boba">Boba</span>
                </h2>
                <p>
                    Norcal Fruit Teas
                </p>
              </div>
            </Item>
            <Item className={this.state.boba ? 'active' : 'null' }>
              <div>
                <Image className="f"></Image>
              </div>
              <div>
                <h2>
                    7 Leaves / <span className="boba">Boba</span>
                </h2>
                <p>
                    Norcal Iced Coffee
                </p>
              </div>
            </Item>
            <Item className={this.state.boba ? 'active' : 'null' }>
              <div>
                <Image className="g"></Image>
              </div>
              <div>
                <h2>
                    Tastea / <span className="boba">Boba</span>
                </h2>
                <p>
                    Tastea Fries
                </p>
              </div>
            </Item>
            <Item className={this.state.boba ? 'active' : 'null' }>
              <div>
                <Image className="h"></Image>
              </div>
              <div>
                <h2>
                    Half and Half / <span className="boba">Boba</span>
                </h2>
                <p>
                    Extra Big Cups
                </p>
              </div>
            </Item>
            {/* <Item>
              <div>
                <Image className="a"></Image>
              </div>
              <div>
                <h2>
                    Hideout / Boba
                </h2>
              </div>
            </Item>
            <Item>
              <div>
                <Image className="a"></Image>
              </div>
              <div>
                <h2>
                    Afters / Dessert
                </h2>
              </div>
            </Item>
            <Item>
              <div>
                <Image className="a"></Image>
              </div>
              <div>
                <h2>
                    Pho Ha / Pho
                </h2>
              </div>
            </Item>
            <Item>
              <div>
                <Image className="a"></Image>
              </div>
              <div>
                <h2>
                    Molca Salsa / Munchies
                </h2>
              </div>
            </Item>
            <Item>
              <div>
                <Image className="a"></Image>
              </div>
              <div>
                <h2>
                    Colima Burger / Munchies
                </h2>
              </div>
            </Item> */}
          </List>
        </Box>
      </div>

    );
  }
}
