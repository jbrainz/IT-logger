import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TechItem from './TechItem';
const TechListModal = () => {
  const [tech, setTech] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTech();
    //eslint-disable-next-line
  }, []);

  const getTech = async () => {
    setLoading(true);
    const res = await axios.get('/techs');
    setTech(res.data);
    setLoading(false);
  };
  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            tech.map((tech) => (
              <TechItem tech={tech} key={tech.id}/>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
