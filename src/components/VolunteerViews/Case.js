import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "./Volunteer.css";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import qs from 'query-string';

// import Notes from "./Notes/Notes";
// import Bio from "./Bio/Bio";
// import Legal from "./Legal/Legal";
// import Aid from "./Aid/Aid";
// import Team from "./Team/Team";
// import Events from "./Events/Events";

class Case extends Component {

    // componentDidMount = () => {
    //     const searchObject = qs.parse(this.props.location.search)
    //     console.log('searchObject', searchObject);
    //     this.setState({
    //         case:{
    //             ...this.state.case,
    //             case_id: searchObject.id,
    //         }
    //     })  
    // }

    // state= {

    // }

    eventsPages = () => {
        this.props.history.push(`/volunteer-events?id=${this.props.reduxState.caseIdReducer[0].id}`)
    }
    notesPages = () => {
        this.props.history.push(`/volunteer-notes?id=${this.props.reduxState.caseIdReducer[0].id}`)
    }
    bioPages = () => {
        this.props.history.push(`/bio?id=${this.props.reduxState.caseIdReducer[0].id}`)
    }
    legalPages = () => {
        this.props.history.push(`/volunteer-legal?id=${this.props.reduxState.caseIdReducer[0].id}`)
    }
    aidPages = () => {
        this.props.history.push(`/volunteer-aid?id=${this.props.reduxState.caseIdReducer[0].id}`)
    }
    teamPages = () => {
        this.props.history.push(`/volunteer-team?id=${this.props.reduxState.caseIdReducer[0].id}`)
    }

    render() {

        const { path } = this.props.match;

        return (
            <div>
                <center>
                    <div><h1>VOLUNTEER CASES</h1></div> 
                    
                    {/* <button>LOGOUT</button>  */}

                    <div className="links">
                        {/* <Link to={`${path}/events`} className="link">Events</Link>
                        <Link to={`${path}/notes`} className="link">Notes</Link>
                        <Link to={`${path}/bio`} className="link">Bio</Link>
                        <Link to={`${path}/legal`} className="link">Legal</Link>
                        <Link to={`${path}/aid`} className="link">Aid</Link>
                        <Link to={`${path}/team`} className="link">Team</Link>
                       
                        </div>
                        <div className="tabs">
                        <Switch>
                            <Route path={`${path}/events`} component={Events} />
                            <Route path={`${path}/notes`} exact component={Notes} />
                            <Route path={`${path}/bio`} component={Bio} />
                            <Route path={`${path}/legal`} component={Legal} />
                            <Route path={`${path}/aid`} component={Aid} />
                            <Route path={`${path}/team`} component={Team} />
                        </Switch> */}
                        <button className="adminMenuButtons" onClick={this.eventsPages}>EVENTS</button>
                        <button className="adminMenuButtons" onClick={this.notesPages}>NOTES</button>
                        <button className="adminMenuButtons" onClick={this.bioPages}>BIO</button>
                        <button className="adminMenuButtons" onClick={this.legalPages}>LEGAL</button>
                        <button className="adminMenuButtons" onClick={this.aidPages}>AID</button>
                        <button className="adminMenuButtons" onClick={this.teamPages}>TEAM</button>
                    </div>
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapReduxStateToProps)(Case));