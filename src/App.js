import React, { useState } from "react";

import "./styles.css";
const favBook = {
  ComputerSci: [
    {
      Name: "The algorithms",
      Desc: "It consist of various algo in c",
      Rating: "⭐⭐⭐⭐⭐"
    },
    {
      Name: "The Code",
      Desc: "It contains Python code ",
      Rating: `⭐⭐⭐⭐⭐`
    },
    {
      Name: "Clean Code",
      Desc: "It describes abt how to write efficient code",
      Rating: `⭐⭐⭐⭐⭐`
    }
  ],
  Business: [
    {
      Name: "Think an grow rich ",
      Desc: "It focuses on mind-power",
      Rating: `⭐⭐⭐⭐⭐`
    },

    {
      Name: "Zero to one",
      Desc: "It focuses that with hardwork we can achieve anything",
      Rating: `⭐⭐⭐⭐`
    },

    {
      Name: "Four hour work week",
      Desc: "It says tha consistency is the key",
      Rating: `⭐⭐⭐⭐`
    }
  ],

  Pyschology: [
    {
      Name: "Thinking fast and slow",
      Desc: "It describes the state of mind",
      Rating: `⭐⭐⭐⭐`
    },
    {
      Name: "Influence",
      Desc: "It describes abt the influencer in lyf",
      Rating: `⭐⭐⭐⭐⭐`
    },
    {
      Name: "The social animal",
      Desc: "We Should be socially active",
      Rating: `⭐⭐⭐⭐⭐`
    }
  ]
};

var favoub = Object.keys(favBook);
export default function App() {
  const [bookList, setbookList] = useState(favBook.ComputerSci);
  function clickHandler(item) {
    setbookList(favBook[item]);
  }
  function getBookpost(item) {
    var nama = item.Name;
    var rata = item.Rating;
    var desc = item.Desc;
    var bookList = (
      <li>
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{nama}</h3>
          <p style={{ fontSize: "0.8rem" }}>{rata}</p>
          <h5>{desc}</h5>
        </div>
      </li>
    );
    return bookList;
  }
  return (
    <div className="App">
      <h1>Parth Modi Recommendation</h1>
      <h3>Books are man's best Friend</h3>
      {favoub.map(function (item) {
        return <button onClick={() => clickHandler(item)}>{item}</button>;
      })}
      <ul>
        {bookList.map(function (book) {
          return getBookpost(book);
        })}
      </ul>
    </div>
  );
}
