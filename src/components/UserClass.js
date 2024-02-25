import React from "react";
import { GITHUB_USER_URL } from "../utils/constants";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            userData:{},
        }
    }

    async fetchUser(){
        const {userName} = this.props;

        const data = await fetch(GITHUB_USER_URL+userName);
        const json = await data.json();
        console.log(json);
        this.setState({
            userData:{name:json.name,bio:json.bio},
        });

    }

    componentDidMount(){
        this.fetchUser();
    }


    render(){
        const {name,bio} = this.state.userData;
        return (
            <div className="user-card">
                <h2>{name}</h2>
                <h4>{bio}</h4>
            </div>
        );
    }
}

export default UserClass;