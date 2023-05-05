import React from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import Link from "next/link";
import BlogSidebar from "../../components/BlogSidebar";
import axios from "axios";

const BlogLeftSidebar = ({ item }) => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blogs"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        imgClass="bg-3"
      />

      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="blog-left-sidebar">
                <BlogSidebar />
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="row">
                  {item.map((data, i) => {
                    return (
                      <div className="col-lg-6 col-md-6" key={i}>
                        <div className="single-blog">
                          <Link href={`/blog${data.slug}`}>
                            <img src={data.image} alt={data.seoTitle[0]} />
                          </Link>

                          <div className="blog-content">
                            <Link href={`/blog${data.slug}`}>
                              <h3>{data.seoTitle[0]} </h3>
                            </Link>

                            <Link
                              href={`/blog${data.slug}`}
                              className="read-more"
                            >
                              Read More <i className="bx bx-plus"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="col-lg-12">
                    <div className="page-navigation-area">
                      <nav aria-label="Page navigation example text-center">
                        <ul className="pagination">
                          <li className="page-item">
                            <a
                              className="page-link page-links"
                              // href="#"
                            >
                              <i className="bx bx-chevrons-left"></i>
                            </a>
                          </li>
                          <li className="page-item active">
                            <a
                              className="page-link"
                              //  href="#"
                            >
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              // href="#"
                            >
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              // href="#"
                            >
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              //  href="#"
                            >
                              <i className="bx bx-chevrons-right"></i>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogLeftSidebar;

export const getServerSideProps = async () => {
  const posts = await axios.get(
    "https://rcmbackend.vercel.app/api/v1/blog/getBlogsByPagination?page=1&limit=8"
  );
  const data = await posts.data.data;
  // const totalPage = await posts.data.totalPages;
  return {
    props: {
      item: data,
      // totalPage,
    },
  };
};
