import React,{ useEffect, useState }  from 'react';
import './App.css';
import Note from './Note';
import Top from './Top';
import Quotes from './quotes.png'
import { FireworkSpinner } from 'react-spinners-kit'


function App() {
const [data,setData]=useState({})
const fetchData = () => {
  return fetch("https://script.google.com/macros/s/AKfycbyxGbRawPA8DOnjniDg694xV1HOILwvVxmalxNysJ1Qmm_YcyeGA3s6pLP4omLAS8Wp/exec?action=getQuotes")
        .then((response) => response.json())
        .then((data) => setData(data));
}
useEffect(() => {
  fetchData();
},[])
var bgcolor=(!data.color)?"#fff":data.color
var author=(!data.quotes)?"":"-" +data.author
var quotes = (!data.quotes)?<center><FireworkSpinner size={80} color="black"/></center>:data.quotes +'✨' 
document.body.style.backgroundColor = bgcolor;
  return (
    <div className="App">
      <Top quotestext={quotes} author={author}/>
    <Note quotestext={quotes} author={author}/>
    <div className="mobilequotes">
      <img src={Quotes} alt='"' />
      <h2>
        {quotes}
      </h2>      
      <div className="author">{author}</div>
    </div>
      
    </div>
  );
}

export default App;
