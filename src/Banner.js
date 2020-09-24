import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Banner.css';
import Search from './Search';

function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    const history = useHistory();

    return (
        <div className='banner'>
            <div className='banner__search'>
                {/* {showSearch &&  */}
                    {/* <h1><Search /></h1>} */}
                
                <Button 
                    variant='outlined' 
                    className='banner__searchButton'
                    onClick={()=>setShowSearch(!showSearch)}
                    >
                    {showSearch? 'Hide' : "Search Dates"}
                </Button>
                {showSearch && <Search />}
            </div>
            <div className='banner__info'>
                <h1>Get out and have fun!</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden  gems in you.
                </h5>
                <Button
                    onClick={() => history.push('/search')}
                    variant='outlined'>Explore Nearby
                </Button>
            </div>       
        </div>
  
    )
}

export default Banner
