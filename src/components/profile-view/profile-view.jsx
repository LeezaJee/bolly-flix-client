import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./profile-view.scss";
import axios from "axios";
import UserInfo from "./user-info";

export function ProfileView ({ movies, onUpdatedUserInfo}) {
    
    const [ user, setUser ] = useState({ })

    const favoriteMovieList = movies.filter({movies} => { });

    const getUser = () => {}

    const handleSubmit = (e) => {}

    const removeFav = (id) => {}

    const handleUpdate = (e) => {};

    useEffect(() => {
    }, [])

return (
    <div>
        <UserInfo name={user.Username} email={user.Email}/>
    <div>
    <h2>Favorite Movies</h2>
    {favoriteMovieList.map((movies) => {
        return (
            <div key={movies._id}>
            <img src={movies.ImagePath} />
            <Link to={`/movies/${movies._id}`}>
            <h4>{movies.Title}</h4>
            </Link>
            <button variant="secondary" onClick={() => removeFav(movies._id)}>Remove from List</button>
            </div>
        )
    })
}
</div>

<form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
<h2>Want to change some info?</h2>
<label>Username:</label>
<input type="text" name="Username" defaultValue={user.Username} onChange={e => handleUpdate(e)} />

<label>Password</label>
<input type="password" name="password" defaultValue={user.Password} onChange={e => handleUpdate(e)} />

<label>Email address</label>
<input type="email" name="email" defaultValue={user.Email} onChange={e => handleUpdate(e)} />

</form>










}