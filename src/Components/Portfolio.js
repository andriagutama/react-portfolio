import React, { Component } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Zmage from "react-zmage";

let id = 0;

class Portfolio extends Component {
    render() {
        if (!this.props.data) return null;

        const projects = this.props.data.projects.map(function(projects) {
            let project_image = "images/portfolio/" + projects.image;

            return (
                <div key={id++} className="columns porfolio-item">
                    <div className="item-wrap">
                        <Zmage alt={projects.title} src={project_image} />
                        <div style={{ textAlign : "center" }}>{projects.title}</div>
                    </div>
                </div>
            );
        });

        return (
            <section id="portfolio">
                <Fade left duration={1000} distance="40px">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check out some of my works</h1>
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                {projects}
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default Portfolio;