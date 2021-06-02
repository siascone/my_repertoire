import { connect } from "react-redux";
import Splash from './splash';

const mSTP = (state) => {
    return {
        state: state
    }
};

const mDTP = dispatch => ({
    
});

export default connect(mSTP, mDTP)(Splash);

