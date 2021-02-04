const initialState = {};

const InitReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE": {
      return action.payload || {};
    }
    default:
      return state || {};
  }
};

export default InitReducer;
