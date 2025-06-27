import React from 'react';
import Banner from '../Component/Banner';
import TrendingTips from '../Component/TrendingTips';
import FeaturedGardeners from '../Component/FeaturedGardeners';
import { useLoaderData } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const Home = () => {
    const { gardeners } = useLoaderData(); // ✅ Make sure this line exists

    console.log(gardeners);
    return (
        <div>
            <div className='lg:pl-60 lg:pr-60 mx-auto bg-green-500 text-white  space-y-10'>
                <Marquee className='space-x-10'>
                    <Marquee pauseOnHover speed={30}>
                        <h2 className="mx-8">🌻 Why My Sunflowers Always Face East</h2>
                        <h2 className="mx-8">🍅 How I Grow Tomatoes Indoors</h2>
                        <h2 className="mx-8">🍓 My Balcony Strawberry Garden</h2>
                        <h2 className="mx-8">🌱 How I Started My Bonsai Journey</h2>
                        <h2 className="mx-8">💜 Lavender: Fragrance and Beauty in Your Garden</h2>
                        <h2 className="mx-8">🌿 Aloe Vera: The Healing Plant for Every Home</h2>
                    </Marquee>
                </Marquee>
            </div>
            <Banner></Banner>

            <FeaturedGardeners gardener={gardeners} ></FeaturedGardeners>

            <TrendingTips></TrendingTips>


        </div>
    );
};

export default Home;