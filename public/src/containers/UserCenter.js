import {connect} from 'react-redux';
import AddUser from '../components/AddUser';
import actions from '../actions/User';

const mapStateToProps = (state)=> {
    return {
        FindUser:state.FindUser
    };
};
const mapDispatchToProps = (dispatch)=> {
    return {
        GetAllUser: ()=> {
            dispatch(actions.getAllUser())
        },
        GetOneUser:(username)=>{
            dispatch(actions.getOneUser(username))
        },
        DeleteOneUser:(username)=>{
            dispatch(actions.deleteOneUser(username))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
