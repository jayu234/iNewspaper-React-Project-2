import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import Spiner from './Spiner';
import axios from 'axios';

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async ()=> {
        props.setProgress(10);
        setLoading(true);
        const url = `${process.env.REACT_APP_BASE_URL}/top-headlines?category=${props.category}&page=${1}`;
        axios.defaults.withCredentials = true;
        let response = await axios.get(url);
        props.setProgress(30);
        let parsedData = response.data;
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };

    useEffect(() => {
      updateNews();
      // eslint-disable-next-line
    }, []);
    
    const fetchMoreData = async () => {
        const url = `${process.env.REACT_APP_BASE_URL}/top-headlines?category=${props.category}&page=${page+1}`;
        setPage(page + 1);
        axios.defaults.withCredentials = true;
        let response = await axios.get(url);
        let parsedData = response.data;
        setArticles(articles.concat(parsedData.articles));
        // setTotalResults(parsedData.totalResults);
    }
    return (
        <div className='container my-3'>
            <h2 id="headline" className="my-3">{`Top Headlines of ${props.category.charAt(0).toUpperCase() + props.category.slice(1)} category - iNewspaper`}</h2>

            {loading && <Spiner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spiner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((Element) => {
                            return <div className="col-md-4 my-3" key={Element.url}>
                                <NewsItem title={!Element.title ? '' : Element.title} description={!Element.description ? '' : Element.description} imgUrl={Element.urlToImage} newsUrl={Element.url} author={Element.author} date={Element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    progress: PropTypes.number
}
News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
    progress: 0
}
export default News;