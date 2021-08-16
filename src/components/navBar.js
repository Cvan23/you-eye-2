import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Form, FormControl, Button, NavItem, NavLink } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">Home</Navbar.Brand>
          {/* <FontAwesomeIcon icon={faTwitter} /> */}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                UI/UX Components!
              </Nav.Link>
            </Link>
            <NavItem className="mr-auto">
              <NavLink target="-blank" href="https://github.com/Cvan23/you-eye-2">Github Repo For This Project</NavLink>
            </NavItem>
            <NavItem className="mr-auto">
              <NavLink target="-blank" href="https://koa-script.netlify.app/">Visit My Portfolio Page!</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto">
            
          </Nav>
          
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
