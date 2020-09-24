import { Button } from '@material-ui/core';
import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className='searchPage'> 
            {/* <h1> I am the search page!</h1>        */}
            <div className='searchPage__info'>
                <p>62 stays - 26 August to 30 august - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>Cancellation Flexibility</Button> 
                <Button variant='outlined'>Type of Place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and Beds</Button>
                <Button variant='outlined'>More filters</Button>    
            </div>
            <SearchResult 
                img='https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                location='Private room in Brisbane CBD'
                title='Stay at this private room'
                description='1 guest 1 bedroom 1.5 shaed bathrooms wifi kitchen free parking washing machine'
                star={4.73}
                price='$30/night'
                total='$180 total'
            />
            <SearchResult 
                img='https://images.unsplash.com/photo-1570054417025-2fa787c4c8f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                location='Private room in Brisbane CBD'
                title='Stay at this spacious room'
                description='1 guest 1 bedroom 1.5 shaed bathrooms wifi kitchen free parking washing machine'
                star={4.50}
                price='$40/night'
                total='$240 total'
            />
             <SearchResult 
                img='https://media.architecturaldigest.com/photos/59d3deb44ed72079cea3bc3a/master/w_1024%2Cc_limit/small-bedroom-ideas-03.jpeg'
                location='Private room in Brisbane CBD'
                title='Stay at this spacious room'
                description='1 guest 1 bedroom 1.5 shaed bathrooms wifi kitchen free parking washing machine'
                star={4.50}
                price='$40/night'
                total='$240 total'
            />
             <SearchResult 
                img='https://media.architecturaldigest.com/photos/59c9403c839a9e7c5d248e33/master/w_1024%2Cc_limit/catherine-kwong-san-francisco-home-10.jpg'
                location='Private room in Brisbane CBD'
                title='Stay at this spacious room'
                description='1 guest 1 bedroom 1.5 shaed bathrooms wifi kitchen free parking washing machine'
                star={4.50}
                price='$40/night'
                total='$240 total'
            />
        </div>
    )
}

export default SearchPage 