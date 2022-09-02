import { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Input, Button, Header, Icon } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const onChange = event => setSearch(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      return toast.error('Sorry, no empty search');
    }
    onSubmit(search);
    setSearch('');
  };
  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={onChange}
          value={search}
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
};
