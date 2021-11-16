import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import { KeyboardArrowDown } from "@mui/icons-material";
import { init } from "ityped";


const Intro = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            backDelay: 800,
            showCursor: true,
            strings: ['Programmer', 'Problem Solver', 'Learner']
        })
    }, [])

    return (
        <div className="intro" id="intro">

            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me.png" alt="" />
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>JOACHIM!</h1>
                    <h3>Profession/<span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDown className="arrow" />
                </a>
            </div>
        </div>
    )
}

export default Intro