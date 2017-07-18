import React, {component} from 'react';

export default class AddUser extends React.Component {
    componentWillMount(){
        this.props.GetAllUser();
    }
    render() {
        return <div>
            <nav className="navbar navbar-inverse" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img src="../../img/user.png" id="NavImg"/>
                    </div>
                    <div className="center-block" id="NavName">
                        用户管理
                    </div>
                </div>
            </nav>
            <div id="main">
                <input type="text" placeholder="请输入要查询的用户"/>
                <button>查询</button>
            </div>
        </div>
    }
}