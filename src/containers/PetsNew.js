import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPet } from '../actions';
import { browserHistory } from 'react-router';

class PetsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnNameChange = this.handleOnNameChange.bind(this);
    this.handleOnDescriptionChange = this.handleOnDescriptionChange.bind(this);
  }

  handleOnSubmit(ev) {
    ev.preventDefault();
    this.props.addPet(this.state);
    browserHistory.push('/pets');
  }

  handleOnNameChange(ev) {
    this.setState({
      name: ev.target.value
    });
  }

  handleOnDescriptionChange(ev) {
    this.setState({
      description: ev.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} >
        <input type="text" placeholder="name" onChange={this.handleOnNameChange} />
        <input type="text" placeholder="description" onChange={this.handleOnDescriptionChange} />
        <input type="submit" value="Add Pet" />
      </form>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPet: bindActionCreators(addPet, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(PetsNew);
