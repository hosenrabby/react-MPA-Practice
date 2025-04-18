import React from 'react';
import { CalendarClock, NotebookText, Users } from 'lucide-react';
import { Link } from 'react-router';
const ReadList = ({ book }) => {
    const { bookId, image, bookName, author, tags, category, publisher, totalPages, yearOfPublishing, rating } = book;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm mb-6">
                <figure className=' w-56 '>
                    <img className='rounded-xl' src={image} alt="Movie" />
                </figure>
                <div className="card-body space-y-4">
                    <div className='space-y-2'>
                        <h1 className="card-title text-3xl playfair-display">{bookName}</h1>
                        <p className='text-lg text-gray-500'><span className='font-semibold'>By : </span>{author}</p>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-3'>
                        <span className='font-semibold me-5'>Tag </span> {tags.map((alltag, index) => <span key={index} className='badge badge-soft badge-success me-6'>#{alltag}</span>)}
                        <span className='flex gap-3'><CalendarClock></CalendarClock> Year of Publishing : {yearOfPublishing}</span>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-3 text-gray-500'>
                        <span className='flex gap-3'><Users></Users> Publisher : {publisher} </span>
                        <span className='flex gap-3'><NotebookText></NotebookText> Page : {totalPages} </span>
                    </div>
                    <hr className='text-gray-500' />
                    <div className="card-actions justify-start">
                        <span className='bg-[#E0EEFF] text-[#328EFF] rounded-full px-4 py-2 tracking-wide'>Category : {category}</span>
                        <span className='bg-[#FFF3E0] text-[#FFAC33] rounded-full px-4 py-2 tracking-wide'>Rating : {rating}</span>
                        <Link to={`/bookdetail/${bookId}`}><button className=' bg-[#22be0ade] hover:bg-[#22be0a] text-white rounded-full  px-4 py-2 tracking-wide cursor-pointer'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadList;