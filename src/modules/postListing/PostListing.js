import React from "react";

export default function Post() {
    return (
        <div>
            <h2 className="postTitle">Post Title</h2>
            {/*temporary code - the following will need to be their own modules to allow all the stuff to happen*/}
            <div>Media/Post Body</div>
            <div>Vote Count</div>
            <div>u/user</div>
            <div>r/subreddit</div>
        </div>
    );
}