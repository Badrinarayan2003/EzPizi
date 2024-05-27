// import { configureStore } from "@reduxjs/toolkit";
// import { cartReducer } from "./cartSlice";
// import { addReducer } from "./addressSlice";
  
// export const store = configureStore({
//     reducer: {
//         cartData: cartReducer,
//         addData: addReducer,
//     }
// })


import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import rootReducer from "./rootReducer";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);