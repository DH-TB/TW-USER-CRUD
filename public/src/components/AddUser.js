import React, {Component} from 'react';

export default class AddUser extends Component {
    addUser() {
        const username = this.refs.username.value;
        const name = this.refs.name.value;
        const age = this.refs.age.value;
        const sex = this.refs.sex.value;
        const phone = this.refs.phone.value;
        const email = this.refs.email.value;
        const remark = this.refs.remark.value;
        if (username && name && age && sex && phone && email && remark) {
            $('#AddModal').modal('hide');
            alert('添加成功');
            this.props.AddUser(username, name, age, sex, phone, email, remark);
        }
        else{
            $('#AddModal').modal('show');
            $("#tip").text('请输入完整信息');
        }
    }

    render() {
        return <div className="modal fade" id="AddModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"
                                aria-hidden="true">&times;</button>
                        <h4 className="modal-title" id="myModalLabel">增加用户信息</h4>
                    </div>
                    <div className="modal-body">
                        <div>
                            <span>用户名</span><input type="text" ref="username" placeholder="请输入用户名" className="input"/>
                        </div>
                        <div>
                            <span>姓名</span><input type="text" ref="name" placeholder="请输入姓名" className="input"/>
                        </div>
                        <div>
                            <span>年龄</span><input type="text" ref="age" placeholder="请输入年龄" className="input"/>
                        </div>
                        <div>
                            <span>性别</span><input type="text" ref="sex" placeholder="请输入性别" className="input"/>
                        </div>
                        <div>
                            <span>电话</span><input type="text" ref="phone" placeholder="请输入电话" className="input"/>
                        </div>
                        <div>
                            <span>邮件</span><input type="text" ref="email" placeholder="请输入邮箱" className="input"/>
                        </div>
                        <div>
                            <span>备注</span><input type="text" ref="remark" placeholder="请输入备注" className="input"/>
                        </div>
                        <div>
                            <span id="tip"></span>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.addUser.bind(this)}>提交更改
                        </button>
                    </div>
                </div>

            </div>
        </div>

    }
}