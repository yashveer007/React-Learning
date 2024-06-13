import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Books from './components/feature/Books';
import Authors from './components/feature/Authors';
import Home from './components/feature/Home';

const commonCss = "bg-cyan-500 w-full h-96";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App />}>
      <Route path='' element = {<Home commonCss = {commonCss}/>}/>
      <Route path='books' element = {<Books  commonCss = {commonCss}/>}/>
      <Route path='authors' element = {<Authors  commonCss = {commonCss}/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
