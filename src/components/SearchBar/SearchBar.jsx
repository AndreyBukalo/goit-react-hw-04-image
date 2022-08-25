import React, { Component } from 'react';
import {  toast } from 'react-toastify';
import { Form, Input, Button, Header ,Icon} from "./SearchBar.styled"


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
     return toast.error('Sorry, no empty search');
   
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.onSubmit}>
          <Input
            onChange={this.onChange}
            value={this.state.search}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />{' '}
          <Button type="submit">
            <Icon />
          </Button>
        </Form>
      </Header>
    );
  }
}
