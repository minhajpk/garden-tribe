import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ExploreGardeners = () => {
    const gardeners = useLoaderData();
    console.log(gardeners);

    return (
        <div className='lg:pl-60 lg:pr-60 mx-auto mt-10'>
            <div className='lg:w-10/12 mx-auto p-4 text-center space-y-4'>
            <h2 className='text-2xl font-bold text-green-700'>Welcome to Our Experience Gardeners Section</h2>
            <p>Welcome to the Explore Gardeners section—your gateway to connecting with passionate green thumbs from all walks of life. Here, you’ll find detailed profiles of experienced and budding gardeners who generously share their knowledge, tips, and personal gardening journeys. Each profile highlights their background, gardening specialties, and the number of tips they’ve contributed to the community.</p>
        </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 p-4 mx-auto space-y-8 justify-center mt-10 mb-10">

                {gardeners.map((gardener, index) => (
                    <div key={index} className="card bg-base-100 lg:w-96  shadow-sm">
                        <figure>
                            <img
                            className='w-full h-full '
                                src={gardener.image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                                alt={gardener.name}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {gardener.name}
                                <div className="badge badge-secondary">Gardener</div>
                            </h2>
                            <p><strong>Experience:</strong> {gardener.experiences}</p>
                            <p><strong>Age:</strong> {gardener.age}</p>
                            <p><strong>Status:</strong> {gardener.status}</p>
                            <p><strong>Total Shared Tips:</strong> {gardener.totalSharedTips}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{gardener.gender}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreGardeners;
