import React, { Component } from 'react';
import Head from './head';
import Search from './search';
import Table from './table';
import ModalContent from './modal';
import PaginationContent from './pagination/index';
import { connect } from 'react-redux'
import { getOriginList } from './store/action'

 class Product extends Component {

  componentDidMount(){
     this.props.getOriginList()
  }
  render() {
    return (
      <div>
          <Head />
          <Search/>
          <Table />
          <ModalContent/>
          <PaginationContent/>
      </div>
    )
  }
}

const dispatchToProps=(dispatch)=>{
  return {
      getOriginList: getOriginList(dispatch),
  }
}
export default connect(null,dispatchToProps)(Product)