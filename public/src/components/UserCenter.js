import React, {component} from 'react';
import AddUser from '../containers/AddUser';
import ModifyUser from '../containers/ModifyUser';

export default class UserCenter extends React.Component {
    componentDidMount() {
        this.props.GetAllUser();
    }

    queryOne() {
        const username = this.refs.username.value;
        if (username == '') {
            this.props.GetAllUser();
        }
        else {
            this.props.GetOneUser(username);
            this.refs.username.value = '';
        }
    }

    deleteOne(id) {
        this.props.DeleteOneUser(id)
    }

    modify(ele) {
        const id = ele.id;
        this.props.GetModifyUser(id);
    }

    render() {
        const user = this.props.FindUser.map((ele, index)=> {
            return <tr key={index}>
                <td>{ele.id}</td>
                <td>{ele.username}</td>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.sex}</td>
                <td>{ele.phone}</td>
                <td>{ele.email}</td>
                <td>{ele.remark}</td>
                <td>
                    <button className="btn btn-warning" data-toggle="modal"
                            data-target="#ModifyModal" onClick={this.modify.bind(this, ele)}>修改
                    </button>
                    <ModifyUser/>
                    <button className="btn btn-danger" onClick={this.deleteOne.bind(this, ele.id)}>删除</button>
                </td>
            </tr>
        });
        return <div>
            <nav className="navbar navbar-primary" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img src="../../img/user.png" id="NavImg"/>
                    </div>
                    <div className="center-block" id="NavName">
                        用户管理
                    </div>
                </div>
            </nav>
            <div className="panel panel-default" id="main">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-lg-3">
                            <input type="text" className="form-control" placeholder="请输入要查询的用户"
                                   ref="username"/>
                        </div>
                        <button onClick={this.queryOne.bind(this)} className="btn btn-info">查询</button>
                        <button className="btn btn-success" data-toggle="modal"
                                data-target="#AddModal">增加
                        </button>
                    </div>
                </div>
                <div className="panel-body">
                    <AddUser/>
                    <div>
                        <table className="table table-style" id="table">
                            <thead>
                            <tr>
                                <th>序号</th>
                                <th>用户名</th>
                                <th>姓名</th>
                                <th>年龄</th>
                                <th>性别</th>
                                <th>电话</th>
                                <th>邮件</th>
                                <th>备注</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {user}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    }
}