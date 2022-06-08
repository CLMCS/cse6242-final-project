import React from 'react'
import AppBar from '../components/AppBar.js'
import BottomBar from '../components/BottomBar.js'
import PortalWallPaper from '../components/PortalWallPaper.js'
import PortalBody from '../components/PortalBody.js'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Worldmap from '../Worldmap.js'
import Map from './Map.js'
import ContactUs from './ContactUs.js'
import LearnMore from './LearnMore.js'
import About from './About.js'
import DataTable5 from './DataTable5.js'
import DataTable2 from './DataTable2.js'
import UseApi from './UseApi.js'
import UseTable from './UseTable.js'



function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/datatable/:p0/:p1/:p2/:p3/:p4" element={<DataTable5 />} />
        <Route path="/datatable/:p0/:p1" element={<DataTable2 />} />
        <Route path="/useapi" element={<UseApi />} />
        <Route path="/usetable" element={<UseTable />} />
				<Route path="/learnmore" element={<LearnMore />} />
				<Route path="/contactus" element={<ContactUs />} />
        <Route path="/worldmap" element={<Map />}/>
				<Route path="/about" element={<About />}/>
				
        </Routes>
      </header>
    </div>
  </Router>

  )
}




class Portal extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <PortalWallPaper />
        <PortalBody />
        <BottomBar />        
      </div>
      
    )
    
  }
}


export default App



// const Home = () => {
//     return (
//       <div>
//         <h1>HOME</h1>
//         <Link to='/first'>Link to first page</Link><br />
//         <Outlet />
//         <Link to='/second'>Link to second page</Link><br />
//         <Link to='/third'>Link to third page</Link>
  
//       </div>
//     )
//   }
//   const FirstPage = () => <h3>Contents in First Page</h3>
//   const SecondPage = () => <h3>Contents in Second Page</h3>
//   const ThirdPage = () => <h3>Contents in Third Page</h3>
//   const NoPage = () => <h3>404 Not Found</h3>
  
//   class App extends React.Component {
//     render() {
//       return (
//         <Router>
//           <Routes>
//               <Route path='/' element={Home()}>
//                 <Route path='/first' element={FirstPage()}></Route>  
//                 <Route path='/second' element={<SecondPage />}></Route>              
//                 <Route path='/' element={ThirdPage()}></Route>  
//                 <Route path='*' element={<NoPage />}></Route>
//               </Route>
  
//           </Routes>
//         </Router>
  
//       )
//     }
//   }
  
  
//   ReactDOM.render(<App />, document.getElementById('root'))