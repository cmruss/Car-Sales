import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/vehicleActions'
import { Button } from 'react-bulma-components';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <Button onClick={()=>{props.removeFeature(props.feature)}}className="button">X</Button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
};

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
