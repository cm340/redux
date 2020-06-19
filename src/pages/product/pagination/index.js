import React, { Component } from 'react';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/action';
/**
 * @description 
 * @date 2020-06-16 分页组件
 * @class PaginationContent
 * @extends {Component}
 */
class PaginationContent extends Component {
    render() {
        const { changePage, total, pageSize, pageIndex } = this.props
        return (
            <div>
                <Pagination 
                    defaultCurrent={pageIndex} 
                    defaultPageSize={pageSize}
                    total={total}
                    onChange={changePage}
                />
            </div>
        )
    }
}

const statetoProps=(state)=>{
    return {
        total: state.productReducer.totalNum,
        pageSize:state.productReducer.pageSize,
        pageIndex:state.productReducer.pageIndex
    }
}

const dispatchtoProps=(dispatch)=>{
    return bindActionCreators(actions,dispatch)   
}

export default connect(statetoProps,dispatchtoProps)(PaginationContent)
