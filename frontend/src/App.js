import React from "react";

import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "@reduxjs/toolkit";

//Import components
// import Login from "./components/welcome-page/Login";
import NotFound from "./components/notfound-page/NotFound";
import Dashboard from "./components/dashboard-page/Dashboard";
import Welcome from "./components/welcome-page/Welcome";
import Profile from "./components/profile-page/Profile.js";
import AboutUs from "./components/footer-page/AboutUs.js";
import EssentialInfo from "components/welcome-page/EssentialInfo.js";
import Essentials from "components/dashboard-page/Essentials.js";

//Import reducers
import { user } from "./reducers/user";
import { todo } from "./reducers/todo";
import { ui } from "./reducers/ui";

//Reducers
const reducer = combineReducers({
  user: user.reducer,
  todo: todo.reducer,
  ui: ui.reducer,
});

// // retrieve localstorage as inital state
const persistedState = localStorage.getItem("redux")
  ? JSON.parse(localStorage.getItem("redux"))
  : {};

// compose lets you write deeply nested function transformations without the rightward drift of the code.
const composedEnhancers =
  (process.env.NODE_ENV !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// create store with inital state
const store = createStore(
  reducer,
  persistedState,
  composedEnhancers(applyMiddleware(thunkMiddleware))
);

// store the state in localstorage on redux state change
store.subscribe(() => {
  localStorage.setItem("redux", JSON.stringify(store.getState()));
});

// window.onload = () => {
//   window.sessionStorage.clear();
// };

// const store = configureStore({ reducer });

const theme = createTheme({
  palette: {
    primary: {
      main: "#EF737D", //pink
    },
    secondary: {
      main: "#050013", //grey
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/essentialinfo" element={<EssentialInfo />} />
            <Route path="/essentials" element={<Essentials />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};
