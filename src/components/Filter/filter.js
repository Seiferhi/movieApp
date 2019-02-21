import React,{Component} from 'react'
import './filter.css' 
import _ from 'lodash'
import Category from './category';


const getcategorie=(arr)=>{
  return _.uniqBy(arr,'category').map(elem=>elem.category)
}

class Filter extends Component {
  render() { 
    console.log(this.props.categories)
    return (<div className="filter-container">
       <h2> Filter  </h2> 
       <h3> Categorie : </h3> 
       <form>
         {getcategorie(this.props.movies).map(elm=><Category category={elm} onFilter={this.props.onFilter}/>)} 
      </form>  
    </div>
  )}
}

export default Filter
