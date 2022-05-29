import React, { useState } from 'react'
//import { uuid } from 'uuidv4'

import './Add.css'

function Add({ AddMovie }) {
    const [changeStyle, setChangeStyle] = useState(true);
    const onClickAdd = () => {
        setChangeStyle(!changeStyle);
    };
    const [title, setTitle] = useState('');
    const getTitle = (e) => {
        setTitle(e.target.value);
    };
    const [desc, setDesc] = useState('');
    const getDesc = (e) => {
        setDesc(e.target.value);
    };
    const [rating, setRating] = useState('');
    const getRating = (e) => {
        setRating(e.target.value);
    };
    const [Image, setImage] = useState('');
    const getImage = (e) => {
        setImage(e.target.value);
    };  
    const [trailer, setTrailer] = useState('');
    const getTrailer = (e) => {
        setTrailer(e.target.value);
    };
    const [date, setDate] = useState('');
    const getDate = (e) => {
        setDate(e.target.value);
    };




    const handleClick = () => {
        AddMovie({ title: title, Desc: desc, rating: rating, URLimage: Image ,trailer:trailer,date:date  });
        setChangeStyle(!changeStyle);
    };
    return (
        <div>
            <button className='btnstyle' onClick={onClickAdd}>Add Movie</button>
            <div className='ConatinerAdd' style={{ display: changeStyle ? "none" : "block" }}>
                <div className="contentAdd">
                    <div> <span className="closer" onClick={onClickAdd}>x</span></div>
                    <h3 style={{ textAlign: 'center', color: 'violet' }}>add movie</h3>
                    <div className="InputContentAdd">
                        <input type="text" placeholder='title' onChange={getTitle} />
                        <input type="text" placeholder='desc' onChange={getDesc} />
                        <input type="text" placeholder='date' onChange={getDate} />
                        <input type="text" placeholder='rating' onChange={getRating} />
                        <input type="text" placeholder='Image' onChange={getImage} />
                        <input type="text" placeholder='Trailer' onChange={getTrailer} />
                    </div>
                    <button onClick={handleClick}>Add</button>  
                </div>
            </div>
        </div>
    );
}

export default Add;

