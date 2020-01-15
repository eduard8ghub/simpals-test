import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";

import thunkMiddleware from "redux-thunk";
import CardPostsContainer from "./containers/CardPostsContainer";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/index"
import AddPostContainer from "./containers/AddPostContainer";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
window.store = store;

function App() {
  return (
      <Provider store={store}>
          <div className="container">
              <Header/>
              <section>
                  <CardPostsContainer/>
                  <AddPostContainer/>
              </section>

          </div>
      </Provider>
  );
}

export default App;
