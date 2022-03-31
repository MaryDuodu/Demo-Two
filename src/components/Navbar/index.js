import React from "react";
import {
    Nav,
    NavLink,    
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from "./NavbarElements";

  const Navbar = () => {
      return (
          <>
          <Nav>
              <h3 className="logo__h3" >SaMa's Designs</h3>
              <Bars  />

              <NavMenu>
                  <NavLink to="/about">
                      About
                  </NavLink>
                  <NavLink to="/events">
                      Events
                  </NavLink>
                  <NavLink to="contact">
                      Contact
                  </NavLink>
                  {/* <NavLink to="teams">
                      SignIn
                  </NavLink> */}
                  <NavLink to="blogs">
                      Blogs
                  </NavLink>
                  <NavLink to="sign-up">
                      Sign Up
                  </NavLink>
                  {/* second Nav */}
                      {/* <NavBtnLink to="/sign-in"></NavBtnLink> */}
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to="/signin">Sign In</NavBtnLink>
              </NavBtn>
          </Nav>
          </>
      )
  }
  export default Navbar;