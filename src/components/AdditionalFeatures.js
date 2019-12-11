import React, { useContext } from 'react';
import AdditionalFeature from './AdditionalFeature';
import { FeatureContext } from '../contexts/FeatureContext';

const AdditionalFeatures = props => {
  const { addFeature } = useContext(FeatureContext);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
