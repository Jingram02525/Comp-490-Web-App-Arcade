import React, { useEffect, useState } from 'react';
import './App.css';
import RepHeader from './components/RepHeader';
import RepMain from './components/RepMain';
import RepFooter from './components/RepFooter';


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.error(err))

  })
  return (
    <>
    <div style={{padding:"50px"}}>
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
      <RepHeader/>
      <RepMain/><RepMain/>
      <RepFooter/>
    </>
  );
}

export default App;

