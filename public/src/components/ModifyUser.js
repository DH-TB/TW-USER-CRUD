import React, {Component} from 'react';

export default class ModifyUser extends Component {
    componentDidUpdate() {
        this.refs.modifyUsername.value = this.props.FindOneUser.username;
        this.refs.modifyName.value = this.props.FindOneUser.name;
        this.refs.modifyAge.value = this.props.FindOneUser.age;
        this.refs.modifySex.value = this.props.FindOneUser.sex;
        this.refs.modifyPhone.value = this.props.FindOneUser.phone;
        this.refs.modifyEmail.value = this.props.FindOneUser.email;
        this.refs.modifyRemark.value = this.props.FindOneUser.remark;
    }

    modifyUser() {
        const username = this.refs.modifyUsername.value;
        const name = this.refs.modifyName.value;
        const age = this.refs.modifyAge.value;
        const sex = this.refs.modifySex.value;
        const phone = this.refs.modifyPhone.value;
        const email = this.refs.modifyEmail.value;
        const remark = this.refs.modifyRemark.value;
        const id = this.props.FindOneUser.id;
        if (username && name && age && sex && phone && email && remark) {
            alert('修改成功');
            $('#ModifyModal').modal('hide');
            this.props.ModifyUser(id, username, name, age, sex, phone, email, remark);
        }
        else {
            console.log(123);
            $('#ModifyModal').modal('show');
            $("#modifyTip").text('请输入完整信息');
        }
    }

    render() {
        return <div className="modal fade" id="ModifyModal" tabIndex="-1" role="dialog"
                    aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"
                                aria-hidden="true">&times;</button>
                        <h4 className="modal-title" id="modifyModal">修改用户信息</h4>
                    </div>
                    <div className="modal-body">
                        <div>
                            <span>用户名</span><input type="text" ref="modifyUsername" placeholder="请输入要修改的用户名"
                                                   className="input"/>
                        </div>
                        <div>
                            <span>姓名</span><input type="text" ref="modifyName" placeholder="请输入要修改的姓名"
                                                  className="input"/>
                        </div>
                        <div>
                            <span>年龄</span><input type="text" ref="modifyAge" placeholder="请输入要修改的年龄"
                                                  className="input"/>
                        </div>
                        <div>
                            <span>性别</span><input type="text" ref="modifySex" placeholder="请输入要修改的性别"
                                                  className="input"/>
                        </div>
                        <div>
                            <span>电话</span><input type="text" ref="modifyPhone" placeholder="请输入要修改的电话"
                                                  className="input"/>
                        </div>
                        <div>
                            <span>邮件</span><input type="text" ref="modifyEmail" placeholder="请输入要修改的邮箱"
                                                  className="input"/>
                        </div>
                        <div>
                            <span>备注</span><input type="text" ref="modifyRemark" placeholder="请输入要修改的备注"
                                                  className="input"/>
                        </div>
                        <div>
                            <span id="modifyTip"></span>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.modifyUser.bind(this)}>确认修改
                        </button>
                    </div>
                </div>
            </div>
        </div>

    }
}