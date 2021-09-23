import React, { useState } from "react";

import "./styles.css";
const favBook = {
  ComputerSci: [
    {
      Name: "The algorithms",
      Rating: "⭐⭐⭐⭐⭐"
    },
    {
      Name: "The Code",
      Rating: `⭐⭐⭐⭐⭐`
    },
    {
      Name: "Clean Code",
      Rating: `⭐⭐⭐⭐⭐`
    }
  ],
  Business: [
    {
      Name: "Think an grow rich ",
      Rating: `⭐⭐⭐⭐⭐`
    },

    {
      Name: "Zero to one",
      Rating: `⭐⭐⭐⭐`
    },

    {
      Name: "Four hour work week",
      Rating: `⭐⭐⭐⭐`
    }
  ],

  Pyschology: [
    {
      Name: "Thinking fast and slow",
      Rating: `⭐⭐⭐⭐`
    },
    {
      Name: "Influence",
      Rating: `⭐⭐⭐⭐⭐`
    },
    {
      Name: "The social animal",
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
    var bookList = (
      <li>
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{nama}</h3>
          <p style={{ fontSize: "0.8rem" }}>{rata}</p>
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
