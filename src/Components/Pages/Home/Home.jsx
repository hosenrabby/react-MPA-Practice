import React, { Suspense, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Books from './Books';
import HeroSec from '../../Header/HeroSec';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const booksData = useLoaderData()
    return (

        <div>
            <HeroSec></HeroSec>
            <div className='w-10/12 mx-auto my-20'>
                <h1 className='text-3xl text-center playfair-display font-bold'>BOOKS</h1>
                <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
                    <Suspense fallback={<div>Loding......</div>}>
                        {
                            booksData.map(allBooks => <Books key={allBooks.bookId} allBooks={allBooks}></Books>)
                        }
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Home;