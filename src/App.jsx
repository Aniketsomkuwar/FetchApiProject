import Body from "./components/Body"
import Header from "./components/Header"
import AboutUs from "./pages/AboutUs"
import { Outlet } from "react-router-dom"
const App = () => {

  return (
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  )
}



export default App
