import React, {component} from 'react';

export default class AddUser extends React.Component {
    componentDidMount() {
        this.props.GetAllUser();
    }
    queryOne(){
        const username = this.refs.username.value;
        this.props.GetOneUser(username);
        this.refs.username.value = '';
    }
    render() {
        const user = this.props.FindUser.map((ele, index)=> {
            return <tr key={index}>
                <td>{ele.username}</td>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.sex}</td>
                <td>{ele.phone}</td>
                <td>{ele.email}</td>
                <td>{ele.remark}</td>
            </tr>
        });
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
                <input type="text" placeholder="请输入要查询的用户" ref="username"/>
                <button onClick={this.queryOne.bind(this)}>查询</button>
                <div>
                    <table className="table table-style">
                        <thead>
                        <tr>
                            <th>用户名</th>
                            <th>姓名</th>
                            <th>年龄</th>
                            <th>性别</th>
                            <th>电话</th>
                            <th>邮件</th>
                            <th>备注</th>
                        </tr>
                        </thead>
                        <tbody>
                        {user}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}