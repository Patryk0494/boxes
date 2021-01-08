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

class ContentSlider extends React.Component {
    
    render(){
        return(
            <section className="content">
                <div className="container">
                    <div className="content__interior">
                        <h1>Heading</h1>
                        <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit.</p>
                        <h2>heading</h2>
                        <div className="content__interior__wrapper">
                            <Box boxData={boxData}></Box>
                        </div>
                    </div>
                </div>
            </section>
        )    
}}

export default ContentSlider;