import Isotope from "isotope-layout";
import React, { useEffect, useRef, useState } from "react";
import { Tooltip, Whisper } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import m1 from "../../img/m1.jpg";
import m2 from "../../img/m2.jpg";
import m3 from "../../img/m3.jpg";
import p1 from "../../img/p1.png";
import "./Portfolio.scss";

const Portfolio = () => {
	const isotope = useRef();
	const [filterKey, setFilterKey] = useState("*");
	useEffect(() => {
		isotope.current = new Isotope(".portfolio-container", {
			itemSelector: ".portfolio-item",
			layoutMode: "fitRows",
		});
		return () => isotope.current.destroy();
	}, []);

	useEffect(() => {
		filterKey === "*"
			? isotope.current.arrange({ filter: `*` })
			: isotope.current.arrange({ filter: `.${filterKey}` });
	}, [filterKey]);

	const handleFilterKeyChange = (key) => () => setFilterKey(key);

	return (
		<div className="portfolio-area" id="portfolio">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="portfolio-title">Portfolio</div>
					</div>
					<div className="col-lg-12">
						<ul className="portfolio-btns">
							<li onClick={handleFilterKeyChange("*")}>
								<button className={filterKey === "*" ? "active" : ""}>
									Websites
								</button>
							</li>
							<li onClick={handleFilterKeyChange("gr")}>
								<button className={filterKey === "gr" ? "active" : ""}>
									Graphics
								</button>
							</li>
							<li onClick={handleFilterKeyChange("ui")}>
								<button className={filterKey === "ui" ? "active" : ""}>
									UI / UX
								</button>
							</li>
						</ul>
						<div className="portfolio-container">
							<div className="portfolio-item gr">
								<Whisper
									followCursor
									placement="bottomStart"
									speaker={
										<Tooltip className="Tooltip-bg">
											<div className="title">Reflexion</div>
											<span className="desc">Art Direction</span>
										</Tooltip>
									}
								>
									<div
										className="portfolio-img"
										data-bs-toggle="modal"
										data-bs-target="#modal_open"
									>
										<img src={p1} alt="" />
									</div>
								</Whisper>
							</div>
							<div className="portfolio-item ui">
								<Whisper
									followCursor
									placement="bottomStart"
									speaker={
										<Tooltip className="Tooltip-bg">
											<div className="title">Argentina</div>
											<span className="desc">Web Design</span>
										</Tooltip>
									}
								>
									<div
										className="portfolio-img"
										data-bs-toggle="modal"
										data-bs-target="#modal_open"
									>
										<img src={p1} alt="" />
									</div>
								</Whisper>
							</div>
							<div className="portfolio-item gr ">
								<Whisper
									followCursor
									placement="bottomStart"
									speaker={
										<Tooltip className="Tooltip-bg">
											<div className="title">Nike Dunes</div>
											<span className="desc">Photography</span>
										</Tooltip>
									}
								>
									<div
										className="portfolio-img"
										data-bs-toggle="modal"
										data-bs-target="#modal_open"
									>
										<img src={p1} alt="" />
									</div>
								</Whisper>
							</div>
							<div className="portfolio-item ui">
								<Whisper
									followCursor
									placement="bottomStart"
									speaker={
										<Tooltip className="Tooltip-bg">
											<div className="title">Val Sander</div>
											<span className="desc">Branding</span>
										</Tooltip>
									}
								>
									<div
										className="portfolio-img"
										data-bs-toggle="modal"
										data-bs-target="#modal_open"
									>
										<img src={p1} alt="" />
									</div>
								</Whisper>
							</div>
							<div className="portfolio-item ui">
								<Whisper
									followCursor
									placement="bottomStart"
									speaker={
										<Tooltip className="Tooltip-bg">
											<div className="title">Middletown Cafe</div>
											<span className="desc">Branding</span>
										</Tooltip>
									}
								>
									<div
										className="portfolio-img"
										data-bs-toggle="modal"
										data-bs-target="#modal_open"
									>
										<img src={p1} alt="" />
									</div>
								</Whisper>
							</div>
							<div className="portfolio-item gr">
								<Whisper
									followCursor
									placement="bottomStart"
									speaker={
										<Tooltip className="Tooltip-bg">
											<div className="title">Manifesto</div>
											<span className="desc">Branding</span>
										</Tooltip>
									}
								>
									<div
										className="portfolio-img"
										data-bs-toggle="modal"
										data-bs-target="#modal_open"
									>
										<img src={p1} alt="" />
									</div>
								</Whisper>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade"
				id="modal_open"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
					<div className="modal-content">
						<div className="modal-body">
							<div className="protfolio-modal-content row row-gap">
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
								<div className="col-lg-12">
									<img src={m1} alt="" />
								</div>
								<div className="col-lg-12">
									<div className="h3">Brand Identity</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing
										elit. Metus dis posuere amet tincidunt commodo,
										velit. Ipsum, hac nibh fermentum nisi, platea
										condimentum cursus velit dui. Massa volutpat odio
										facilisis purus sit elementum. Non, sed velit
										dictum quam. Id risus pharetra est, at rhoncus,
										nec ullamcorper tincidunt. Id aliquet duis
										sollicitudin diam, elit sit. Et nisi in libero
										facilisis sed est. Elit curabitur amet risus
										bibendum. Posuere et eget orci, tempor enim.
									</p>
									<br />
									<p>
										Hac nibh fermentum nisi, platea condimentum cursus
										velit dui. Massa volutpat odio facilisis purus sit
										elementum. Non, sed velit dictum quam. Id risus
										pharetra est, at rhoncus, nec ullamcorper
										tincidunt. Id aliquet duis sollicitudin diam, elit
										sit.
									</p>
									<br />
								</div>
								<div className="col-md-6">
									<img src={m2} alt="" />
								</div>
								<div className="col-md-6">
									<img src={m3} alt="" />
								</div>
								<div className="col-lg-12">
									<div className="h3">Our Capabilities</div>
									<p>
										Massa volutpat odio facilisis purus sit elementum.
										Non, sed velit dictum quam. Id risus pharetra est,
										at rhoncus, nec ullamcorper tincidunt. Id aliquet
										duis sollicitudin diam.
									</p>
									<ul>
										<li>
											Non saed velit dictum quam risus pharetra esta.
										</li>
										<li>
											Id risus pharetra est, at rhoncus, nec
											ullamcorper tincidunt.
										</li>
										<li>
											Hac nibh fermentum nisi, platea condimentum
											cursus.
										</li>
										<li>
											Massa volutpat odio facilisis purus sit
											elementum.
										</li>
										<li>Elit curabitur amet risus bibendum.</li>
									</ul>
								</div>
								<div className="col-lg-12">
									<div className="h3">Our approach</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing
										elit. Consequat suspendisse aenean tellus augue
										morbi risus. Sit morbi vitae morbi sed urna sed
										purus. Orci facilisi eros sed pellentesque. Risus
										id sed tortor sed scelerisque. Vestibulum elit
										elementum, magna id viverra non, velit. Pretium,
										eros, porttitor fusce auctor vitae id. Phasellus
										scelerisque nibh eleifend vel enim mauris purus.
										Rutrum vel sem adipiscing nisi vulputate molestie
										scelerisque molestie ultrices. Eu, fusce vulputate
										diam interdum morbi ac a.
									</p>
								</div>
								<div className="col-lg-12">
									<div className="h3">Our Work Process</div>
									<ul>
										<li>
											Non saed velit dictum quam risus pharetra esta.
										</li>
										<li>
											Id risus pharetra est, at rhoncus, nec
											ullamcorper tincidunt.
										</li>
										<li>
											Hac nibh fermentum nisi, platea condimentum
											cursus.
										</li>
										<li>
											Massa volutpat odio facilisis purus sit
											elementum.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
