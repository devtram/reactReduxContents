import React from "react";
import { View } from "react-native";

//Redux specific
import { Provider } from "react-redux";
import { createStore } from "redux";


//Get Reducers
import reducers from "./reducers";
//Get the Header Component
import Header from "./common/Header";
// import LibraryList from "./components/LibraryList";
import LibraryList from "./components/LibraryList";


const App = () => {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  };

export default App;
//Please don't forget to refer to this App.js in your main index.js file as well.
