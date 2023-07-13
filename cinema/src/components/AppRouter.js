import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Id from "../pages/film/[id]";
import MainPage from "../pages/MainPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path='/' element={<MainPage/>}/>
            <Route exact path='/film/:id' element={<Id/>}/>
            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>

    );
};


export default AppRouter;