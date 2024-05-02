import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Initial from './pages/Initial';
import EmulatorPage from './pages/EmulatorPage';
import GameLibrary from './pages/GameLibrary';

function App() {
 
  return (
        <Routes>
          <Route path= '/dashboard'  element={<Home/>}></Route>
          <Route path= '/'  element={<Initial/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register'  element={<Register/>}></Route>
          <Route path= '/terms' element={<Terms/>}></Route>
          <Route path= '/privacy' element={<Privacy/>}></Route>
          <Route path= '/emulator' element={<EmulatorPage/>}></Route>
          <Route path= '/Roms' element={<GameLibrary/>}></Route>
        </Routes>
  );
}

export default App;

 // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:8081/users')
  //   .then(res => res.json())
  //   .then(data => setData(data))
  //   .catch(err => console.error(err))

  // })

///////////////////////////////////////////////////////////////////////////



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