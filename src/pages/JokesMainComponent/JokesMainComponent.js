
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/style.css';
import { Route } from 'react-router-dom';
import PathCopypng from "../../assets/path-copy-7@3x.png";
import GreenLightCopy from "../../assets/green-light-copy.png";

import Pathpng from "../../assets/path.png";
import Loader from '../../Loader/loader'



const JokesMainComponent = (props) => {

    const [jokesData, setjokesData] = useState([]);
    const [jokesFilterData, setjokesFilter] = useState([]);
    const [viewMore, setView] = useState(null);
    const [categorie, setCatgorie] = useState('');
    const [jokesCategorieData, setjokesCategorie] = useState([]);
    const [jokesCategorieFilterData, setjokesFilterCategorie] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get(`https://api.chucknorris.io/jokes/categories`)
            .then(res => {
                setCatgorie(res.data[0])
                setjokesCategorie(res.data)
                setjokesFilterCategorie(res.data.slice(0, 7))
            })
            .catch(err => {
            })

        axios.get(`https://api.chucknorris.io/jokes/search?query=all`)
            .then(res => {
                setjokesFilter(res.data.result.slice(0, 6))
                setView(1);
                setLoading(false)
                setjokesData(res.data.result)
            })
            .catch(err => {
            })
    }, []);


    const getDataOnCategories = (jokeyCatogrie) => {
        setLoading(true)
        setCatgorie(jokeyCatogrie)
        setView(null)
        axios.get(`https://api.chucknorris.io/jokes/random?category=${jokeyCatogrie}`)
            .then(res => {
                //setCatgorie(res.data.categories[0])
                setjokesFilter([res.data])

                setLoading(false)
            })
            .catch(err => {
            })

    }

    const showAllCategories = (jokeyCatogrie) => {
        jokeyCatogrie === 'view-all' ? setjokesFilterCategorie(jokesCategorieData) : setjokesFilterCategorie(jokesCategorieData.slice(0, 7))
        //setjokesFilterCategorie(jokesCategorieData)
    }


    const viewMoreJokes = () => {
        let filterData = jokesData.slice(0, jokesFilterData.length + 6)
        setjokesFilter(filterData)
    }

    const joke = (jokeId) => {
        props.history.push(`/${jokeId}`)
    }
    console.log('categorie', categorie);
    return (
        <div className="main">

            <div className="flex-container1">
                {jokesCategorieFilterData.map(jokesCategorie =>
                    <div className="card1" key={jokesCategorie}>
                        <div className="container1">
                            <p onClick={() => getDataOnCategories(jokesCategorie)} className={"Rectangle-Copy-4" + " " + jokesCategorie}>{jokesCategorie.toUpperCase()}</p>
                        </div>
                    </div>)}

                {jokesCategorieFilterData.length <= 7 ? <div onClick={() => showAllCategories('view-all')} className="view-all">VIEW ALL<img
                    alt="Footer"
                    src={PathCopypng}
                /></div> : <div onClick={() => showAllCategories('view-less')} className="view-all">VIEW LESS<img
                    alt="Footer"
                    src={PathCopypng}
                /></div>}
            </div>

            <div className="line"></div>
            <p className={"categorie" + " " + categorie}>{categorie.toUpperCase()}</p>
            {loading && <Loader />}

            <div className="flex-container">

                {!loading && jokesFilterData.map(i =>
                    <div className="card" key={i.id} onClick={() => joke(i.id)}>
                        <div className="container">
                            <div className="card-header">
                                <img
                                    alt="Footer"
                                    src={GreenLightCopy}
                                />
                                <div className="card-categorie">
                                    <h4><b>{i.categories[0] === undefined ? "Uncategorized" : i.categories[0]}</b></h4>
                                </div>
                            </div>
                            <div className="card-text">
                                <p>{i.value}</p>
                            </div>
                        </div>
                        <div className="see-stats">SEE STATS
                        <img
                                alt="Footer"
                                src={Pathpng}
                            />
                        </div>
                    </div>)}
                <p onClick={viewMoreJokes} className={viewMore === null ? 'view-less' : 'view-more'}>VIEW MORE<img
                    alt="Footer"
                    src={PathCopypng}
                /></p>
            </div>
        </div>
    )
}

export default JokesMainComponent























   

