let initialState = {
  reports: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_REPORTS': 
      return { 
        ...state,
      }
    default:
      return state;
  }
}