import { BrowserRouter,Routes,Route} from  "react-router-dom"

import Login from "./components/Login"
import Home from "./components/Home"
import Users from "./components/Users"
import Posts from "./components/Posts"


const App=()=>(
  <BrowserRouter>
    <Routes>
      <Route path='/login' Component={Login}/>
      <Route exact path='/' Component={Home}/>
      <Route exact path="/users" Component={Users}/>
      <Route exact path='/posts' Component={Posts}/>
    </Routes>
  </BrowserRouter>
)

export default App