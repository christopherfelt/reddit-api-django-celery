import React, { useContext, useEffect } from 'react'

import { GlobalContext } from "../../context/GlobalState"
import { Song } from "../song"

export const Home = () => {

    const { songs, getSongs } = useContext(GlobalContext);

    useEffect(() => {
        getSongs();
    }, []);


    return (
        <div>

            <div className="container" >
                <div class="row">
                    <div className="col d-flex">
                        {songs.map((song) => (
                            <Song key={song.id} song={song} />
                        ))}
                    </div>
                </div>
            </div>


           
        </div>
    )
}
