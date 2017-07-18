import {connect} from 'react-redux';
import AddUser from '../components/AddUser';
import actions from '../actions/User';

const mapStateToProps = (state)=> {
    return state
};
const mapDispatchToProps = (dispatch)=> {
    return {
        GetAllUser: ()=> {
            dispatch(actions.GetAllUser)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
