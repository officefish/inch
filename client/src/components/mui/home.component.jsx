import React, { useState, useEffect } from 'react'
import UserService from "../../services/user.service"


const Home = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(
            response => {
                setContent(content)
            }, 
            error => {
                const errorData = (error.response && error.response.data) 
                || error.message 
                || error.toString()
                setContent(errorData)
            } 
        )
    })

    return <div>
        <header className="jumbotron">
            <h3>{content}</h3>
        </header>
    </div>
}
export default Home