import { useState } from 'react'
import './App.css'
import Header from '/src/Header'
import Home from '/src/Home'
import Sidebar from '/src/Sidebar'

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home/>
    </div>
          
  )
}

export default withAuthenticator(App);
// export default  App