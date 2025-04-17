import React from 'react';
import bannerImage from '../../assets/banner.png'
const HeroSec = () => {
    return (
        <div>
            <div className="bg-base-200 w-10/12 mx-auto rounded-2xl mt-10">
                <div className="p-14 flex flex-col lg:flex-row-reverse justify-around min-h-[550] ">
                    <img src={bannerImage} className="max-w-sm rounded-lg" />
                    <div className='mt-6 lg:mt-22'>
                        <h1 className="text-5xl font-bold playfair-display">Books to freshen up <br /> your bookshelf</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. <br />Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi..
                        </p>
                        <button className='btn bg-[#22be0ade] hover:bg-[#22be0a] text-white border border-[#23BE0A] rounded-md text-xl p-6'>View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSec;