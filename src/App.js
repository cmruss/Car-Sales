import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature } from './actions/vehicleActions';
import { FeatureContext } from './contexts/FeatureContext';

const App = (props) => {
  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };

  return (
    <div className="boxes">
      <div className="box">
        <FeatureContext.Provider value={{ removeFeature }}>
          <Header car={props.car} />
          <AddedFeatures car={props.car} removeFeature={removeFeature}/>
        </FeatureContext.Provider>
      </div>
      <div className="box">
        <FeatureContext.Provider value={{ addFeature }}>
          <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={addFeature}/>
          <Total car={props.car} additionalPrice={props.additionalPrice} />
        </FeatureContext.Provider>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
};

export default connect(mapStateToProps,{ addFeature, removeFeature })(App);
