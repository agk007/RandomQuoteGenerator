import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store,{persistor} from './redux/store'
import { BrowserRouter as Router, Routes, Route, Link,Navigate } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Bookmark from './components/Bookmark';
import Home from './components/Home'

function App () {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <div className='App'>
      <Router>
        
        <Routes>
        <Route exact path='/'  element={<Home />} /> 
        <Route  path='/bookmarks' element={<Bookmark />} />        
        {/* <ItemContainer cake />
        <ItemContainer />
        <NewCakeContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer /> */}
        
        
       </Routes>
      </Router>
      </div>
      </PersistGate>
    </Provider>
  )
}

export default App
