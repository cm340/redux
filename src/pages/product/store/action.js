 import store from '../../../store/index'
/**
 * @description  获取原数据
 * @date 2020-06-19
 * @export
 * @param {*} dispatch
 * @returns
 */
export  function getOriginList(dispatch) {
    return ()=>{
        fetch('/mock.json')
        .then(res=>{ return res.json()})
        .then(data=>{
            const productList=data.products
            const { pageIndex, pageSize }=store.getState().productReducer
            const products=getCurrentProduct('',productList,pageIndex,pageSize)
            const action={
                type:'GET_LIST',
                value: data.products,
                products:products
           }
           dispatch(action)
         })
        .catch((e)=>console.log(e.mesage))
    }
}
/**
 * @description 获取当前展示的数据
 * @date 2020-06-19
 * @param {*} searchName 搜索框的值
 * @param {*} productList 数据列表
 * @param {*} pageIndex 页码
 * @param {*} pageSize 一页多少条数据
 * @returns
 */
function getCurrentProduct (searchName,productList,pageIndex,pageSize){
    const searchResult=productList.filter(item=>item.name.indexOf(searchName)>-1).slice((pageIndex-1)*pageSize,pageSize*pageIndex)
    return searchResult
}

/**
 * @description 点击编辑按钮触发
 * @date 2020-06-19
 * @export
 * @param {*} obj 被选中的商品对象
 * @returns
 */
export function  editHander(obj){
    const action={
        type:'UPDATE_VISIBLE',
        value:obj
    }
    return action
}
/**
 * @description
 * @date 2020-06-19 删除商品
 * @export
 * @param {*} index 待删除商品的索引
 * @returns
 */
export function delItem(index){
    let { productList, pageIndex, pageSize }=store.getState().productReducer
    productList.splice(index,1)
    const products=getCurrentProduct('',productList,pageIndex,pageSize)
    return {
        type:'DEL_ITEM',
        value:products
    }
}

/**
 * @description 修改Input输入框的值
 * @date 2020-06-19
 * @export
 * @param {*} e
 * @returns
 */
export function updatePrice(e){
    const action={
        type: 'UPDATE_INPUT_PRICE',
        value:e.target.value
    }
    return action
}

/**
 * @description 确定修改商品的价格
 * @date 2020-06-19
 * @export
 * @returns
 */
export function handleOk(){
    const { productList, product, pageIndex, pageSize}=store.getState().productReducer
    productList.some(element => {
        if(element.id===product.id){
            element.price=product.price
            return true
        } 
    })
    const products=getCurrentProduct('',productList,pageIndex,pageSize)
    return {
        type: 'UPDATE_PRICE',
        value:products
    }
}
/**
 * @description 修改搜索框的值
 * @date 2020-06-19
 * @export
 * @param {*} e
 * @returns
 */
export function  searchHander(e){
    const action={
            type: 'CHANGE_SEARCH',
            value:e.target.value
        }
    return action  
}
/**
 * @description  搜索方法
 * @date 2020-06-19
 * @export
 * @returns
 */
export function   search(){
    const { productList, searchName, pageIndex, pageSize}=store.getState().productReducer
    const products=getCurrentProduct(searchName,productList,pageIndex,pageSize)
    const action={
        type: 'SEARCH_PRODUCT',
        value:products
    }
    return action
}
/**
 * @description 页码改变
 * @date 2020-06-19
 * @export
 * @param {*} pageIndex 新页码
 * @returns
 */
export function changePage(pageIndex){
    const { productList, pageSize}=store.getState().productReducer
    const products=getCurrentProduct('',productList,pageIndex,pageSize)
    const action={
        type: 'CHANGR_PAGE',
        value:products
    }
    return action
}
