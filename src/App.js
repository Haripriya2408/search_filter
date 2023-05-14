
import './App.css';
import React, { useState } from 'react'
import {data} from './data'




function App() {
 const[search,setSearch]=useState('')
 console.log(search)
  return (
    <div className="App">
      
        <h1 className='header'>
          Employee Department

        </h1>
        <p><input onChange={(e)=>setSearch(e.target.value
        )

        } placeholder='search contacts'/></p>

<table id="students">
        <thead>
          <tr>
            <th>First name</th>
            <th>last name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Department</th>
            
          </tr> 
</thead>

<tbody>
  {data.filter((item)=>{
    return search.toLowerCase()===''? item:item.first_name.toLowerCase().includes(search)
  }).map((item)=>(
    <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.dept}</td>
           
            
          </tr> 
  ))}

</tbody>
</table>
    
    </div>
  );
}

export default App;
