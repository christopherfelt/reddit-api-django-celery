import React from 'react'

export const Song = ({ song }) => {
    return (
        <div>
            <div class="card">
                <img class="card-img-top" src="//placehold.it/100x100/" alt=""></img>
                <div class="card-body">
                    <h4 class="card-title"> {song.name} </h4>
                    <p class="card-text"> {song.id} </p>
                </div>
            </div>
        </div>
    )
}
