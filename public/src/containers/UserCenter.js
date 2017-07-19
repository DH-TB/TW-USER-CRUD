import {connect} from 'react-redux';
import UserCenter from '../components/UserCenter';
import actions from '../actions/UserCenter';

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
        DeleteOneUser:(id)=>{
            dispatch(actions.deleteOneUser(id))
        },
        GetModifyUser:(username)=>{
            dispatch(actions.getModifyUser(username))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter);
