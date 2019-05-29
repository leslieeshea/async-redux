import { createStore, applyMiddleware } from 'redux';

const logger = store => next => action => {
  // before the reducer has changed state
  console.log('Before reducer', store.getState());

  // go to the next middleware
  next(action);

  // after the reducer has changed state
  console.log('After reducer', store.getState());
};

const loggerTwo = store => next => action => {
  console.log('I am another middleware!', action);
  next(action);
};

function reducer(state = {}, action) {
  switch(action.type) {
    case 'HI':
      return 'hi there!';
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  applyMiddleware(logger, loggerTwo)
);

store.dispatch({
  type: 'HI'
});
