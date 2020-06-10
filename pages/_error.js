import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => {

    return (
        <div>
            <h1>Oops! Somthing went wrong</h1>
            <p>Go to <Link href="/">Home</Link></p>
        </div>
    );
};

export default errorPage;