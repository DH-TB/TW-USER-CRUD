import {connect} from 'react-redux';
import UserCenter from '../components/UserCenter';
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
        GetModifyUser:(username)=>{
            dispatch(actions.getOneUser(username))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter);
