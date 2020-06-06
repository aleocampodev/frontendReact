import {information} from '../../data/information.json';
import delay from 'delay';
export const LOAD_TABLE_INFORMATION = 'LOAD_TABLE_INFORMATION';
export const LOAD_STATUS ='LOAD_STATUS'

export const setTable = (payload) => {
    return{
        type:LOAD_TABLE_INFORMATION,
        payload
    }
}

export const isLoading = (status) =>{
    return {
        type:LOAD_STATUS,
        status
    }
}

export const fetchData = () => {
     return async (dispatch,state) => {
        dispatch(isLoading(true))
        try{
            await delay(2000)
            dispatch(setTable(information))

        }catch(error){
            console.log(error)
        }
        dispatch(isLoading(false))
    }
}

