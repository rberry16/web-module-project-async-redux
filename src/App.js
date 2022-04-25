import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import GifList from './Giflist';
import GifForm from './GifForm';

const URL = 'api.giphy.com/v1/gifs/search'
const API_KEY = 'OAQE11VhEnuLYRJDohKcQWosV6NG2cNh'

function App(props) {
  // const gifs = data;
  // const loading = false;
  // const error = '';
  const {error, loading} = props;
  

  return (
    <div className="App">
      <h1>Search for Gifs</h1>

      <GifForm />

      {
        (error !== '') && <h3>{error}</h3>
      }

      {
        loading ? <h3>We are Loading</h3> : <GifList/>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);