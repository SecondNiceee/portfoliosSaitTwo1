import {  Route, Routes } from 'react-router-dom';
import { BaseLayout } from './layout';
import { ProtectedRoute } from '../shared/models';
import { LazyRoute } from '../shared/models/LazyRoute';
import { lazy } from 'react';


const Home = lazy(() => import('../pages/Home').then(module => ({ default: module.Home })));
const Portfolios = lazy(() => import('../pages/Portfolios').then(module => ({ default: module.Portfolios })));
const Create = lazy(() => import('../pages/Create').then(module => ({ default: module.Create })));
const Edit = lazy(() => import('../pages/Edit').then(module => ({ default: module.Edit })));
const ClickMe = lazy(() => import('../pages/ClickMe').then(module => ({ default: module.ClickMe })));
const Registration = lazy(() => import('../pages/Form').then(module => ({ default: module.Registration })));
const LogIn = lazy(() => import('../pages/Form').then(module => ({ default: module.LogIn })));


export const AppRouter = () => {

  return (
    <>
    <Routes>
      <Route element = {<BaseLayout/>} >

        <Route element = {<LazyRoute Comp = {<Home/>} />} path='/' />

        <Route element = {<LazyRoute Comp = {<Portfolios/>}  /> } path='/portfolios' />

        <Route element = {<LazyRoute Comp = {<Edit/>}  /> } path='/edit/:id' />

        <Route element = {<LazyRoute Comp = {<Create/>}  /> } path='/create' />

        <Route element = {<LazyRoute Comp = {<ClickMe/>}  /> } path='/clickme' />

        <Route element = {<ProtectedRoute isUser = {false}  />}>

          <Route element = {<LazyRoute Comp = {<Registration/>}  /> } path='/registration' />

          <Route element = {<LazyRoute Comp = {<LogIn/>}  /> } path='/login' />

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

