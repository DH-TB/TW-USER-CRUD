import React, {Component} from 'react';

export default class AddUser extends Component {
    addUser(){
        const username = this.refs.username.value;
        const name = this.refs.name.value;
        const age = this.refs.age.value;
        const sex = this.refs.sex.value;
        const phone = this.refs.phone.value;
        const email = this.refs.email.value;
        const remark = this.refs.remark.value;
        this.props.AddUser(username,name,age,sex,phone,email,remark);
    }
    render() {
        return <div className="modal fade" id="AddModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
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
                        <button type="button" className="btn btn-primary" onClick={this.addUser.bind(this)}>提交更改</button>
                    </div>
                </div>

            </div>
        </div>

    }
}