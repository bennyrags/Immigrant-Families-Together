import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import qs from 'query-string';
import Nav from '../../Nav/Nav'

class EditCases extends Component {

    componentDidMount = () => {
        this.props.dispatch({type: 'ADD_CASE'})
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_AID', payload: searchObject.id });
        this.props.dispatch({ type: 'GET_BIO_INFO', payload: searchObject.id });
        this.props.dispatch({ type: 'GET_MEDICAL', payload: searchObject.id });
        this.props.dispatch({ type: 'GET_SCHOOL', payload: searchObject.id });
        this.props.dispatch({ type: 'GET_HOUSING', payload: searchObject.id });
        this.props.dispatch({ type: 'GET_LEGAL', payload: searchObject.id });
        this.props.dispatch({ type: 'GET_BOND', payload: searchObject.id });
        console.log('formRoutes searchObject', searchObject);
        this.setState({
            formRoutes:{
                ...this.state.formRoutes,
                id: searchObject.id,
            }
        }) 
    }

    bioForm = (event) => {
        console.log('PAYLOAD FOR GET FAMILY INFO', event.currentTarget.value);
        // this.props.dispatch({type: 'GET_CURRENT_ID', payload: event.currentTarget.value})
        this.props.history.push(`/bio-edit?id=${this.state.formRoutes.id}`)
    }
    medicalForm = () => {
        this.props.history.push(`/medical-edit?id=${this.state.formRoutes.id}`)
    }
    schoolForm = () => {
        this.props.history.push(`/school-edit?id=${this.state.formRoutes.id}`)
    }
    housingForm = () => {
        this.props.history.push(`/housing-edit?id=${this.state.formRoutes.id}`)
    }
    aidForm = () => {
        this.props.history.push(`/aid-edit?id=${this.state.formRoutes.id}`)
    }
    bondForm = () => {
        this.props.history.push(`/bond-edit?id=${this.state.formRoutes.id}`)
    }
    legalStatusForm = () => {
        this.props.history.push(`/legal-edit?id=${this.state.formRoutes.id}`)
    }
    
    state = {
        formRoutes: {
            id: ''
        } 
    }

    viewSelectedButton = (propertyName) => {   
        return(event) =>{
        this.setState({
            [propertyName]: event.target.value,
            });
        }    
    }


    render() {

        // let div = <div>  </div>
        // if(this.state.button === "bio") {
        //     div = <div> <BioFamilyInfo/> </div>
        // } else if (this.state.button === "id") {
        //     div = <div> <BioIdentify/> </div>
        // } else if (this.state.button === "school") {
        //     div = <div> <BioSchool/> </div>
        // } else if (this.state.button === "housing") {
        //     div = <div> <BioHousing/> </div>
        // } else if (this.state.button === "medical") {
        //     div = <div> <BioMedical/> </div>
        // } 

        return (
            <div>
                <Nav pageName='BIO' volunteer home='/home' /> 
                <center> 
                 
                    {/* <button 
                    onClick={this.viewSelectedButton('button')}
                    value={"bio"}
                    >FAMILY INFO</button> 

                    <button
                    value={"id"}
                    onClick={this.viewSelectedButton('button')}
                    >IDENTIFICATION</button> 

                    <button
                    onClick={this.viewSelectedButton('button')}
                    value={"school"}
                    >SCHOOL</button> 

                    <button
                    onClick={this.viewSelectedButton('button')}
                    value={"housing"}
                    >HOUSING</button> 
                    // fjfjf

                    <button
                    onClick={this.viewSelectedButton('button')}
                    value={"medical"}
                    >MEDICAL</button> 
                    <br/>

                    {div} */}
                    <div>
                        <button className="adminMenuButtons" onClick={this.bioForm}>EDIT GENERAL BIO</button>
                        <button className="adminMenuButtons" onClick={this.medicalForm}>EDIT MEDICAL</button>
                        <button className="adminMenuButtons" onClick={this.schoolForm}>EDIT SCHOOL</button>
                        <button className="adminMenuButtons" onClick={this.housingForm}>EDIT HOUSING</button>
                        <button className="adminMenuButtons" onClick={this.aidForm}>EDIT AID</button>
                        <button className="adminMenuButtons" onClick={this.bondForm}>EDIT BOND</button>
                        <button className="adminMenuButtons" onClick={this.legalStatusForm}>EDIT LEGAL STATUS</button>
                        {/* <button className="adminMenuButtons" onClick={this.identificationPages}>IDENTIFICATION</button> */}
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
  export default withRouter(connect(mapReduxStateToProps)(EditCases));