import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DummyActions from './../actions/dummy-actions.js';

class HomePage extends Component {
    render() {
        return (
            <div>
              hello!
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dummyActions: bindActionCreators(DummyActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);