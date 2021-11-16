import React, { useState } from 'react'
import "./works.scss"
import { PhoneAndroid, ArrowBackIosNew } from "@mui/icons-material";

const Works = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id: "1",
            icon: <PhoneAndroid />,
            title: "Web Design",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            icon: <PhoneAndroid />,
            title: "Mobile Application",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: <PhoneAndroid />,
            title: "Branding",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        }
    ];

    const handleClick = (direction) => {
        direction === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((item) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        {item.icon}
                                    </div>
                                    <h2>{item.title}</h2>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={item.img} alt="" />
                            </div>
                        </div>
                    </div>))}
            </div>
            <ArrowBackIosNew className="arrow Left" onClick={() => handleClick("left")} />
            <ArrowBackIosNew className="arrow Right" onClick={() => handleClick("right")} />
        </div>
    )
}

export default Works