import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    sessionStorage.setItem('stadium', props.data.stadium);
    sessionStorage.setItem('address', props.data.address);
    sessionStorage.setItem('date', props.data.date_column);
    sessionStorage.setItem('event', props.data.event_name);
    sessionStorage.setItem('time', props.data.time);
    sessionStorage.setItem('TeamA', props.data.Team_A);
    sessionStorage.setItem('TeamB', props.data.Team_B);
    navigate('/seat-layout');
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 hover:shadow-2xl transition duration-300">
      <div
        className="w-full h-32 object-cover rounded-t-lg cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={`${props.data.stadium}.jpg`}
          alt="#"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{props.data.stadium}</h2>
        <h4 className="text-sm font-semibold">{props.data.address}</h4>
        <div className="flex items-center mt-2">
          <img
            src={`${props.data.Team_A}.jpg`}
            alt=""
            className="h-7 w-12 border-2"
          />
          <span className="font-bold px-2">{props.data.Team_A}</span>
        </div>
        <div className="flex items-center mt-2">
          <img
            src={`${props.data.Team_B}.jpg`}
            alt=""
            className="h-7 w-12 border-2"
          />
          <span className="font-bold px-2">{props.data.Team_B}</span>
        </div>
      </div>
      <div className="flex justify-between items-center p-4">
        <div className="text-left">{props.data.date_column}</div>
        <div className="text-right">{props.data.time}</div>
      </div>
      <div className="text-right p-4">
        <button className="text-blue-500 hover:text-blue-700" onClick={handleClick}>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;
