
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hand from "../../assets/hand@2x.png";
import HandCopy from "../../assets/hand-copy@2x.png";
import ArrowLeft from "../../assets/arrow-left-copy-2.png";
import ArrowRight from "../../assets/arrow-left-copy.png";
import Loader from '../../Loader/loader';









const JokeComponent = (props) => {
  const [jokeData, setjokeData] = useState({});
  const [allJokeData, setAllJokeData] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    axios.get(`https://api.chucknorris.io/jokes/${props.match.params.jokeId}`)
      .then(res => {
        console.log('res', res.data);

        setjokeData(res.data)
      })
      .catch(err => {
      })

    axios.get(`https://api.chucknorris.io/jokes/search?query=all`)
      .then(res => {
        setAllJokeData(res.data.result)
        setLoading(false)
      })
      .catch(err => {
      })

  }, [props.match.params.jokeId]);

  const getPrevAndNextJoke = (jokeId, prevNext) => {
    let temp = allJokeData.findIndex(obj => obj.id == jokeId)
    console.log(temp);
    console.log(prevNext);

    if(temp === 0 && prevNext === "prev-joke"){
      props.history.push(`/${allJokeData[1464].id}`)
    }
    else if(temp === 1464 && prevNext === "next-joke"){
      props.history.push(`/${allJokeData[0].id}`)
    }
   else {
    prevNext === "prev-joke" ? --temp : ++temp;
    props.history.push(`/${allJokeData[temp].id}`)
   }
  }

  const getTrendingJoke = (jokeId) => {
    let temp = allJokeData.findIndex(obj => obj.id == jokeId)
    setjokeData(allJokeData[temp])
  }

  let trendingJokes = [
    { id: "Xs8klqJHQG-p6DnKb_2Oaw", value: "Smoking Joke" },
    { id: "iRZwQNYqS_eNJ0qVLqhrKA", value: "My Boos Joke" },
    { id: "3O3i4axPRciyilmEvGnRsA", value: "Dirty Millinorie Joke" },
    { id: "Xuzdj6tmTTCocUo6YbHmsQ", value: "The annoying neighbour" },
    { id: "xyjhd30qS422KIKpbUwAPQ", value: "Knock Knock" },
    { id: "hrlBSByNS3CEpLM-M_971w", value: "Why Tyson Lisps" },
    { id: "lP5aSChcQE-q9zHsT9szxA", value: "The Drunk Polics Officer" },
    { id: "JQG-X0s3QUSXMaBbl1e7ig", value: "My Hip (Dad Joke)" },
    { id: "rzxd5GaBRCWGKTFJIvMt9w", value: "What not to say in an elevator" }
  ]


  return (
    <div className="joke">

      {loading ? <Loader /> : <div className="joke-component">

        <div className="card-header">

          <div className="card">
            <div className="joke-container">
              <p className="categorie">{jokeData.categories === undefined ? " " : jokeData.categories.length === 0 ? "Uncategorized" : jokeData.categories[0]}</p>

              <div className="something">
                <div className="joke-categorie">{jokeData.categories === undefined ? " " : jokeData.categories.length === 0 ? "Uncategorized" : jokeData.categories[0]}</div>
              </div>
              <div className="joke-text">{jokeData.value}</div>
            </div>
          </div>

          <div className="joke-footer">
            <div className="hand">
              <img
                alt="Hand"
                src={Hand}
              />
            </div>
            <div className="hand-copy">
              <img
                alt="HandCopy"
                src={HandCopy}
              />
            </div>
            <div className="joke-prev-button" onClick={() => getPrevAndNextJoke(jokeData.id, 'prev-joke')}>
              <img
                alt="ArrowLeft"
                src={ArrowLeft}
              /> PREV.JOKE

          </div>
            <div className="joke-next-button">
              <span onClick={() => getPrevAndNextJoke(jokeData.id, 'next-joke')}>Next Joke</span>
              <img
                alt="ArrowRight"
                src={ArrowRight}
              />

            </div>
          </div>

        </div>

        <div className="joke-top-component">
          <div className="top-jokes"><b>THE TOP 10 JOKES OF THE WEEK</b></div>

          {trendingJokes.map(i =>
            <div onClick={() => getTrendingJoke(i.id)} className="top-jokes-list" key={i.id}>{i.value}</div>)}
        </div>


      </div>
      }

    </div>
  )
}

export default JokeComponent