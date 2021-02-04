const initialState = {
  region: "",
  regionInfo: {},
};

const regions = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_REGION": {
      return {
        ...state,
        region: action.payload.region,
        regionInfo: action.payload.regionInfo,
      };
    }
    default:
      return state;
  }
};

export default regions;
