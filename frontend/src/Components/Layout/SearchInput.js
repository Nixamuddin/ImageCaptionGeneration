// SearchInput.js
import React from 'react';
import { useSearch } from '../../Auth/Search';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const [value, setvalue] = useSearch();
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`/api/v1/diary/search/${value.keyword}`);
      setvalue({ ...value, result: data });
      console.log(data);
      navigate('/result');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="d-flex" onSubmit={handlesubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          value={value.keyword}
          onChange={(e) => setvalue({ ...value, keyword: e.target.value })}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchInput;
