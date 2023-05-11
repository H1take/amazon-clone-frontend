import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./user/user.slice";

// import { carousel } from "@/../src/store/carousel/carousel.slice";

// import { cartSlice } from "./cart/cart.slice";

const persistConfig = {
    key: "amazon-clone",
    storage,
    whitelist: ["cart"]
}

const rootReducer = combineReducers({
    user: userSlice.reducer
    // cart: cartSlice.reducer,
    // carousel: carouselSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export const persistor = persistStore(store);

export type TypeRootStore = ReturnType<typeof rootReducer>;