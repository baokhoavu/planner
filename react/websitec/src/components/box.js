// Imported
import React, { Component } from 'react';
import styled from 'styled-components';

// Box Component Styles
const Box = styled.div
  
  `
    // border: 2px solid #09d3ac;
    position: absolute;
    right: .375%;
    width: 24%;
    top: 5%;
    height: 10%;
  `
;

const Button = styled.div

  `
    height: 2px;
    width: 14px;
    display: block;
    content: '';
    position: absolute;
    top: 30%;
    border-bottom: 2px solid #000;
  `
;

// Class based Component
export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
        events: []
    }

    // Bind Event
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit = (e) => {
    // this.state.events.push(e.target.value)
    console.log(e.target.value)
  }

  componentDidMount() {
	
  
  }

  render() {

    return (
      <div id="box" className="box">
      	<Box>
          
          <input 
            className='searchDiv'
            type='text'
            placeholder='Please fill in the blank'
            onSubmit={this.handleSubmit}
          />
          
          <div>
            <Button className="line"></Button>
            <Button className="line vertical"></Button>
          </div>
        </Box>
      </div>

    );
  }
}
