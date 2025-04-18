import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Components/Root/Root';
import Home from '../Components/Pages/Home/Home';
import About from '../Components/Pages/About/About';
import BookDetail from '../Components/Pages/BookDetails/BookDetail';
import ListedBooks from '../Components/Pages/ListedBooks/ListedBooks';

const Routes = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        children:[
            {
                index:true, path: '/',
                loader:()=> fetch('booksData.json'),
                Component:Home
            },
            {
                path:'/bookdetail/:bookId',
                loader:() => fetch(`booksData.json`),
                Component: BookDetail
            },
            {
                path:'/listedbooks',
                loader:() => fetch(`booksData.json`),
                Component: ListedBooks
            },
            {
                path:'/about',
                Component: About
            }
        ]
    }
])

export default Routes;