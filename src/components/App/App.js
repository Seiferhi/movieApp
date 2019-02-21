import React, {
  Component
} from 'react';
import MoviesList from '../MovieList/moviesList'
import Filter from '../Filter/filter'
import './App.css';
import {
  movies$
} from '../../movies'
import Pagination from '../Pagination/pagination';


class App extends Component {
  state = {
    listmovies: [],
    categories: [],
    pagination: {
      from: 0,
      count: 4
    }
  }

  componentWillMount() {
    movies$.then((data) => {
      this.setState({
        listmovies: data
      })
    })
  }
  deleteMovie = (id) => {
    this.setState({
      listmovies: this.state.listmovies.filter(m => m.id !== id)
    })
  }
  handleFilterMovie = (category, isChecked) => {
    console.log(category, isChecked)
    const newCategories = isChecked ? this.state.categories.concat(category) :
      this.state.categories.filter(el => el !== category)
    this.setState({
      categories: newCategories,
    })
  }
  likeMovie = id => {
    this.setState({
      listmovies: this.state.listmovies.map(m => {
        if(m.id !== id)
          return m
        return {
          ...m,
          likes: m.userLike === 1 ? m.likes : Number(m.likes)+1,
          userLike: 1
        }
      })
    })
  }
  render() {
    const {
      listmovies,
      pagination: {from, count}
    } = this.state
    return (
      <div className="app-conatiner" >
        <Filter
          movies={listmovies}
          onFilter={this.handleFilterMovie} />
        <div className="movies-cont" >
          <Pagination
            from={from}
            count={count}
            total={listmovies.length}
            onChangeCount={count => {
              this.setState({
                pagination: {
                  ...this.state.pagination,
                  count
                }
              })
            }}
            onPrev={() => this.setState({
              pagination: {
                ...this.state.pagination,
                from: Math.max(0, from - count)
              }
            })}
            onNext={() => {
              if(from+count >= listmovies.length)
                return
              this.setState({
              pagination: {
                ...this.state.pagination,
                from: from + count
              }
            })}} />
          <MoviesList
            movies={
              listmovies
                .filter(movie => 
                  this.state.categories.length === 0 
                  ? true : 
                  this.state.categories.includes(movie.category)
                )
                .slice(from, from + count)
            }
            onDeleteMovie={id => {this.deleteMovie(id)}}
            onLikeMovie={id => this.likeMovie(id)}
          />
        </div>
      </div>
    );
  }
}
export default App;