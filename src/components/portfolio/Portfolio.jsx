import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss";
import { featuredPortfolio, desktopPortfolio, gamePortfolio, mobilePortfolio, webPortfolio } from "../../data.js"

const Portfolio = () => {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([featuredPortfolio]);

    const [summary, setSummary] = useState("");
    const [desc, setDesc] = useState("");
    const [title, setTitle] = useState("");

    const [type, setType] = useState("featured");

    const list = [
        { id: "featured", title: "featured" },
        { id: "desktop", title: "desktop app" },
        { id: "game", title: "game prototype" },
        { id: "mobile", title: "mobile app" },
        // { id: "web", title: "web app" },
    ];


    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio)
                setType("featured")
                break;
            case "desktop":
                setData(desktopPortfolio)
                setType("")
                break;
            case "game":
                setData(gamePortfolio)
                setType("")
                break;
            case "mobile":
                setData(mobilePortfolio)
                setType("vertical")
                break;
            // case "web":
            //     setData(webPortfolio)
            //     setType("")
            //     break;
            default:
                setData(featuredPortfolio)
                setType("featured")
                break;
        }

    }, [selected]);

    // put first image desc as default when data changes
    useEffect(() => {
        setDesc(data[0]["desc"])
        setSummary(data[0]["summary"])
        setTitle(data[0]["title"])
    }, [data])

    return (
        <div className="portfolio" id="portfolio">
            <div className="head">
                <h1>portfolio</h1>
                <ul>
                    {list.map((item) => (
                        <PortfolioList
                            title={item.title}
                            id={item.id}
                            active={selected === item.id}
                            setSelected={setSelected} />))}
                </ul>
            </div>

            <div className="summaryContainer">
                <p className="summary">{summary}</p>
            </div>


            <div className="imgContainer">
                {data.map((d) => (
                    <div className={"item " + type} onClick={() => setDesc(d.desc)}>
                        <img src={d.img} alt="" />
                        <h3>{d.imgTitle}</h3>
                    </div>
                ))}
            </div>

            <div className="descContainer">
                <p className="desc">{desc}</p>
            </div>

        </div>
    )
}

export default Portfolio