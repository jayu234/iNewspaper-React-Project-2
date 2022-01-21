import React, { Component } from 'react';
import NewsItem from './NewsItem';
// import Spiner from './Spiner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import Spiner from './Spiner';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
        progress: 0
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        progress: PropTypes.number
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            loading: false,
            totalResults: 0
        }
    }

    async updateNews() {
        this.props.setProgress(10);
        this.setState({ loading: true });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    };
    async componentDidMount() {
        this.updateNews();
    };
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        });
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 id="headline" className="my-3">{`Top Headlines of ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} category - iNewspaper`}</h2>

                {this.state.loading && <Spiner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spiner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((Element) => {
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
}

export default News