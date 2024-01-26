import React from 'react'
import { Link} from 'react-router-dom'
import { Categorydata } from './Categorydata'
import './Category.css'
const Category = () => {
  return (
    <>
     <Link to='/create'> <button className='btn btn-dark'> Create Diary</button></Link>
<table className='table' >
    <tbody>
    <tr>
        <th>All Category</th>
      
    </tr>
        {
            Categorydata.map((item,index)=>(
                <tr key={index}>
                 <td>{item.type}</td>
                </tr>
            ))
        }
    </tbody>
</table>
</>
  )
}

export default Category