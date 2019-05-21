import React, { Component } from 'react';
import { connect } from 'react-redux';

class AidFund extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_AID' });
        console.log('GET_AID', this.props.reduxState.aidReducer);
    }

    render() {
        return (
            <div>
                 <center>
                    <div>
                        <h1>
                            GO FUND ME
                        </h1>
                    </div>

                    <div>{this.props.reduxState.aidReducer.map(aid =>
                <div>
<p className="bioDivs">GOFUNDME LINK: {aid.go_fund_me}</p>
                </div>
)}
</div>




                    {/* <label>LINK </label> <br/>
                    <div className="bioDivs"> 
                    </div> <br/> */}
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(AidFund);