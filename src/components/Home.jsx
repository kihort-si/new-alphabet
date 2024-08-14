import React from "react";
import Title from "./Title";
import Translate from './Translate'
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Title/>
                <Translate />
                <div>
                    <Link to={'./history'} id={'historyLink'}>Узнать больше</Link>
                </div>
            </div>
        )
    };
}

export default Home;