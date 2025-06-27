import React, { useEffect, useState, use } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthContext';
import Swal from 'sweetalert2';


const MyTipsPage = () => {
    const [tips, setTips] = useState([]);
    const { user } = use(AuthContext)
    const navigate = useNavigate();
    useEffect(() => {
  if (!user?.email) return;  
  
  fetch(`http://localhost:3000/tips?email=${user.email}`)
    .then(res => res.json())
    .then(data => setTips(data))
    .catch(err => console.error(err));
}, [user?.email]);


    

    //   Deleted tips

    const handleDelete = (id) => {
        console.log("Deleting Tip ID:", id);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600',
                cancelButton: 'bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-3'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/tips/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    });


                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } else if (

                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });


    }
    // Update Tips

    const handleUpdate = (id) => {
        navigate(`/update-tips/${id}`);
    };

    return (
        <div className=" lg:pl-60 lg:pr-60 mx-auto mt-10 mb-10 space-y-5 sm:p-5 lg:pb-50">
            <div className='w-10/12 mx-auto text-center space-y-3 '>
                <h2 className="text-2xl font-bold mb-4 text-green-700">My Gardening Tips</h2>
                <p>Discover practical and easy-to-follow gardening tips to help your plants thrive! From soil preparation and watering techniques to seasonal care and pest control, "My Gardening Tips" is your go-to guide for growing a beautiful, healthy garden—whether you're a beginner or a seasoned green thumb.</p>
            </div>
            <table className="table w-full mt-5">
                <thead>
                    <tr className="bg-green-100">
                        <th>Title</th>
                        <th>Category</th>
                        <th>Visibility</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tips.map((tip) => (
                        <tr key={tip._id} >
                            <td>{tip.title}</td>
                            <td>{tip.category}</td>
                            <td>{tip.availability}</td>
                            <td className='lg:space-x-3'>
                                <button onClick={() => handleUpdate(tip._id)} className="btn btn-sm btn-outline mr-2">Update</button>
                                <button onClick={() => handleDelete(tip._id)} className="btn btn-sm btn-error text-white">Delete</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyTipsPage;
