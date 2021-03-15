
import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from "react-router";

import Coverpng from "../../assets/bitmap.png";
import Searchpng from "../../assets/search-copy@3x.png";

import '../../styles/style.css';

const CoverPage = (props) => {

    const [filteredData, setfilteredData] = useState([]);


    const searchJokes = (event) => {
        let query = event.target.value;
        let len = event.target.value.length;
        console.log('query', query);
        if (len > 2) {
            axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`)
                .then(res => {
                    console.log('res ===========', res);
                    setfilteredData(res.data.result)
                })
                .catch(err => {
                    console.log('err', err);
                })
        }
        else {
            setfilteredData([])
        }

    }
    const selectJoke = (jokeId) => {
        props.history.push(`/${jokeId}`)
    }
    return (
        <div className="cover">
            <p className="cover-p1">The-Joke-Bible</p>
            <p className="cover-p2">Daily-Laughs-for-you and yours</p>
            <img
                alt="Cover"
                src={Coverpng}
            />
            <div className="search-wrap">
                <div className="search">
                    <input type="text" onChange={searchJokes} className="search-term" placeholder="How-can-we-make-you laugh today?" />
                    <div type="submit" className="search-icon">
                        <img className="cover-search-img"
                            alt="Search"
                            src={Searchpng}
                        />
                    </div>
                </div>
            </div>
            <div className="search-suggestion-wrap">
                <div className="search-filter" >{filteredData.map(i => <div key={i.id} onClick={() => selectJoke(i.id)}><p>
                    {i.value.substring(0,50)} ...
                </p>
                    <hr className="hr-line" />
                </div>)}</div>
            </div>
        </div>
    )
}

export default withRouter(CoverPage)