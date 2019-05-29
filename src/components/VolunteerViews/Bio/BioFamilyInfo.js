import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';

class BioFamilyInfo extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('GENERAL BIO searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_BIO_INFO', payload: searchObject.id });
        console.log('GET_BIO_INFO', this.props.reduxState.bioReducer);
    }
    
    render() {
        return (
            <div>
                <Nav pageName='FAMILY INFO' volunteer home='/home' />
                <center>
                   
                    <div>{this.props.reduxState.bioReducer.map(bio =>
                <div>
<p className="bioDivs">FIRST NAME: {bio.first_name}</p>
<p className="bioDivs">LAST NAME: {bio.last_name}</p>
<p className="bioDivs">DOB: {bio.dob}</p>
<p className="bioDivs">SPOUSE NAME: {bio.spouse_first_name}</p>
<p className="bioDivs">SPOUSE DOB: {bio.spouse_dob}</p>
<p className="bioDivs">PHONE: {bio.phone}</p>
<p className="bioDivs">WHATSAPP USERNAME: {bio.encrypted}</p>
<p className="bioDivs">EMAIL: {bio.email}</p>
<p className="bioDivs">ADDRESS: {bio.address}</p>
<p className="bioDivs">REFERRED BY: {bio.referred_by}</p>
<p className="bioDivs">REFERRAL DATE: {bio.reference_date}</p>
<p className="bioDivs">PASSPORT: {String(bio.passport)}</p>
<p className="bioDivs">U.S. IDENTIFICATION: {String(bio.us_id)}</p>
                </div>
)}
</div>




                    {/* <div className="bioDivs">
                        <label> NAME: </label>
                        <label> DOB: </label>
                        <label> RELATION: </label>
                    </div>
                    <div className="bioDivs">
                        <label> NAME: </label>
                        <label> DOB: </label>
                        <label> RELATION: </label>
                    </div>

                    <label>CASE REFERRED BY:</label>
                    <div className="bioDivs">

                    </div>

                    <label>DATE:</label>
                    <div className="bioDivs">

                    </div>

                    <label>BACKSTORY:</label>
                    <div className="bioDivs">

                    </div> */}

                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(BioFamilyInfo);