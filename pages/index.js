import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header-one";
import BannerOne from "../components/banner-one";
import FunFact from "../components/funfact";
import Services from "../components/services";
import FeatureOne from "../components/feature-one";
import FeatureTwo from "../components/feature-two";
import Pricing from "../components/pricing";
import Testimonials from "../components/testimonials";
import Brands from "../components/brands";
import FAQ from "../components/faq";
import BlogHome from "../components/blog-home";
import Subscribe from "../components/subscribe";
import Footer from "../components/footer";
import CommentForm from "../components/comment-form";
import Services2 from "../components/services2";
import Works from "../components/works";
import Contact from "../components/contactus/contact";

const Home = () => {
  return (
    <Layout pageTitle="E-Cerifyme ">
      <HeaderOne />
      <BannerOne />
      {/* <FunFact /> */}
      
      {/* <FeatureTwo /> */}
      <FeatureOne />
      <Works/>
      <Services2 />
     
      {/* <Pricing /> */}
      {/* <Testimonials />
      <Brands />
      <FAQ /> */}
      {/* <BlogHome /> */}
      {/* <Subscribe /> */}

      <Services />
      <Contact/>
      <Footer />
    </Layout>
  );
};

export default Home;
