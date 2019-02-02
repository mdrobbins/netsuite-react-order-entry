import initialState from './initialState';

const crossCuttingReducer = (state = initialState, action) => {
  logAction(action);

  switch(action.type) {
    default:
      return state;
  }
};

function logAction({ type, ...payload }) {
  console.log(type, ' ', payload);
}

export default crossCuttingReducer;