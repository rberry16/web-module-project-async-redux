import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import GifList from './Giflist';
import GifForm from './GifForm';
import { useEffect } from 'react';
import {getGifs} from './actions/actions';


const API_KEY = 'OAQE11VhEnuLYRJDohKcQWosV6NG2cNh'

function App(props) {
  // const gifs = data;
  // const loading = false;
  // const error = '';
  const {error, loading, getGifs} = props;

  useEffect(() => {
    props.getGifs('snap');
    // props.fetchStart();
  }, [])
  

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

export default connect(mapStateToProps, {getGifs})(App);