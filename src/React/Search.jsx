import { ImageRounded } from "@material-ui/icons";

import React from 'react';

const Search = (props) =>{
    const img=`https://source.unsplash.com/200*200/?${props.name}`;
    return(
        <>
            <img src={img} alt="Search"/>
        </>
    )
}
export default Search;