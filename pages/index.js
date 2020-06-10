import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => {

    const clickHandler = () => {
        Router.push('/auth');
    }

    return (
        <div>
            <h1>The main page</h1>
            <p>Go to <Link href="/auth">Auth by Link component</Link></p>
            <button onClick={clickHandler}>Go to Auth by Router component</button>
            <p><a href="/auth">go to Auth by HTML anchor - it will navigate to auth page as multipage app</a></p>

        </div>
    );
};

export default indexPage;