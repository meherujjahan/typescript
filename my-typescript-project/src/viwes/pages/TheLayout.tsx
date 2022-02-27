import React from 'react';
import Footer from "./common/Footer";
import Main from "./common/Main";
import Header from "./common/Header";

const TheLayout = () => {
    return (
        <div>
           <div><Header /></div>
           <div><Main /> </div>
           <div><Footer /></div>
        </div>
    );
};

export default TheLayout;