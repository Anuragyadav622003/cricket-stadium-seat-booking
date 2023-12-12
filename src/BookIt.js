// import React from 'react';
// import Payment from './Payment';

// function BookIt() {
//   const stadium = sessionStorage.getItem('stadium');
//   const user = sessionStorage.getItem('user');
//   const standType = sessionStorage.getItem('stand_type');
//   const section = sessionStorage.getItem('section');
//   const price = sessionStorage.getItem('price');

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-slate-900'>
//       <div className='flex-col bg-yellow-100 p-5 font-semibold rounded shadow-lg'>
//         <div className='mb-4 text-2xl font-bold'>{stadium}</div>
//         <div className='mb-2'>
//           <span className='font-bold'>Name</span>: {user}
//         </div>
//         <div className='mb-2'>
//           <span className='font-bold'>Stand Type</span>: {standType}
//         </div>
//         <div className='mb-2'>
//           <span className='font-bold'>Section</span>: {section}
//         </div>
//         <div className='mb-2'>
//           <span className='font-bold'>Price</span>: &#8377;{price}
//         </div>
//         <div className='mt-4'>
//           <Payment amount={price} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BookIt;
import React from 'react';
import Payment from './Payment';

function BookIt() {
  const stadium = sessionStorage.getItem('stadium');
  const user = sessionStorage.getItem('user');
  const standType = sessionStorage.getItem('stand_type');
  const section = sessionStorage.getItem('section');
  const seat_no = sessionStorage.getItem('seat_no');
  const price = sessionStorage.getItem('price');

  return (
    <div className='min-h-screen flex items-center justify-center  bg-slate-900'>
      <div className='flex-col bg-white p-8 rounded-lg shadow-lg'>
        <div className='mb-6 text-3xl font-bold text-gray-800'>{stadium}</div>
        <div className='mb-4'>
          <span className='font-bold text-gray-700'>Name</span>: {user}
        </div>
        <div className='mb-4'>
          <span className='font-bold text-gray-700'>Stand Type</span>: {standType}
        </div>
        <div className='mb-4'>
          <span className='font-bold text-gray-700'>Section</span>: {section}
        </div>
        <div className='mb-4'>
          <span className='font-bold text-gray-700'>Seat No.</span>: {seat_no}
        </div>
        <div className='mb-4'>
          <span className='font-bold text-gray-700'>Price</span>: &#8377;{price}
        </div>
        <div>
          <Payment amount={price} />
        </div>
      </div>
    </div>
  );
}

export default BookIt;
