import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

// Saga
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

// Redux Persist
const persistConfig = { key: 'maven-code', storage, whitelist: ["user"] };
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true, serializableCheck: false }).concat(middleware)
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
