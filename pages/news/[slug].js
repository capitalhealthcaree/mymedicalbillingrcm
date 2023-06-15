import React from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import BlogSidebar from "../../components/BlogSidebar";
import axios from "axios";

const BlogGrid = ({ items }) => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="News Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News Details"
        imgClass="bg-3"
      />

      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src={items.image} alt="image" />
                </div>

                <div className="article-content">
                  <div dangerouslySetInnerHTML={{ __html: items.title }}></div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="blog-right-sidebar">
                <BlogSidebar newsFlag={true} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogGrid;

export const getServerSideProps = async ({ query: { slug } }) => {
  const posts = await axios.get(
    "https://rcmbackend.vercel.app/api/v1/news/" + slug + "/"
  );
  const datas = await posts.data.data;
  return {
    props: {
      items: datas,
    },
  };
};
