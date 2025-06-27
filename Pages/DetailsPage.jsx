import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BiLike } from "react-icons/bi";

const DetailsPage = () => {
    const { id } = useParams();
    const [tip, setTip] = useState({});



    useEffect(() => {
        fetch(`http://localhost:3000/tips/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTip(data);
            })
            .catch(error => console.error('Error fetching coffee:', error));
    }, [id]);
    const { title, availability, description, imageUrl, plantType, difficulty } = tip;




    if (!tip) return <div className="text-center mt-10 text-red-500">Tip not found.</div>;

    return (
        <div className="lg:pl-60 lg:pr-60 flex justify-center mt-10 mb-10">
            <div className="card bg-base-100 w-8/12 shadow-sm ">
                <figure>
                    <img
                        src={imageUrl}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                   
                        <div className="badge shadow bg-[#006838] text-white">{ availability}</div>
                   
                    
                    <h2 className="card-title">{title}</h2>
                    <p className=''> <span className='font-bold' >plantType</span> <span> <div className="badge badge-soft badge-success">{plantType}</div></span></p>
                    <p className=''> <span className='font-bold' >Difficulty:</span> <span> <div className="badge badge-soft badge-success">{difficulty}</div></span></p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#006838] text-white">Like <BiLike /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
