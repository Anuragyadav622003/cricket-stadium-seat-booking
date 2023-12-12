import React from 'react';
import './Ticket.css'
const Ticket = () => {
const stadium = sessionStorage.getItem('stadium');
const address = sessionStorage.getItem('address') ;
const date = sessionStorage.getItem('date');
 const time =  sessionStorage.getItem('time');
const Team_A = sessionStorage.getItem('TeamA');
const Team_B = sessionStorage.getItem('TeamB');
const user = sessionStorage.getItem('user');
const Stand_Type = sessionStorage.getItem('stand_type');
const section = sessionStorage.getItem('section');
const price = sessionStorage.getItem('price');
const seat_no = sessionStorage.getItem('seat_no')
const event = sessionStorage.getItem('event');
  const handleDownload = () => {
    const htmlData = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f0f0f0;
        text-align: center;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }
      .ticket {
        width: 300px;
        margin: 50px auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
      }
      .header {
        background-color: #1e40af;
        color: #fff;
        padding: 15px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        margin-bottom: 10px;
      }
        .match-details {
          margin-top: 10px;
        }
    
        .team {
          font-weight: bold;
          color: #1e40af;
        }
    
        .venue, .date-time {
          margin-top: 10px;
          color: #555;
        }
    
        .ticket-footer {
          margin-top: 20px;
        }
    
        
      </style>
    </head>
    <body>
      <div class="ticket">
        <div class="header">
          <h2>${event}</h2>
        </div>
    
        <div class="match-details">
          <p class="team">${Team_A}vs ${Team_B}</p>
          <p class="venue">${stadium}</p>
          <p class="venue">${address}</p>
          <p class="date-time">Date: ${date}, Time: ${time}</p>
        </div>
    
        <div className="ticket-footer">
        <p>Name: ${user}</p>
        <p>Stand_Type: ${Stand_Type} </p>
        <p>Section: ${section} </p>
        <p>Seat_No: ${seat_no}</p>
        <p>Price: ${price} </p>
        
      </div>
       
      </div>
    </body>
    </html>
    
    `;

    const blob = new Blob([htmlData], { type: 'text/html' });

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'form_receipt.html';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-900'>
    <div className='max-w-lg bg-white p-8 rounded-lg shadow-md'>
      <div className='text-center mb-6'>
        <h2 className='text-2xl font-bold text-blue-700'>{event}</h2>
        <p className='text-gray-500'>{stadium}</p>
      </div>

      <div className='mb-6'>
        <p className='text-lg font-bold'>{Team_A} vs {Team_B}</p>
        <p className='text-gray-700'>{address}</p>
        <p className='text-gray-700'>Date: {date}, Time: {time}</p>
      </div>

      <div className='border-t border-gray-200 pt-4'>
        <p className='text-gray-800'>
          <span className='font-bold'>Name:</span> {user}
        </p>
        <p className='text-gray-800'>
          <span className='font-bold'>Stand Type:</span> {Stand_Type}
        </p>
        <p className='text-gray-800'>
          <span className='font-bold'>Section:</span> {section}
        </p>
        <p className='text-gray-800'>
          <span className='font-bold'>Seat No:</span> {seat_no}
        </p>
        <p className='text-gray-800'>
          <span className='font-bold'>Price:</span> {price}
        </p>
      </div>

      <button
        className='mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        onClick={handleDownload}
      >
        Download ticket
      </button>
    </div>
  </div>
  );
};

export default Ticket;
