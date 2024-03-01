import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Login from './pages/LoginPage';
import Register from './pages/Register';
import GameCanvas from './components/GameCanvas';


import React, { useEffect, useState } from 'react';

function App() {
    return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/api/gamecanvas" element={<GameCanvas/>} />
        <Route path="/api/login" element={<Login />} />
        <Route path="/api/register" element={<Register />} />
      </Routes>
    </div>
    );
}
// <Main/>
//<Footer/>


// const Main = () => (
//   <Switch>
//     <Route exact path="/" component={MainPage}></Route>
//     <Route exact path="/api/rom" component={MainPage}></Route>
//     <Route exact path="/api/games" component={MainPage}></Route>
//     <Route exact path="/api/login" component={MainPage}></Route>
//     <Route exact path="/api/sign-up" component={MainPage}></Route>
//   </Switch>
// );

export default App;

//Front-Communicating to backend functions/Tests
// const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:8081/users')
  //   .then(res => res.json())
  //   .then(data => setData(data))
  //   .catch(err => console.error(err))

  // })

    
    {/* <div style={{padding:"50px"}}>
      <table>
        <thead>
          <th>item_id</th>
          <th>date_created</th>
          <th>title</th>
          <th>description</th>
          <th>category</th>
          <th>price</th>
          <th>user_id</th>
        </thead>
        <tbody>
          {data.map((d,i) => (
            <tr key={i}>
              <td>{d.item_id}</td>
              <td>{d.date_created}</td>
              <td>{d.title}</td>
              <td>{d.description}</td>
              <td>{d.category}</td>
              <td>{d.price}</td>
              <td>{d.user_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          */}