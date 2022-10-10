import React from 'react';
import { Outlet } from 'react-router-dom';
import NaveBar from '../NaveBar/NaveBar';

const RootComponent = () => {
    return (
        <div>
            <NaveBar></NaveBar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootComponent;