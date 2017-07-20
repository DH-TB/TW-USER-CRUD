import {connect} from 'react-redux';
import ModifyUser from '../components/ModifyUser';
import actions from '../actions/ModifyUser';

const mapStateToProps = (state)=> {
    return state
};
const mapDispatchToProps = (dispatch)=> {
    return {
        ModifyUser:(id,username,name,age,sex,phone,email,remark)=>{
            dispatch(actions.modifyUser(id,username,name,age,sex,phone,email,remark))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModifyUser);
