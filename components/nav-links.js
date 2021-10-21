import React from "react";
import Link from "next/link";
import SubNavToggler from "./sub-nav-toggler";
import { Link as ScrollLink } from "react-scroll";

const NavLinks = () => {
  return (
    <ul className="one-page-scroll-menu navigation-box">
       <li>
        <ScrollLink
          activeClass="current"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About Us
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="works"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          How it Works
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="products"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Products
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="service"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Features
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact Us
        </ScrollLink>
      </li>
     
      {/* <li>
        <ScrollLink
          activeClass="current"
          to="blog"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Blog
          <SubNavToggler />
        </ScrollLink>

        <ul className="sub-menu">
          <li>
            <Link href="/blog">
              <a>Blog Page</a>
            </Link>
          </li>
          <li>
            <Link href="/blog-details">
              <a>Blog Details</a>
            </Link>
          </li>
        </ul>
      </li> */}
    </ul>
  );
};

export default NavLinks;
