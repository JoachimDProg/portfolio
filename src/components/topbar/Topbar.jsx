import React from 'react'
import "./topbar.scss"
import { GitHub, Mail, LinkedIn } from "@mui/icons-material";

const Topbar = ({ menuOpen, setMenuOpen }) => {

    const email = "jd.prog@hotmail.com";
    const copyClipboard = () => { navigator.clipboard.writeText(email); alert("Email copied to Clipboard!") }

    return (
        <div className={"topbar " + (menuOpen && "active")}> {/* if menuActive = true; append active */}

            <div className="wrapper">

                <div className="left">

                    <a href="#intro" className="logo">home.</a>

                    <div className="itemContainer">
                        <a href="https://github.com/JoachimDProg" target="_blank" rel="noreferrer">
                            <GitHub className="icon" />
                            <span>github.com/JoachimDProg</span>
                        </a>
                    </div>

                    <div className="itemContainer">
                        <Mail className="icon" onClick={() => { copyClipboard() }} />
                        <span onClick={() => { copyClipboard() }}>{email}</span>
                    </div>

                    <div className="itemContainer">
                        <a href="https://linkedin.com/in/jdprog" target="_blank" rel="noreferrer">
                            <LinkedIn className="icon" />
                            <span>linkedin.com/in/jdprog</span>
                        </a>
                    </div>

                </div>

                <div className="right">

                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}> {/* onClick set opposite of menuOpen*/}

                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>

                </div>

            </div>

        </div >
    )
}

export default Topbar