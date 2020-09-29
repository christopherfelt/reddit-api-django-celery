import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
    songs: [],
    error: null,
    loading: true
};

let api = axios.create({
    baseUrl: "http://127.0.0.1:1337/api/v1/reddit/",
    headers: {
        "Content-type": "application/json"
    },
});

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getSongs(){
        
        try {
            let res = await axios.get("http://127.0.0.1:1337/api/v1/reddit/");
            console.log("made it to api call", res.data)
            dispatch({
                type: "GET_SONGS",
                payload: res.data
            })
            
        } catch (error) {
            dispatch({
                type: "SONG_ERROR",
                payload: error,
            })
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                songs: state.songs,
                error: state.error,
                loading: state.loading,
                getSongs,
            }}
            >
                {children}
            </GlobalContext.Provider>
    )
}