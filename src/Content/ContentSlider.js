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

let width = Screen.availWidth;

class ContentSlider extends React.Component {
    constructor(props){
        super(props);
        this.state = {data:boxData}
    }

    

    // changeSize(){
    //     if (width < 786) {
    //         this.setState({data: boxData.splice(1,2)})
    //     } else {
    //         this.setState({data: boxData})
    //     }
    // }    

    // componentDidMount(){
    //     window.addEventListener('resize',this.changeSize);
    // }
    // componentWillUnmount(){
    //     window.removeEventListener('resize',this.changeSize);
    // }

    render(){
        // let {data} = this.state
        return(
            <section className="content content--blueBackround">
                <div className="container">
                    <div className="arrow"><img src="./assets/arrow.svg" alt="arrow left" /></div>
                    <div className="content__interior  content__interior--headingWhite">
                        <h1>Heading</h1>
                        <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit.</p>
                        <div className="content__interior__wrapper">
                            <Box boxData={boxData}></Box>
                        </div>
                    </div> 
                    <div className="arrow"><img className="arrow--right" src="./assets/arrow.svg" alt="arrow right" /></div>
                </div>
            </section>
        )    
}}

export default ContentSlider;