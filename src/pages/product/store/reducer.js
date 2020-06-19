const defaultState={
    visible:false,//模态框的显示与隐藏
    productList:[],//商品总数
    products:[],//页面待展示的商品数
    product:{},//模态框内的商品对象
    searchName:'',//搜索框的值
    totalNum:20,//商品总数
    pageSize:10, //一页显示几条
    pageIndex:1,//当前页码
}

export default (state=defaultState,action) => {
    switch(action.type) {
        //获取数据列表
        case 'GET_LIST':
            return {
                ...state, 
                productList:action.value,
                products:action.products
            }
        //点击编辑按钮触发
        case 'UPDATE_VISIBLE':
            return {
                ...state, 
                visible:true,
                product:action.value
            }
        //删除    
        case 'DEL_ITEM':
            return {
                ...state,
                products:action.value,
                totalNum:action.value.length
            }
        //修改模态框中输入框中商品的价格    
        case 'UPDATE_INPUT_PRICE':
            const newObj=Object.assign({},state.product)
            newObj.price=action.value
            return {
                ...state,
                product:newObj
            }
        //修改商品价格    
        case 'UPDATE_PRICE':
            return {
                ...state,
                products:action.value,
                visible:false
            }
        //搜索框的输入值    
        case 'CHANGE_SEARCH':
            return {
                ...state,
                searchName:action.value
            }
        //搜索结果的展示    
        case 'SEARCH_PRODUCT':
            return {
                ...state,
                products:action.value
            }
        //页码发生改变
        case 'CHANGR_PAGE':
            return {
                ...state,
                products:action.value
            }
        default:
            return state;    
    }

}
