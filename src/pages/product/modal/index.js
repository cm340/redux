import React, { Component } from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/action';
/**
 * @description 模态框组件
 * @date 2020-06-15
 * @class ModalContent
 * @extends {Component}
 */
class ModalContent extends Component {
    render() {
        let { visible, product, handleCancel, updatePrice, handleOk} =this.props
        return ( 
                <Modal
                    title="修改价格"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <div>名称<input value={product.name} readOnly/></div>
                    <div>价格<input value={product.price}  onChange={updatePrice}/></div>
                    <div>数量<input value={product.count} readOnly/></div>
                </Modal>
        )
    }
}

const statetoProps=(state)=>{
    return{
        visible : state.productReducer.visible,
        product:state.productReducer.product
    }
}

const dispatchtoProps=(dispatch)=>{
    return bindActionCreators(actions,dispatch) 
}

export default connect(statetoProps,dispatchtoProps)(ModalContent);