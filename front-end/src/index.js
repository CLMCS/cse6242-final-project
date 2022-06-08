import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom'


ReactDOM.render(

    <React.StrictMode>
      <App />
    </React.StrictMode>    

,
  document.getElementById('root')
);




// const Home = () => {
//   return (
//     <div>
//       <h1>HOME</h1>
//       <Link to='/first'>Link to first page</Link><br />
//       <Outlet />
//       <Link to='/second'>Link to second page</Link><br />
//       <Link to='/third'>Link to third page</Link>

//     </div>
//   )
// }
// const FirstPage = () => <h3>Contents in First Page</h3>
// const SecondPage = () => <h3>Contents in Second Page</h3>
// const ThirdPage = () => <h3>Contents in Third Page</h3>
// const NoPage = () => <h3>404 Not Found</h3>

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Routes>
//             <Route path='/' element={Home()}>
//               <Route path='/first' element={FirstPage()}></Route>  
//               <Route path='/second' element={<SecondPage />}></Route>              
//               <Route path='/' element={ThirdPage()}></Route>  
//               <Route path='*' element={<NoPage />}></Route>
//             </Route>

//         </Routes>
//       </Router>

//     )
//   }
// }


// ReactDOM.render(<App />, document.getElementById('root'))