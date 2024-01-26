import React from 'react'
import { useSearch } from '../../Auth/Search';
const Result = () => {
    const [value,setvalue]=useSearch();
  return (
    <>
    <div className="container">
      <div className="text-center">
       <h1>Search result...</h1> 
       {value?.result && value?.result.length > 0 ? (
  <>
    <div className="d-flex flex-wrap">
      {value?.result.map((item, index) => (
        <div key={item._id} className="card" style={{ width: "58rem", height: '26rem' }}>
          <img src={`/api/v1/diary/photo/${item._id}`} alt={item.title} className='card-img-top' style={{ height: 180 }} />
          <div className="card-body">
            <h5 className='card-title'>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </>
) : (
  <>
    <p>No Diary Found</p>
  </>
)}

      </div>
    </div>
    </>
  )
}

export default Result
