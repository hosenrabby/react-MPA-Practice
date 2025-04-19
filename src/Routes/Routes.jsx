import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Components/Root/Root';
import Home from '../Components/Pages/Home/Home';
import BookDetail from '../Components/Pages/BookDetails/BookDetail';
import ListedBooks from '../Components/Pages/ListedBooks/ListedBooks';
import BookChart from '../Components/Pages/BooksChart/BookChart';

const Routes = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        children:[
            {
                index:true, path: '/',
                loader:()=> fetch('/booksData.json'),
                Component:Home
            },
            {
                path:'/bookdetail/:bookId',
                loader:() => fetch(`/booksData.json`),
                Component: BookDetail
            },
            {
                path:'/listedbooks',
                loader:() => fetch(`/booksData.json`),
                Component: ListedBooks
            },
            {
                path:'/booksinchart',
                loader:() => fetch(`/booksData.json`),
                Component: BookChart
            }
        ]
    }
])

export default Routes;