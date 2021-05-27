// // --------------- LIBRARIES ---------------
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';

// // --------------- ASSETS ---------------
import rootReducer from './Reducers';
import rootSaga from './Sagas';

// Roor reducer with persist config
const reducers = persistReducer(
    {
        key: 'root',
        storage: AsyncStorage,
    },
    rootReducer,
);

// Middlewares setup
const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
const enhancers = [];
middlewares.push(sagaMiddleware, logger); // With logger
// middlewares.push(sagaMiddleware); // without logger
enhancers.push(applyMiddleware(...middlewares));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store ----->>>>>
export const Store = createStore(reducers, compose(...enhancers));

// PersistStore contains all the data from store ----->>>>>
export const Persistor = persistStore(Store);
sagaMiddleware.run(rootSaga); // Run Saga
