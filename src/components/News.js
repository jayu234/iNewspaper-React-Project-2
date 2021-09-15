import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false,
            totalResults: 0
        }
    }

    async updateNews(url) {
        this.setState({ loading: true });
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dad8c317caa4f17b7c6fb76de45e40d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }
    async componentDidMount() {
        // this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dad8c317caa4f17b7c6fb76de45e40d&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // });
        this.updateNews(url);
    };
    toNextPage = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dad8c317caa4f17b7c6fb76de45e40d&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page + 1,
        //     loading: false
        // });
        this.updateNews(url);
        this.setState({ page: this.state.page + 1 });

    }
    toPrevPage = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dad8c317caa4f17b7c6fb76de45e40d&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page - 1,
        //     loading: false
        // });
        this.updateNews(url);
        this.setState({ page: this.state.page - 1 });
    }
    render() {
        return (
            <div className="container my-3">
                <h2 id="headline" className="my-3">{`Top Headlines of ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} category - iNewspaper`}</h2>

                {this.state.loading && <Spiner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((Element) => {
                        return <div className="col-md-4 my-3" key={Element.url}>
                            <NewsItem title={!Element.title ? '' : Element.title} description={!Element.description ? '' : Element.description} imgUrl={Element.urlToImage} newsUrl={Element.url} author={Element.author} date={Element.publishedAt} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-evenly my-3">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-outline-dark" onClick={this.toPrevPage}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-outline-dark" onClick={this.toNextPage}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News