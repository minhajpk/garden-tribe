import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BrowesTips = () => {
  const tips = useLoaderData(); 
  const [tip, setTip] = useState(tips);

//   const handleDetails = (id) => {
//     console.log('View details for tip:', id);
//     // optional: add logic for modal or navigation here
//   };

  return (
    <div className='lg:pl-60 lg:pr-60 mx-auto mt-10'>
      {/* Section Title */}
      <div className='w-10/12 mx-auto text-center space-y-3'>
        <h2 className='text-2xl font-bold text-green-700'>Browse Tips – Discover Garden Wisdom</h2>
        <p>
          Explore a wide range of gardening tips shared by fellow plant lovers! Whether you're a beginner or a seasoned gardener, our Browse Tips section offers helpful advice, creative ideas, and proven techniques for growing healthier, more beautiful plants. From indoor herb gardening to flower care, composting tricks, and seasonal planting guides – find inspiration and learn something new every day. Each tip includes practical steps, difficulty levels, and real experiences to guide you on your green journey.
        </p>
      </div>

      {/* Tips Table */}
      <div className='mt-10 mb-10 sm:p-4 overflow-x-auto'>
        <table className="table">
          <thead>
            <tr className='bg-green-50 '>
              <th>Image & Title</th>
              <th>Plant Type</th>
              <th>Difficulty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              tip.map((tipItem, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={tipItem.imageUrl} alt="Tip" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-600">{tipItem.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className='text-gray-700'>{tipItem.plantType || 'N/A'}</td>
                  <td className='text-gray-700'>{tipItem.difficulty || 'N/A'}</td>
                  <td>
                    <Link to={`/tip-details/${tipItem._id}`}>
                      <button className="btn bg-[#006838] text-white">View Details</button>
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowesTips;
;
