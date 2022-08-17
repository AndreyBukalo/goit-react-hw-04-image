import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    search: '',
  };

  onChange = event => {
    this.setState({ search: event.currentTarget.value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.search.trim() === '') {
     
      return;
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            value={this.state.search}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />{' '}
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
