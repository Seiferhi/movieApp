import React, { Component } from 'react'
import './pagination.css'

export default class pagination extends Component {
  render() {
    const {from, count, total, onPrev, onNext, onChangeCount} = this.props
    return (
      <div className="pagination-container">
        showing items {from} - {Math.min(total, from + count)} of {total}.
        <input type="button" value="< Prev" onClick={onPrev} />
        <input type="button" value="Next >" onClick={onNext} />
        <select value={count} onChange={e => onChangeCount(e.target.value)}>
          <option value='4'>4</option>
          <option value='8'>8</option>
          <option value='12'>12</option>
        </select>
        items per page
      </div>
    )
  }
}
