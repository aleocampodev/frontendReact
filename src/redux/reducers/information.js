import {LOAD_TABLE_INFORMATION, LOAD_STATUS} from '../actions/showInformation'

const initialState ={
    tableData:[],
    loadStatus:false
}
const tableReducer = (state = initialState ,action) => {
    switch(action.type){
        case LOAD_TABLE_INFORMATION:
            return {
                ...state,
                tableData:action.payload
            } 
        case LOAD_STATUS:
            return{
                ...state,
                loadStatus:action.status
            }
        default: return state
    }
}

export default tableReducer;
