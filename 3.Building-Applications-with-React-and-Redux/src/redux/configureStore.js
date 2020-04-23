import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';

//Evita de mutate o state
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";



export default function configureSotre(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer, 
    initialState, 
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}
