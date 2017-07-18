import {connect} from 'react-redux';
import AddUser from '../components/AddUser';

const mapStateToProps = (state)=>{
    return state
};
const mapDispatchToProps = (dispatch)=>{

};

export default connect(mapStateToProps,mapDispatchToProps)(AddUser);
