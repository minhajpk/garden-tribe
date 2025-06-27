import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdataPage = () => {
    const { _id, title, imageUrl, category, description, availability,
        difficulty, plantType
    } = useLoaderData();



    const handleUpdatedTips = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const UpdatedTips = Object.fromEntries(formData.entries());
        console.log(UpdatedTips);

        fetch(`http://localhost:3000/tips/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UpdatedTips)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    e.target.reset();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Tips has been Updated Successfully",
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
            })

    }
    return (
        <div>
            <div className='mt-10 mb-10'>
                <div className=' w-1/2 mx-auto text-center'>
                    <h2 className='text-2xl font-bold text-green-700 text-center' >Update Your Gardening Tip</h2>
                    <p className='mt-4'>Update Your Gardening Tip
                        Have new insights or improvements to share? Keep your gardening advice fresh and more helpful by updating your tip! Whether you've discovered a better method, added more details, or refined your technique—your updated experience can make a big difference for fellow gardeners. Help others grow with confidence by keeping your tip current.

                        .</p>
                </div>
                <form onSubmit={handleUpdatedTips} className="max-w-3xl mx-auto p-6 shadow-lg rounded-lg space-y-5 mt-4">
                    {/* <h2 className="text-2xl font-bold text-green-700 text-center">Submit Your Gardening Experience</h2> */}

                    {/* Title */}
                    <div>
                        <label className="block font-semibold mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={title}
                            placeholder="e.g., How I Grow Tomatoes Indoors"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Plant Type/Topic */}
                    <div>
                        <label className="block font-semibold mb-1">Plant Type/Topic</label>
                        <input
                            type="text"
                            name="plantType"
                            defaultValue={plantType}
                            placeholder="e.g., Tomato, Indoor Gardening"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Difficulty Level */}
                    <div>
                        <label className="block font-semibold mb-1">Difficulty Level</label>
                        <select name="difficulty" defaultValue={difficulty} className="select select-bordered w-full" required>
                            <option value="">Select Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block font-semibold mb-1">Description</label>
                        <textarea
                            name="description"
                            defaultValue={description
                            }
                            placeholder="Write your gardening experience..."
                            className="textarea textarea-bordered w-full"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block font-semibold mb-1">Image URL</label>
                        <input
                            type="url"
                            defaultValue={imageUrl}
                            name="imageUrl"
                            placeholder="https://example.com/image.jpg"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block font-semibold mb-1">Category</label>
                        <select name="category" defaultValue={category} className="select select-bordered w-full" required>
                            <option value="">Select Category</option>
                            <option value="Composting">Composting</option>
                            <option value="Plant Care">Plant Care</option>
                            <option value="Vertical Gardening">Vertical Gardening</option>
                            <option value="Indoor Gardening">Indoor Gardening</option>
                            <option value="Hydroponics">Hydroponics</option>
                            <option value="Hydroponics">Information</option>
                        </select>
                    </div>

                    {/* Availability */}
                    <div>
                        <label className="block font-semibold mb-1">Availability</label>
                        <select name="availability" defaultValue={availability} className="select select-bordered w-full" required>
                            <option value="Public">Public</option>
                            <option value="Hidden">Hidden</option>
                        </select>
                    </div>

                    {/* Read-Only User Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold mb-1">User Name</label>
                            <input
                                type="text"

                                readOnly
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">User Email</label>
                            <input
                                type="email"
                                readOnly
                                className="input input-bordered w-full "
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-right">
                        <button type="submit" className="btn  bg-white text-[#006023]  hover:bg-[#006023] hover:text-white">
                            Updated Tips
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdataPage;