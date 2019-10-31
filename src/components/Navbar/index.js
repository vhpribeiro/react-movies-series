import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Movies and Series - React and Redux Project</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Study Project <FontAwesomeIcon icon={faUniversity} color="white" size="1x"/>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar