import  Card from './Card';
import React from 'react';
import Banner from './Banner';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            {/* <h1>Home component</h1> */}
            <Banner />

            <div className='home__section'>
                <Card 
                    src='https://www.mcdonaldjoneshomes.com.au/sites/default/files/styles/carousel_image/public/Ellerston-Facade-Leura-McDonald-Jones-Homes_0.jpg?itok=zdV4uk2r'
                    title='Unique stays'
                    description='This is a unique stays ssssssssssssssssssssssssfssssssssssssf'
                />
                <Card 
                    src='https://www.mcdonaldjoneshomes.com.au/sites/default/files/styles/carousel_image/public/avondale-34-evoke-facade-v2.jpg?itok=qE1kG70M'
                    title='Amamzing stay'
                    description='this is a great vacation house  ....llllllllll......ssfs'
                />
                <Card 
                    src='https://www.mcdonaldjoneshomes.com.au/sites/default/files/styles/carousel_image/public/castleton-34-facade-extend-light.jpg?itok=d9hCSfH1'
                    title='Entire villa'
                    description='Cozy and classic . love love love love love'
                />
            </div> 
            
            <div className  ='home__section'>
                <Card 
                    src='https://images.unsplash.com/photo-1560448205-17d3a46c84de?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                    title='My staycation type home'
                    description='Description Description Description Description Description'
                    price='$400.00'
                />
                <Card 
                    src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                    title='Great livingn room'
                    description='DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription'
                    price='$350.00'
                />
                <Card 
                    src='https://images.unsplash.com/photo-1560449752-8b6023e2ab5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
                    title='The house of dream'
                    description='DescriptionDescriptionDescriptionDescriptionDescription'
                    price='$150.00'
                />
            </div>            
        </div>
    )
}

export default Home;
