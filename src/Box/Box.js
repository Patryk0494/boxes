import React from "react";
import './box.css';

class Box extends React.Component {


    render() {
        return (
            this.props.boxData.map(dataElem => { 
                return(
                    <div className="box">           
                        <div className="box__content">
                            <h3>{dataElem.heading}</h3>
                            <p>{dataElem.paragraph}</p>
                            {dataElem.img &&
                            <img src={dataElem.img} alt="some text"></img>}
                        </div>
                    </div>
                )
            })
        )
    }
}

export default Box;