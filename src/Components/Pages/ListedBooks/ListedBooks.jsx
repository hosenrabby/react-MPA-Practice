import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getItemsfromStored } from '../../../Utilitys/utility';
import ReadList from './readList';
import WishList from './WishList';
import { ChevronDown } from 'lucide-react';

const ListedBooks = () => {
    const bookData = useLoaderData()
    const [readList, setReadList] = useState([])
    const [wishList, setwishList] = useState([])
    const [sort, setSort] = useState('')

    useEffect(() => {
        const getStoredData = getItemsfromStored('readlist')
        const convDataToNum = getStoredData.map(id => parseInt(id))
        const getReadList = bookData.filter(id => convDataToNum.includes(id.bookId))
        setReadList(getReadList)
    }, [])
    useEffect(() => {
        const getStoredData = getItemsfromStored('wishList')
        const convDataToNum = getStoredData.map(id => parseInt(id))
        const getReadList = bookData.filter(id => convDataToNum.includes(id.bookId))
        setwishList(getReadList)
    }, [])

    const handleSortList = (type) => {
        setSort(type)
        if (type === "Page") {
            const sortData = [...readList].sort((a,b)=> a.totalPages - b.totalPages)
            setReadList(sortData)
        }
        if (type === "Rating") {
            const sortData = [...readList].sort((a,b)=> a.rating - b.rating)
            setReadList(sortData)
        }
    }


    return (
        <div className='w-10/12 mx-auto my-20'>
            <div className='flex flex-col justify-center items-center gap-3 bg-gray-200 p-15 rounded-2xl mb-6'>
                <h1 className='text-3xl font-bold playfair-display text-center'>Books</h1>

                <div className="dropdown m">
                    <div tabIndex={0} role="button" className="btn bg-[#22be0ade] hover:bg-[#22be0a] text-white rounded-lg px-4 py-2 m-1">Sort By : {sort ? sort : <ChevronDown></ChevronDown>}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>handleSortList('Page')}><a>Page</a></li>
                        <li onClick={()=>handleSortList('Rating')}><a>Rating</a></li>
                    </ul>
                </div>
            </div>

            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Mark as Read Books" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        readList.map(book => <ReadList key={book.bookId} book={book}></ReadList>)
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wish Lists Books" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        wishList.map(book => <WishList key={book.bookId} book={book}></WishList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;