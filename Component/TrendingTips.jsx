import React, { useEffect, useState } from 'react';

const TrendingTips = () => {
    const [tips, setTips] = useState([]);
    const [expandedTips, setExpandedTips] = useState({}); // Track which tips are expanded

    useEffect(() => {
        fetch('http://localhost:3000/tips')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTips(data);
            })
            .catch(error => {
                console.error('Error fetching tips:', error);
            });
    }, []);

    const toggleDescription = (id) => {
        setExpandedTips(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className='lg:pl-60 lg:pr-60 mx-auto mt-10'>
            <div className='lg:w-10/12 mx-auto text-center space-y-4 p-3'>
                <h1 className='font-bold text-2xl text-center text-green-700'>Top Trending Tips section</h1>
                <p>Explore the latest and most popular tips curated to help you stay ahead. From practical advice to innovative ideas, this section brings you expert guidance to make your projects easier and more successful. Stay updated with what’s trending now!</p>
            </div>
           
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
                {tips.map((tip) => {
                    const isExpanded = expandedTips[tip._id];
                    const shouldShowToggle = tip.description.length > 100;
                    const displayedText = isExpanded
                        ? tip.description
                        : tip.description.slice(0, 100) + (shouldShowToggle ? "..." : "");

                    return (
                        <div className="card bg-base-100 lg:w-96 shadow-sm mx-auto" key={tip._id}>
                            <figure>
                                <img src={tip.imageUrl} alt={tip.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {tip.title}
                                    <div className="badge badge-secondary">{tip.user}</div>
                                </h2>
                                <p>
                                    {displayedText}
                                    {shouldShowToggle && (
                                        <span
                                            onClick={() => toggleDescription(tip._id)}
                                            style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
                                        >
                                            {isExpanded ? "Read Less" : "Read More"}
                                        </span>
                                    )}
                                </p>
                                <div className="card-actions justify-end">
                                  
                                    <div className="badge badge-outline">{tip.category}</div>
                                    
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TrendingTips;

