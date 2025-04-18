import React, { useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { addItemToStored } from '../../../Utilitys/utility';

const BookDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    const backNavigate = useNavigate()
    const { bookId } = useParams()
    const paramId = parseInt(bookId)
    const bookData = useLoaderData()
    const bookDet = bookData.find(singleData => singleData.bookId === paramId)

    const { image, bookName, author, tags,category, review,publisher,totalPages,yearOfPublishing, rating } = bookDet;

    const handleMarkRead = (key,Id)=>{
        addItemToStored(key,Id)
    }

    return (
        <div className='w-10/12 mx-auto my-20'>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure className='w-4/12'>
                    <img className='rounded-2xl' src={image} alt="Album" />
                </figure>
                <div className="card-body w-6/12">
                    <div className='space-y-4'>
                        <h1 className="card-title text-4xl playfair-display">{bookName}</h1>
                        <p className='text-lg'><span className='font-semibold'>By : </span>{author}</p>
                        <hr />
                    </div>
                    <div className='space-y-4'>
                        <p className='font-semibold text-xl'>{category}</p>
                        <hr />
                    </div>
                    <div className='space-y-6'>
                        <p><span className='font-semibold'>Review :</span>{review}</p>
                        <div>
                        <span className='font-semibold me-5'>Tag</span>{tags.map((alltag, index) => <span key={index} className='badge badge-soft badge-success me-6'>#{alltag}</span>)}
                        </div>
                        <hr />
                    </div>

                    <div className='mt-8'>
                        <div className="overflow-x-auto">
                            <table className="table w-[50%]">
                                <tbody >
                                    <tr>
                                        <td>Number of page :</td>
                                        <th>{totalPages}</th>
                                    </tr>
                                    <tr>
                                        <td>Publisher :</td>
                                        <th>{publisher}</th>
                                    </tr>
                                    <tr>
                                        <td>Year of Publishing :</td>
                                        <th>{yearOfPublishing}</th>
                                    </tr>
                                    <tr>
                                        <td>Rating :</td>
                                        <th>{rating}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p></p>

                    <div className="card-actions justify-start">
                    <button onClick={()=>handleMarkRead("readlist",bookId)} className='btn btn-outline hover:bg-black hover:text-white text-black border rounded-md'>Mark as Read</button>
                    <button onClick={()=>handleMarkRead("wishList",bookId)} className='btn btn-accent text-white rounded-md'>Add to Wish List</button>
                    <button onClick={()=>backNavigate(-1)} className='btn btn-outline hover:bg-black hover:text-white text-black border rounded-md'>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;