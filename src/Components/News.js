
import React, { Component } from 'react'
import NewsItem from "./NewsItem.js"

export class News extends Component {
  
    
    
     constructor(){
      super();
      console.log("constructor")
      this.state={
        article : [],
        loading:false,
        page:1

      }
    }

    async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-02-20&sortBy=publishedAt&apiKey=af22babf885c4368896ffbd93c0962d4" ;
    let data =  await fetch(url);
   let  parsedata = await data.json() 
    console.log(parsedata);
    this.setState(
      {article : parsedata.articles}
    )
     } 

    // gotonext= async()=>{
     
    //   let  url = `https://newsapi.org/v2/everything?q=tesla&from=2024-02-19&sortBy=publishedAt&apiKey=af22babf885c4368896ffbd93c0962d4&page=${this.state.page}` ;
    //   let data =  await fetch(url);
    //  let  parsedata = await data.json(); 
    //   console.log(parsedata);
    //   this.setState({
    //     page : this.state.page + 1 ,
    //     article : parsedata.articles}  
    //   )
    // }

    render(){
    return (
      <div className='container'>
         <h2>NewsMonkey Top headlines</h2>
        <div className='row'>       
          {this.state.article.map((element)=>{
        return  <div className='col-md-4'>    
          <NewsItem  className='col-md-4' key={element.url}  link={element.url} imageurl={element.urlToImage} title={!element.title?"Go to Site":element.title.slice(0,45)}  discreption={!element.description?"Click on Go Somewhere":element.description.slice(0,88)}/>                  
         </div>  
        })}      
       </div> 
    {/* <div className='container d-fle                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       justify-content-between'> */}

    {/* <button  type="button" class="btn btn-dark mx-3" > &larr; Previous</button>
    <button type="button" class="btn btn-dark mx-3" onclick="gotonext">  Next &rarr; </button> */}
    {/* </div> */}
    </div>
      
    )
} 
}


export default News 
