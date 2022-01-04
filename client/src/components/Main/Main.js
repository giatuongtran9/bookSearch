import React from 'react'
import './style.scss';

import Loader from 'react-loader-spinner'

import { sortAsc, sortDesc } from '../../utilities/utilities'

import NotFound from '../../assets/notfound.jpg'
import Button from '../SearchBar/Button/Button';
import BookList from '../BookList/BookList';
import SearchBar from '../SearchBar/SearchBar';


//using class to trigger re-render when click on Sort button
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      searchResult: null,
      loading: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSortTitle = this.handleSortTitle.bind(this)
    this.handleSortDate = this.handleSortDate.bind(this)
  }


  handleChange(e) {
    this.setState({
      ...this.state,
      data: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      loading: true
    }, () => {
      fetch('/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: this.state.data})
      })
      .then(response => response.json())
      .then(result => {
        this.setState({
        ...this.state,
        searchResult: result,
        loading: false
      })})
  
      this.setState({
        ...this.state,
        data: ''
      })
    })
  }

  handleSortTitle() {
    let sort = sortAsc(this.state.searchResult, 'title')
    this.setState({
      searchResult: sort
    })
  }

  handleSortDate() {
    let sort = sortDesc(this.state.searchResult, 'first_publish_year')
    console.log(sort)
    this.setState({
      searchResult: sort
    })
  }

  render() {
    const imageUrl = 'http://covers.openlibrary.org/b/id/'

    return (
      <div className="Main">
        <header className="Main-header">

          <h1>
            Book Search Tool - Open Library
          </h1>
         
          <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} title={this.state.data} />
          {this.state.searchResult ? (    
            <>      
          <Button handleClick={this.handleSortTitle} title="Sort by Title" />
          <Button handleClick={this.handleSortDate} title="Sort by First publish year" /> </>) : null}

          {this.state.loading ? 
            (<Loader type='ThreeDots' color='#00BFFF' height={150} width={150}/>) 
            : 
            (<div className='Main-body'>

                {this.state.searchResult && (this.state.searchResult.map((docs, i) => (
                    <BookList 
                        key={i} 
                        isbns={docs.isbn ? docs.isbn : null}
                        contributors={docs.contributor ? docs.contributor : ''}
                        title={docs.title}
                        author={docs.author_name}
                        img={docs.cover_i ? imageUrl + docs.cover_i + '-L.jpg' : NotFound}
                        publish_year={docs.first_publish_year}
                    />
                )))}
            </div>)}
        </header>
      </div>
    );
  }
}

export default Main;