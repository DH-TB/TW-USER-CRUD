import React, {component} from 'react';

export default class AddUser extends React.Component {
    componentDidMount() {
        // this.props.GetAllUser();
    }

    queryOne() {
        const username = this.refs.username.value;
        this.props.GetOneUser(username);
        this.refs.username.value = '';
    }

    deleteOne(username) {
        this.props.DeleteOneUser(username)
    }

    addOne() {

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
                <td>
                    <button>修改</button>
                    <button onClick={this.deleteOne.bind(this, ele.username)}>删除</button>
                </td>
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
                <div className="row">
                    <div className="col-lg-4">
                        <input type="text" className="form-control " placeholder="请输入要查询的用户" ref="username"/>
                    </div>
                    <button onClick={this.queryOne.bind(this)} className="btn btn-primary">查询</button>
                    <button onClick={this.addOne.bind(this)} className="btn btn-warning" data-toggle="modal"
                            data-target="#myModal">增加
                    </button>
                </div>
                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"
                                        aria-hidden="true">&times;</button>
                                <h4 className="modal-title" id="myModalLabel">增加用户信息</h4>
                            </div>
                            <div className="modal-body">
                                <span>用户名</span><input type="text" ref="username" placeholder="请输入要查询的用户" className="addInput"/>
                                <span>姓名</span><input type="text" ref="name" placeholder="请输入要查询的用户" className="addInput"/>
                                <span>年龄</span><input type="text" ref="age" placeholder="请输入要查询的用户" className="addInput"/>
                                <span>性别</span><input type="text" ref="sex" placeholder="请输入要查询的用户" className="addInput"/>
                                <span>电话</span><input type="text" ref="phone" placeholder="请输入要查询的用户" className="addInput"/>
                                <span>邮件</span><input type="text" ref="email" placeholder="请输入要查询的用户" className="addInput"/>
                                <span>备注</span><input type="text" ref="remark" placeholder="请输入要查询的用户" className="addInput"/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                                <button type="button" className="btn btn-primary">提交更改</button>
                            </div>
                        </div>

                    </div>
                </div>
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
    }
}