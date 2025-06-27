import React from 'react';

const FeaturedGardeners = ({ gardener }) => {
    console.log(gardener)
    if (!gardener || gardener.length === 0) {
        return <p className="text-center text-gray-500">No featured gardeners found.</p>;
    }

    return (
        <div className='lg:pl-60 lg:pr-60 mx-auto mt-10'>
           <div className='lg:w-10/12 mx-auto text-center space-y-4 p-3'>
             <h1 className='font-bold text-2xl text-center text-green-700'>Featured Gardeners</h1>
             <p>Discover the stories, tips, and expertise of our top gardeners. Learn from their experience, innovative techniques, and passion for creating beautiful, thriving gardens. Whether you’re a beginner or a seasoned green thumb, get inspired to grow your own paradise!</p>
           </div>
            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-6 mt-10">
                {gardener.map((g) => (
                    <div key={g._id} className="card bg-base-100 lg:w-96 mx-auto shadow-sm">
                        <figure>
                            <img
                                src={g.image}
                                alt={g.name || "Gardener"}
                                className="h-60 w-full object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {g.name}
                                <div className="badge badge-secondary">Gardener</div>
                            </h2>
                            <p><strong>Experience:</strong> {g.experiences}</p>
                            <p><strong>Age:</strong> {g.age}</p>
                            <p><strong>Total Shared Tips:</strong> {g.totalSharedTips}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{g.gender}</div>
                                <div className={`badge ${g.status === 'Active' ? 'badge-success text-white' : 'badge-error text-white'}`}>
                                    {g.status}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedGardeners;

