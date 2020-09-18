import React, { useContext, useEffect } from 'react'

import { GlobalContext } from "../../context/GlobalState"

export const Home = () => {

    const { songs, getSongs } = useContext(GlobalContext);

    useEffect(() => {
        getSongs();
    }, []);

    return (
        <div>
            <h1>Home is live</h1>
            {songs.map((song) => (
                <p>hello</p>
            ))}
        </div>
    )
}
