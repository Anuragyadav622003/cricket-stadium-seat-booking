import React, { useEffect, useState } from 'react';
import TypingAnimation from './TypingAnimation';
import { Link, useNavigate } from 'react-router-dom';

function SeatLayout() {
  const [stadium, setStadium] = useState(sessionStorage.getItem('stadium'));
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/seat_layout');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const filteredEvents = stadium
    ? events.filter((event) => event.stadium_name === stadium)
    : [];

  return (
    <div className="min-h-screen flex justify-center bg-slate-900">
      <div className="flex-col mt-10 w-full max-w-screen-md">
        <p className="text-cyan-500 text-3xl subpixel-antialiased text-center leading-4 font-bold uppercase tracking-wider">
          &nbsp;<TypingAnimation text={stadium} />
        </p>
        <div className="mt-10 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded">
            <thead>
              <tr>
                <th className="px-6 py-3 font-bold text-md bg-gray-50 text-left">
                  Section
                </th>
                <th className="px-6 py-3 font-bold text-md bg-gray-50 text-left">
                  Stand Type
                </th>
                <th className="px-6 py-3 font-bold text-md bg-gray-50 text-left">
                  Price
                </th>
                <th className="px-6 py-3 font-bold text-md bg-gray-50 text-left">
                  Total Seat
                </th>
                <th className="px-6 py-3 font-bold text-md bg-gray-50 text-left">
                  Seat Available
                </th>
                <th className="px-6 py-3 font-bold text-md bg-gray-50 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((item, index) => (
                <tr key={index} className="bg-gray-100 border-b border-gray-200">
                  <td className="px-6 py-4 whitespace-no-wrap text-sm font-medium text-gray-900">
                    {item.section}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm font-semibold text-gray-900">
                    {item.stand_type}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm font-semibold text-gray-900">
                    {item.price}
                  </td>
                  <td className="px-6 py-4 font-semibold whitespace-no-wrap text-sm text-gray-900">
                    {item.Total_Seat}
                  </td>
                  <td className="px-6 py-4 font-semibold whitespace-no-wrap text-sm text-gray-900">
                    {item.Total_Seat - item.booked_seat}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm font-semibold text-cyan-900">
                    {item.Total_Seat - item.booked_seat == 0 ?<button className= "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Not Available</button>:<button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={() => {
                        sessionStorage.setItem('section', item.section);
                        sessionStorage.setItem('price', item.price);
                        sessionStorage.setItem('stand_type', item.stand_type);
                        sessionStorage.setItem('seat_no',item.booked_seat+1);
                        
                        sessionStorage.getItem('user')
                          ? navigate('/bookIt')
                          : navigate('/login');
                      }}
                    >
                      Book Now
                    </button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-80 mx-auto mt-5">
          <img src="stadiummap.png" alt="#" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default SeatLayout;
