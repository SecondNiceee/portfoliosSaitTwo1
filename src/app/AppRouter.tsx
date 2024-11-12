import {  createBrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '../pages/Home';
import { BaseLayout } from './layout';
import { LogIn, Registration } from '../pages/Form';
import { Portfolios } from '../pages/Portfolios';
import { Create } from '../pages/Create';
import { ProtectedRoute } from '../shared/models';
import { Edit } from '../pages/Edit';
export const AppRouter = () => {


  return (
    <>
    <Routes>
      <Route element = {<BaseLayout/>} >
        <Route element = {<Home/>} path='/' />
        <Route element = {<Portfolios/>} path='/portfolios' />
        <Route element = {<Edit/>} path='/portfolios/:id/edit' />
        <Route element = {<Create/>} path='/create' />
        <Route element = {<ProtectedRoute isUser = {false} />}>
          <Route path='/registration' element = {<Registration/>} />
          <Route path='/login' element = {<LogIn/>} />
        </Route>
      </Route>
    </Routes>
    </>
  )

        // return createBrowserRouter([
        //     {
        //       element: <BaseLayout />,
        //       errorElement: <div>Error happened</div>,
        //       children: [
        //         {
        //           path: '/',
        //           element: (
        //             <Home />
        //           ),
        //         },
        //         {
        //           path: '/portfolios',
        //           element: (
        //             <Portfolios />
        //           ),
        //         },
        //         {
        //           path: '/create',
        //           element: (
        //             <Create />
        //           ),
        //         }
        //       ],
        //     },
        //     {
        //       element : <BaseLayout onlyTop = {true} />,
        //       errorElement : <div>Error happend</div>,
        //       children : [
        //         {
        //           path : "/registration",
        //           element : (
        //             <Route element = "">

        //               <Registration />
        //             </Route>
        //           )
        //         },
        //         {
        //           path : "/login",
        //           element : (
        //             <LogIn />
        //           )
        //         }
        //       ]
        //     }
        //   ])
};

