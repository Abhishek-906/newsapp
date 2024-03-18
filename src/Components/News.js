import React, { Component } from 'react'
// import NewsItem from "./NewsItem.js"

export class News extends Component {
  
  
//     constructor(){
//       super();
//       console.log("constructor")
//       let articles =[]
//       this.state={
//         article : [] ,
//         loading:false,
//         page:1
//       }
//     }
//     async componentDidMount(){
//       let url = "https://newsapi.org/v2/everything?q=apple&from=2024-03-16&to=2024-03-16&sortBy=popularity&apiKey=64c5dc514892418fb6824b2e192cc749&page="+{page} ;
//       let data =  await fetch(url);
      
//      let  parsedata = await data.json() 
//       console.log(parsedata);
//       this.setState(
//         {article : parsedata.articles}
//       )
//      } 
//     render(){
//       let dooit=()=>{
//           this.setState()
//         }
//     return (
//       <div className='container'>
//          <h2>NewsMonkey Top headlines</h2>
//          <button className='s' onclick={dooit()}>next</button>
//          <div class="spinner-border" role="status">
//               <span class="visually-hidden">Loading...</span>
//         </div>
//           <div className='row'>       
//           {this.state.article.map((element)=>{
//         return  <div className='col-md-4'>    
//           <NewsItem  className='col-md-4' key={element.url}  link={element.url} imageurl={element.urlToImage} title={element.title.slice(0,45)}  discreption={!element.description?"Click on Go Somewhere":element.description.slice(0,88)}/>                  
//          </div>  
//         })}      
//        </div>
//       </div>
//     )
// } 
// }
render(){
return (
  <h1>THis is for github pages</h1>
   )
}
}

export default News 

