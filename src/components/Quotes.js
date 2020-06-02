import React, { Component } from 'react';
import axios from 'axios';
import { FaTwitter, FaSyncAlt } from "react-icons/fa";
const QUOTES = 'https://quota.glitch.me/random';
var colors = [
    "#BDBB99",
    "#27ae60",
    "#2c3e50",
    "#77B1A9",
    "#e74c3c",
    "#16a085",
    "#73A857",
    "#FB6964",
    "#342224",
    "#9b59b6",
    "#472E32",
    "#f39c12"   
  ];
 
 class Quotes extends Component {
     
 constructor(props){
     super(props);
     
    this.state={
        quote:'',
        author:'',
        color:''
    }; 
}

randomColor=()=>(colors[Math.floor(Math.random() * 11)])

newQuote=()=>{
    
    axios.get(QUOTES)
    .then(res=>res.data)
    .then(data=>(this.setState({quote:data.quoteText,author:data.quoteAuthor})
        ),this.newColor())
    .catch(err=>console.log(err.mes))
    
}
 
newColor=()=>{
    this.setState({color:this.randomColor()})
    
}
componentDidMount(){  
    this.newQuote()
    
}
    render() {
      return (
            <div>
                <div className="wrapper" style={{ backgroundColor:this.state.color }}>
               <div id="quote-box">
                  <div className="quote-text">
                  <p id="text" style={{color:this.state.color}}>"{this.state.quote}"
                  </p>
                  </div>
               <div className="quote-author">
                <span id="author" className="font-italic" style={{color: this.state.color}}>
                 - {this.state.author}
                    </span>

             </div>
             
             <div className="buttons">
        
           <a 
            className="btn btn-primary btn-lg active" 
            role="button" 
            aria-pressed="true"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: this.state.color }}
            href={
                'https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp&related=freecodecamp&text="' +
                this.state.quote +
                '" %0D%0A- ' +
                this.state.author +
                "%0D%0A"
                }>
             <FaTwitter />
            Tweet
        </a>
        <button 
            type="button" 
            className="btn btn-primary" 
            id="new-quote"
            style={{ backgroundColor: this.state.color }} 
            onClick={this.newQuote}>
            <FaSyncAlt />
            New Quote
        </button>
                 
                </div>
            </div>
           </div>
           </div>
            
        );
        
    }
}
export default Quotes;