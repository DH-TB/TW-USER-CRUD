import React, {Component} from 'react';

export default class ModifyUser extends Component {
    componentDidUpdate(){
        this.refs.modifyUsername.value = this.props.FindOneUser.username;
        this.refs.modifyName.value = this.props.FindOneUser.name;
        this.refs.modifyAge.value = this.props.FindOneUser.age;
        this.refs.modifySex.value = this.props.FindOneUser.sex;
        this.refs.modifyPhone.value = this.props.FindOneUser.phone;
        this.refs.modifyEmail.value = this.props.FindOneUser.email;
        this.refs.modifyRemark.value = this.props.FindOneUser.remark;
    }
    modifyUser(){
        const username = this.refs.modifyUsername.value;
        const name = this.refs.modifyName.value;
        const age = this.refs.modifyAge.value;
        const sex = this.refs.modifySex.value;
        const phone = this.refs.modifyPhone.value;
        const email = this.refs.modifyEmail.value;
        const remark = this.refs.modifyRemark.value;
        this.props.ModifyUser(username,name,age,sex,phone,email,remark);

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
                        <span>用户名</span><input type="text" ref="modifyUsername" placeholder="请输入要修改的用户名" className="addInput"/>
                        <span>姓名</span><input type="text" ref="modifyName" placeholder="请输入要查询的用户" className="addInput"/>
                        <span>年龄</span><input type="text" ref="modifyAge" placeholder="请输入要查询的用户" className="addInput"/>
                        <span>性别</span><input type="text" ref="modifySex" placeholder="请输入要查询的用户" className="addInput"/>
                        <span>电话</span><input type="text" ref="modifyPhone" placeholder="请输入要查询的用户" className="addInput"/>
                        <span>邮件</span><input type="text" ref="modifyEmail" placeholder="请输入要查询的用户" className="addInput"/>
                        <span>备注</span><input type="text" ref="modifyRemark" placeholder="请输入要查询的用户" className="addInput"/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" className="btn btn-primary" onClick={this.modifyUser.bind(this)}>提交更改</button>
                    </div>
                </div>

            </div>
        </div>

    }
}