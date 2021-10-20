import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLinks from "./nav-links";
import logoImage from "../assets/images/logo-1-2.png";

const HeaderTwo = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    mobileMenu();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      mobileMenu();
    };
  });

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  const mobileMenu = () => {
    let subMenuColse = document.querySelectorAll(".sub-nav-toggler");
    let menuToggler = document.querySelector(".menu-toggler");
    let menuBox = document.querySelector(".main-navigation");
    menuToggler.addEventListener("click", function (e) {
      e.preventDefault();
      menuBox.classList.toggle("active");
    });
    subMenuColse.forEach((subMenuColseBtn) => {
      subMenuColseBtn.addEventListener("click", function (event) {
        let subMenu =
          event.currentTarget.parentElement.parentElement.children[1];
        event.preventDefault();
        subMenu.classList.toggle("active");
      });
    });
  };

  return (
    <header className="site-header header-one home-page-two">
      <nav
        className={`navbar navbar-expand-lg navbar-light header-navigation stricky  ${
          sticky === true ? "stricky-fixed" : " "
        }`}
      >
        <div className="container clearfix">
          <div className="logo-box clearfix">
            <Link href="/">
              <a className="navbar-brand">
                <img src={logoImage} alt="Awesome Image" />
              </a>
            </Link>
            <button
              className="menu-toggler"
              data-target=".header-one .main-navigation"
            >
              <span className="fa fa-bars"></span>
            </button>
          </div>

          <div className="main-navigation">
            <NavLinks />
          </div>
          <div className="right-side-box">
            <a href="#" className="header-btn">
              Login
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTwo;
