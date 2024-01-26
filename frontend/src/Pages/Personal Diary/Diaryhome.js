import React, { useState, useEffect } from 'react';
import './Diaryhome.css';
import Category from './Category';
import { format } from 'date-fns';
import axios from 'axios';
import { useAuth } from '../../Auth/Auth';
import { MdDeleteForever, MdOutlineEditCalendar } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Diaryhome = () => {
  const [auth] = useAuth();
  const [diary, setDiary] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState([]);

  const getAll = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/diary/getAll");
      setDiary(data.Diary);
      // Initialize expandedDescriptions state based on the length of descriptions
      setExpandedDescriptions(new Array(data.Diary.length).fill(false));
    } catch (error) {
      console.log(error);
      alert('Something went wrong');
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleDelete = async (id) => {
    try {
      const answer = window.confirm("Are you sure you want to delete this Diary?");
      if (!answer) return;

      await axios.delete(`/api/v1/diary/delete-diary/${id}`);
      alert("Successfully deleted");

      // After successful deletion, refresh the diary list
      getAll();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDescription = (index) => {
    // Toggle the expanded state for the description at the specified index
    setExpandedDescriptions((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return format(date, "MMM d, yyyy h:mm a");
  };

  return (
    <>
      <div className="diar-containter ">
        {/* ... your existing code ... */}
        <div className="containter ">
          <div className="row">
            <div className="col-md-3 left-sides">
              <Category />
            </div>
            <div className="col-md-9 right-sides">
              <h4 className='text-center'>Start Your Diary the Right Way</h4>
              <div className="d-flex flex-wrap">
                {diary?.map((item, index) => (
                  <div key={item._id} className="card" style={{ width: "58rem", height: '26rem' }}>
                    <img src={`/api/v1/diary/photo/${item._id}`} alt={item.title} className='card-img-top' style={{ height: 180 }} />
                    <div className="card-body">
                      <h5 className='card-title'>{item.title}</h5>
                      <p>{expandedDescriptions[index] ? item.description : `${item.description.slice(0, 100)}...`}</p>
                      <button onClick={() => toggleDescription(index)}>
                        {expandedDescriptions[index] ? 'Read Less' : 'Read More'}
                      </button>
                      <p className='card-text time'>Created at: {formatTimestamp(item.createdAt)}</p>
                      <p className='card-text time'>Author:{auth?.user.username}</p>
                    </div>
                    <div className="cardbtn">
                      <Link to={`/update/${item._id}`}>
                        <MdOutlineEditCalendar size={30} />
                      </Link>
                      <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>
                        <MdDeleteForever size={30} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diaryhome;
