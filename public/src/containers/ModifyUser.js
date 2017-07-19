import {connect} from 'react-redux';
import ModifyUser from '../components/ModifyUser';
import actions from '../actions/AddUser';

const mapStateToProps = (state)=> {
    return state
};
const mapDispatchToProps = (dispatch)=> {
    return {
        ModifyUser:(username,name,age,sex,phone,email,remark)=>{
            dispatch(actions.AddUser(username,name,age,sex,phone,email,remark))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModifyUser);
