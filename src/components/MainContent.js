import React, { Component } from 'react'
import '../App.css'

function MainContent(props) {
    let { data, index, handlePrevious, handleNext } = props
    return (
        <div className='container'>
            <div className="number-position">{`${data[index].id}/25`}</div>
            <h1>{`${data[index].name.first} ${data[index].name.last}`}</h1>
            <div>
                <h3>From: {`${data[index].city}, ${data[index].country}`}</h3>
                <h3>Job Title: {data[index].title}</h3>
                <h3>Employer: {data[index].employer}</h3>
                <h3>Favorite Movies: </h3>
                <ol>
                    <li>{data[index].favoritesMovies[0]} </li>
                    <li>{data[index].favoritesMovies[1]}</li>
                    <li>{data[index].favoritesMovies[2]}</li>
                </ol>

            </div>
            <div className="button-section">
                <button className="button-sides" onClick={handlePrevious}>{`< Previous`}</button>
                <button className="button-center">Edit</button>
                <button className="button-center">Delete</button>
                <button className="button-center">New</button>
                <button className="button-sides" onClick={handleNext}>{`Next >`}</button>
            </div>

        </div>
    )
}


export default MainContent;