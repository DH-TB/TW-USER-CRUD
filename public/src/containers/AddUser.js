import {connect} from 'react-redux';
import AddUser from '../components/AddUser';
import actions from '../actions/AddUser';

const mapStateToProps = (state)=> {
    return state
};
const mapDispatchToProps = (dispatch)=> {
    return {
        AddUser:(username,name,age,sex,phone,email,remark)=>{
            dispatch(actions.AddUser(username,name,age,sex,phone,email,remark))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
