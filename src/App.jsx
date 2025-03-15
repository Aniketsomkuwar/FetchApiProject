
import Header from "./components/Header"

import { Outlet } from "react-router-dom"
import userContext from "./utils/UserContext"
import { useContext, useEffect, useState } from "react"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

const App = () => {

  const [userName, setUserName] = useState();


  useEffect(() => {
    setUserName("Raj");
  }, [])



  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className='App'>
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  )
}



export default App;
