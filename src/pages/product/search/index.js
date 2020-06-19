import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/action';
/**
 * @description  搜索组件
 * @date 2020-06-15
 * @export
 * @class Search
 * @extends {Component}
 */
class Search extends Component {
    render() {
        const { searchHander, search  } =this.props
        return (
            <div>
                <input 
                    type='text'
                    placeholder="请输入搜索的内容"
                    onChange={searchHander}
                    onKeyPress={search}
                />
                <button onClick={search}>搜索</button>
            </div>
        )
    }
}

const dispatchtoProps=(dispatch)=>{
    return bindActionCreators(actions,dispatch)
}

export default connect(null,dispatchtoProps)(Search)
