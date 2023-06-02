import React from "react";
import vg from "../assets/2.webp";
import {
	AiFillGoogleCircle,
	AiFillAmazonCircle,
	AiFillYoutube,
	AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
	return (
		<>
			<div className="home" id="home">
				<main>
					<h1>Project-Alpha</h1>
					<p>Solution provider</p>
				</main>
			</div>

			<div className="home2">
				<img src={vg} alt="Graphics" />

				<div>
					<p>
						Providing solutions to your technical problems and challenges you
						face. We are a leading organization of tech enthusiests whom you can
						rely upon.
					</p>
				</div>
			</div>

			<div className="home3" id="about">
				<div>
					<h1>Who are we?</h1>
					<p>
						Lorem ipsum blah blah Lorem ipsum blah blahLorem ipsum blah
						blahLorem ipsum blah blahLorem ipsum blah blahLorem ipsum blah
						blahLorem ipsum blah blahLorem ipsum blah blahLorem ipsum blah
						blahLorem ipsum blah blahLorem ipsum blah blahLorem ipsum blah
						blahLorem ipsum blah blahLorem ipsum blah blahLorem ipsum blah blah
					</p>
				</div>
			</div>

			<div className="home4" id="brands">
				<div>
					<h1>Brands</h1>
					<article>
						<div
							style={{
								animationDelay: "0.3s",
							}}>
							<AiFillGoogleCircle />
							<p>Google</p>
						</div>
						<div
							style={{
								animationDelay: "0.5s",
							}}>
							<AiFillAmazonCircle />
							<p>Amazon</p>
						</div>
						<div
							style={{
								animationDelay: "0.7s",
							}}>
							<AiFillYoutube />
							<p>Youtube</p>
						</div>
						<div
							style={{
								animationDelay: "0.1s",
							}}>
							<AiFillInstagram />
							<p>Instagram</p>
						</div>
					</article>
				</div>
			</div>
		</>
	);
};

export default Home;
