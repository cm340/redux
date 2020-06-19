import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../store/action';


/**
 * @description 表格组件
 * @date 2020-06-15
 * @class Table
 * @extends {Component}
 */
class Table extends Component {
    render() {
        const { products, editHander, delItem  } =this.props
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>名称</td>
                            <td>价格</td>
                            <td>数量</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {
                                products.map((item,index)=>{
                                    return (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.count}</td>
                                            <td>
                                                <button onClick={editHander.bind(this,item)}>编辑</button>
                                                <button onClick={delItem.bind(this,index)}>删除</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>
        )
    }
}

const stateToProps=(state)=>{
    return {
        products:state.productReducer.products
    }
}

const dispatchToProps=(dispatch)=>{
    return   bindActionCreators(actions,dispatch)
}
export default connect(stateToProps,dispatchToProps)(Table);
