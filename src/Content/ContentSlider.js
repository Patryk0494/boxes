import React from 'react';
import './content.css';
import Box from '../Box/Box';


const boxData = [
    {
        heading: "Heading",
        paragraph: "Lorem ipsum dolor sit amet.",
        img: "./assets/logo-wordpress.svg"
    },
    {
        heading: "Heading",
        paragraph: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod bibendum laoreet. Lorem ipsum dolor sit amet"
    },
    {
        heading: "Ultra Mega Super Long Heading",
        paragraph: "Lorem ipsum dolor sit amet."
    },
];

let data = boxData;

class ContentSlider extends React.Component {

    render(){
        return(
            <section className="content content--blueBackround">
                <div className="container">
                    <div className="arrow" onClick={this.indexDecreas}><img src="./assets/arrow.svg" alt="arrow left" /></div>
                    <div className="content__interior  content__interior--headingWhite">
                        <h1>Heading</h1>
                        <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit.</p>
                        <div className="content__interior__wrapper">
                            <Box boxData={data}></Box>
                        </div>
                    </div> 
                    <div className="arrow" onClick={this.indexIncreas}><img className="arrow--right" src="./assets/arrow.svg" alt="arrow right" /></div>
                </div>
            </section>
        )    
}}

export default ContentSlider;