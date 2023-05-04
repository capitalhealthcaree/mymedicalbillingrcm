import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Blogs = () => {
	const [items, setItems] = useState([]);
	const apiCall = async () => {
		const posts = await axios.get(
			"https://rcmbackend.vercel.app/api/v1/blog/getLastThree"
		);
		setItems(posts.data.data);
	};
	useEffect(() => {
		apiCall();
	}, []);
	return (
		<>
			<div className="blog-area pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<span className="top-title">Blogs</span>
						<h2>Our Latest Blogs</h2>
					</div>

					<div className="row justify-content-center">
						{items.map((data, i) => {
							return (
								<div className="col-lg-4 col-md-6" key={i}>
									<div className="single-blog">
										<Link href={`/blog/${data.slug}`}>
											<img src={data.image} alt={data.seoTitle[0]} />
										</Link>

										<div className="blog-content">
											<Link href={`/blog/${data.slug}`}>
												<h3>{data.seoTitle[0]}</h3>
											</Link>

											<Link href={`/blog/${data.slug}`} className="read-more">
												Read More <i className="bx bx-plus"></i>
											</Link>
										</div>
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

export default Blogs;
