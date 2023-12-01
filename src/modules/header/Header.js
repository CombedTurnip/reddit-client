import React from 'react';
import { SearchBar } from '../searchBar/SearchBar.js'

export function Header() {
    return(
        <div>
            <header>
                <div>
                    <h1>What'sHotOnReddit?</h1>
                </div>
                <div>
                    <SearchBar />
                </div>
            </header>
        </div>
    );
};

