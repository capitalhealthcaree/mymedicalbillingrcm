import React, { useState, useEffect } from "react";
import Link from "next/link";
import AppointmentForm from "../../components/Home/AppointmentForm";

import api from "../../utils/api";

const BlogSidebar = ({ newsFlag, leftSideDemoForm }) => {
  const endURL = newsFlag ? "/news/popularNews" : "/blog/popularBlogs";

  const [items, setItems] = useState([]);

  const apiCall = async () => {
    const posts = await api.get(`${endURL}`);
    setItems(posts.data.data);
  };
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <>
      <div className="widget-area" id="secondary">
        <AppointmentForm leftSideDemoForm={leftSideDemoForm} />

        <div className="widget widget-peru-posts-thumb">
          <h3 className="widget-title">
            Popular {newsFlag ? "News" : "Blogs"}
          </h3>
          <div className="post-wrap">
            {items.map((data, i) => {
              return (
                <div className="item" key={i}>
                  <Link
                    href={`${newsFlag ? "/news" : "/blog"}${data.slug}`}
                    className="thumb"
                  >
                    <img src={data.image} alt={data.seoTitle[0]} />
                  </Link>
                  <div className="info">
                    <h4 className="title usmall">
                      <Link
                        href={`${newsFlag ? "/news" : "/blog"}${data.slug}`}
                      >
                        {data.seoTitle[0]}
                      </Link>
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
