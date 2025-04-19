import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Books = ({ allBooks }) => {
    const { bookId, image, bookName, author, tags, publisher, rating } = allBooks
    return (
        <div>
            <div className="card bg-base-100 shadow-sm border border-gray-200">
                <figure className="px-6 pt-6">
                    <img src={image} alt="Shoes" className="rounded-xl bg-gray-200 h-[450px]" />
                </figure>
                <div className="card-body items-start text-center space-y-1.5">
                    <div className='space-x-2'>

                        {tags.map((alltag, index) => <span key={index} className='badge badge-soft badge-success'>{alltag}</span>)}
                    </div>
                    <h2 className="card-title playfair-display">{bookName}</h2>
                    <p className='text-start'><span className='font-semibold'>By :</span> {author}</p>
                    <Link to={`/bookdetail/${bookId}`}><button className='btn btn-sm btn-outline btn-accent'>Show Book Detail</button></Link>
                    <div className="flex justify-between border-t border-dashed w-full pt-4">
                        <span>{publisher}</span>
                        <span className='flex gap-2'> {rating} <Star size={18}></Star></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;