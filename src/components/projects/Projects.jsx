import React from 'react'
import "./projects.scss"
import { ArrowBackIosNew, YouTube } from "@mui/icons-material";

const Projects = () => {

    const data = [
        {
            id: 1, name: "Tom Durden", title: "Senior Developer",
            img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
            id: 2, name: "Alex Kalinski", title: "Co-Founder of DELKA",
            img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            featured: true,
        },
        {
            id: 3, name: "Martin Harold", title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];

    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="container">
                {data.map((item) => (
                    <div className={item.featured ? "card featured" : "card"}>
                        <div className="top">
                            <ArrowBackIosNew className="left" />
                            <img src={item.img} alt="" className="user" />
                            <YouTube className="right" />
                        </div>
                        <div className="center">
                            {item.desc}
                        </div>
                        <div className="bottom">
                            <h3>{item.name}</h3>
                            <h4>{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects