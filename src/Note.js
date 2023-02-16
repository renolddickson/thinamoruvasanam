import React from 'react'
import Quotes from './quotes.png'
export default function Note({quotestext,author}) {
  return (
  <div className="box">
    <div className="cover">
    <div className="quotes">
    <img src={Quotes} alt='"' />
      <h2>
        {quotestext}
      </h2>
      <div className="author">{author}</div>
    </div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
      <div className="holder"></div>
    </div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
    <div className="spiral"></div>
  </div>
  )
}
