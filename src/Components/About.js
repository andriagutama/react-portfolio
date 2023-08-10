import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

class About extends Component {
    render() {
        if (!this.props.data) return null;

		const name = this.props.data.name;
        const profilepic = "images/" + this.props.data.image;
        const bio = this.props.data.bio;
        const city = this.props.data.address.city;
        const province = this.props.data.address.province;
        const zip = this.props.data.address.zip;
		const country = this.props.data.address.country;
        const phone = this.props.data.phone;
        const email = this.props.data.email;
        const resumeDownload = this.props.data.resumedownload;

		return (
			<section id="about">
				<Fade duration={1000}>
					<div className="row">
						<div className="three columns">
							<img className="profile-pic" src={profilepic} alt="Profile Pic" />
						</div>
						<div className="nine columns main-col">
							<h2>About Me</h2>

							<p>{bio}</p>
							<div className="row">
								<div className="columns contact-detail">
									<h2>Contact Detail</h2>
									<span>{name}</span>
									<br />
									<span>{city}, {province} {zip}</span>
									<br />
									<span>{phone}</span>
									<br />
									<span>{email}</span>
								</div>
								<div className="columns download">
									<p>
										<a href={resumeDownload} className="button">
											<i className="fa fa-download"></i> Download Resume
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</Fade>
			</section>
		);
    }
}

export default About;