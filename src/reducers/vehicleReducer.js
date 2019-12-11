import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/vehicleActions";

  export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const vehicleReducer = (state = initialState, action) => {
    console.log(state, action)
    switch(action.type) {
      case ADD_FEATURE:
        const featuresLeft = state.additionalFeatures.filter(feature => {
          return feature.id !== action.payload.id
        })
        return {
          ...state,
          additionalPrice: state.additionalPrice + action.payload.price,
          car: {
            ...state.car,
            features: [...state.car.features, action.payload]
          },
          additionalFeatures: [...featuresLeft]
        };
      case REMOVE_FEATURE:
        const removedFeatures = state.car.features.filter(feature => {
          return feature.id !== action.payload.id
        })
        return {
          ...state,
          additionalPrice: state.additionalPrice - action.payload.price,
          car: {
            ...state.car,
            features: [...removedFeatures]
          },
          additionalFeatures: [...state.additionalFeatures, action.payload]
        }
        default:
            return state;
    }
  };