import Login from './components/Login'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Contactlist from './components/Contactlist'
import Createaccount from './components/Createaccount'
import Addcontact from './components/Addcontact'
import Newaddcontact from './components/Newaddcontact'
import Contactdetails from './components/Contactdetails'

function App() {

  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/contactlist" element = {<Contactlist/>}/>
        <Route path = "/createaccount" element = {<Createaccount/>}/>
        <Route path = "/addcontact" element = {<Addcontact/>}/>
        <Route path = "/newaddcontact" element = {<Newaddcontact/>}/>
        <Route path = "/contact/:contactId" element = {<Contactdetails/>}/>
      </Routes>
    </div>
  )
}

export default App
