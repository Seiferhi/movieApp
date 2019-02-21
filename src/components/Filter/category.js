import React, { Component } from 'react'

export default class category extends Component {
    state={
        checked:false
    }
    handleInputChange =e=>{
        const {checked}=this.state
        this.setState({
            checked:!checked
        }, () => this.props.onFilter(this.props.category, this.state.checked)
        )
    }
  render() {
      const {checked}=this.state
      const {category} = this.props
    return (  
        <p><label>
            {category}
            <input
              name={category}
              type="checkbox" 
              checked={checked}
              onChange={this.handleInputChange}
            />
          </label>
          </p>

    )
  }
}
