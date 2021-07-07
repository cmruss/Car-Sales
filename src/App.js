import React from 'react';
import { connect } from 'react-redux';
import { Hero } from 'react-bulma-components'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  return (
    <Hero>
      <Hero className='box' >
          <Header car={props.car} />
          <AddedFeatures car={props.car}/>
          <AdditionalFeatures additionalFeatures={props.additionalFeatures}/>
          <Total car={props.car} additionalPrice={props.additionalPrice}/>
      </Hero>
    </Hero>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
};

export default connect(mapStateToProps,{})(App);

