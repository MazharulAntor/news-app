import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={!imageUrl?"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2023/01/15/2566707-saturn-icy-moon.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
