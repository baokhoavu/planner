import React from "react";
import styled, { keyframes } from 'styled-components';
import { shake } from 'react-animations';

const bounceAnimation = keyframes`${shake}`;


const Lights = styled.div`
    position: absolute;
    transform: rotate(135deg);
    margin-left: 50px;
    z-index: 3;
    transition: 0.4s;

    
    > div {
        display: none;
        margin-top: 10px;
        border-radius 25px;
        padding: 25px;
        background: radial-gradient(yellow, transparent);
    }

`

const Tree = styled.div`
    position: absolute;
    top: 0;
    transition: 0.4s;
    animation: 11s ${bounceAnimation};
    animation-iteration-count: infinite;

    &:nth-of-type(2) {
        animation: 14s ${bounceAnimation};
    }

    &:nth-of-type(3) {
        animation: 19s ${bounceAnimation};
    }

    &:nth-of-type(4) {
        animation: 15s ${bounceAnimation};
    }

`

const Diamond = styled.div`
    position: absolute;
    // top: 45%;
    left: 2.5%;
    padding: 150px;
    transform: rotate(45deg);
    z-index: 3;
    
    // border: 2px solid #000;
    background: radial-gradient(green, transparent);

    // left: 41%;
    // margin: 0 auto;
    

    div:nth-of-type(1) {
        top: 50%;
        left: 20%;
        transform: rotate(90deg);
    }

    div:nth-of-type(2) {
        top: 20%;
        left: 50%;
        transform: rotate(90deg);
    }
`

const Wood = styled.div`
    position: absolute;
    z-index: 2;    
    padding: 100px;
    transform: rotate(45deg);
    background: radial-gradient(#964b00, transparent);    

    // top: 100%;
    // left: 100%;
    top: 80%;
    left: 80%;

    // border: 2px solid #000;
`

const TreeBox = () => {
    return (
        <Tree>
            <Diamond>
                <Diamond></Diamond>
                <Diamond></Diamond>
                <Lights>
                    <div></div>
                    <div></div>
                    <div></div>
                </Lights>
                <Wood></Wood>
            </Diamond>
        </Tree>
        
    )
}

export default TreeBox;