import React, { Component } from 'react';
import { NavBar, SearchForm, Spinner, MoviesContainer } from '../../components'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  render(){

    const { loading } = this.props;

    return (
      <div>
        <NavBar/>
        <div className="container">
          <SearchForm/>
          {loading ? <Spinner /> : <MoviesContainer/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
})

export default connect(mapStateToProps)(Home);