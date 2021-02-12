import React, { Component } from 'react';
import Card from '../components/Card';

class List extends Component {
  state = {
    data: [],
    loading: true
  };

  async componentDidMount() {
    const response = await fetch('./assets/data.json');
    const data = await response.json()
    console.log(data)

    if(data) {
      this.setState({
        data,
        loading: false
      });
    }
  };

  render() {
    const { data,loading } = this.state;

    if(loading) {
      return (
        <div>Loading...</div>
      );
    };

    return data.map(movie => <Card key={movie.id} movie={movie} />)
  }
}

export default List;