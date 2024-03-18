import React, {Component} from 'react'


export class NewsItem extends Component {
    render(){
        let {title,discreption, imageurl, link} = this.props

        return(
            <div className='my-3'>
            <div class="card">
         <img src={imageurl} class="card-img-top" alt="..." style={{width:"400px" , height:"250px"}}/>
        <div class="card-body">
           <h5 class="card-title">{title}...</h5>
           <p class="card-text">{discreption}...</p>
           <a href={link}  target="_blank" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
        )
    }
    }
export default NewsItem 