import React from "react";
import Card from "../Card/Card";
import './List.css'
function list({ movies }) {
    return (
        <div className="MovieList">
            {movies.map(el => <Card key={el.id} id={el.id} title={el.title} URLimage={el.URLimage} desc={el.desc} date={el.date} duration={el.duration} rating={el.rating} />)}</div>
    );
}
export default list;