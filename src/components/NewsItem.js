import React from 'react'
import no_image from './no-image-available-icon.png'

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date } = props;
    return (
        <div className="card">
            <img src={imgUrl ? imgUrl : no_image} className="card-img-top" alt="..." style={{ height: '270px' }} />
            <div className="card-body">
                <h5 className="card-title">{title}{title.length > 49 ? '...' : ''}</h5>
                <p className="card-text">{description}{title.length > 25 ? '...' : ''}</p>
                <p className="card-text mb-2"><small className="text-muted">By <em>{!author ? "Unknown" : author}</em> on <em>{new Date(date).toGMTString()}</em></small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Full article →</a>
            </div>
        </div>
    )
}

export default NewsItem;