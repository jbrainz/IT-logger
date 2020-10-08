import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize'

const EditLogModal = () => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');
    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({displayLength:6000, html: 'Please enter a message and tech'})
        }
        
        else{

            //Clear Fields
            setMessage('');
            setTech('');
            setAttention(false);
        }
    }
  return (
    <div id='edit-log-modal' className='modal' style={motoStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='messsage'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-filed'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <option value='John Pius'>John Doe</option>
              <option value='Michael Smith'>Michael Smith</option>
              <option value='Sara Willson'>Sara Wilson</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-green waves-light btn'
        >Enter</a>
      </div>
    </div>
  );
};

const motoStyle = {
  width: '75%',
  height: ' 75%',
};

export default EditLogModal;
