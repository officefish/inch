import React, { useState, useEffect } from 'react'
import UserService from "../../services/user.service"
import { connect } from "react-redux";

const Home = props => {

    const { host, port } = props
    const [content, setContent] = useState("");

    useEffect(() => {
        const service = new UserService(host, port)
        service.getPublicContent().then(
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

const mapStateToProps = state => {
    const { host, port } = state.connect
    return {
      host, 
      port
    };
  }

export default connect(mapStateToProps)(Home)