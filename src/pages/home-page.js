import React from 'react';
import PostListing from '../modules/postListing/PostListing.js';


export default function HomePage() {

    return (
        <div>
            <h1>Hot Posts</h1>
            <div className='postContainer'>
                <PostListing />
            </div>
        </div>
    );
}