import React, { useEffect } from 'react';
import PostListing from '../postListing/PostListing.js';
import { selectHomePageFeed, selectIsLoading, selectHasError, selectError, loadHomePageFeed } from './homePageSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';



export default function HomePage() {
    const feed = useSelector(selectHomePageFeed);
    const isLoading = useSelector(selectIsLoading);
    const hasError = useSelector(selectHasError);
    const error = useSelector(selectError);
    const dispatch = useDispatch;
    const [searchParams, setSearchParams] = useSearchParams();

    //load the relevant feed when the page loads, the feed changes, or the search parameters change
    useEffect(() => {
        const check = searchParams.size;
        check ? dispatch(loadHomePageFeed(searchParams)) : dispatch(loadHomePageFeed(''));
        /*if(searchParams.size !== 0) {
            dispatch(loadHomePageFeed(searchParams));
        } else {
            dispatch(loadHomePageFeed(''))
        };*/
    }, [feed, searchParams]);

    //scroll to the top of the page when the feed changes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [feed]); 

    //tell the page what to load depending on what is returned by reddit api
    if(isLoading) {
        return (
            <div>
                <h1>Hot Posts</h1>
                <p>Loading...</p>
            </div>
        );
    }

    if(hasError) {
        return(
            <div>
                <p role="alert">{error}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Hot Posts</h1>
            <div className='postContainer'>
                <PostListing />
            </div>
        </div>
    );
}