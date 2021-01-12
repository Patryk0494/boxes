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
    constructor(props){
        super(props);
        this.state = {data: data}
        this.indexDecreas = this.indexDecreas.bind(this);
        this.indexIncreas = this.indexIncreas.bind(this);
    }


    indexDecreas() {
    //     console.log(boxData[0])
    //     console.log(boxData[1])
    //     console.log(boxData[2])
    //     this.state.data.map((element, index, arr) => {
    //     if (index-1 < 0) {
    //         arr[index] = this.state.data[this.state.data.length-1]
    //         return this.setState({data: data[0]=arr[index]})
    //     } else {
    //         arr[index] = this.state.data[index-1]
    //         return this.setState({data: data[index]=arr[index]})
    //     }
    // })
        let { data } = this.state
        for (let i = 0; i < data.length; i++) {
            console.log(data)
            if ( i === 0 ) {
                return this.setState({data : data[0] = this.state.data[this.state.data.length-1]})
            } 
            data[i] = this.state.data[i-1];
            return this.setState({data: data})
        }
        console.log(data);
    }


    indexIncreas() {
        console.log(boxData[0])
        boxData.map((element, index) => {
        if (index+1 > boxData.length) {
        return element[index] = element[0]
        }
        return element[index]=element[index+1]
    })
    }

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