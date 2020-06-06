import React, {useState,useEffect,useCallback,useMemo} from  'react';
import { fetchData } from '../redux/actions/showInformation';
import {useSelector, useDispatch} from 'react-redux'

const TableComponent = () => {
    const dispatch = useDispatch(); 
    const {tableData , loadStatus} = useSelector(state => state.showData);
    console.log(tableData , loadStatus);

    useEffect(() => {
        dispatch(fetchData())  
        return () => {
            console.log('bye');
        }
    }, [])

    function mapTable(){
        return  tableData.map(row => (
            <tr key={row.order_id}>
                <td>{row.order_id}</td>
                <td>{row.creation_date}</td>
                <td>{row.total_amount}</td>
                <td>{row.total_items}</td>
                <td>{row.user_id}</td>
                <td>{row.gateway_reference}</td>
                <td>{row.status}</td>
                <td>{row.bin}</td>
                <td>{row.last4}</td>
            </tr>
        ))
    }
 
    return(
        <table className="table-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2">Order id</th>
                    <th className="px-4 py-2">Creation date</th>
                    <th className="px-4 py-2">Total amount</th>
                    <th className="px-4 py-2">Total_items</th>
                    <th className="px-4 py-2">User id</th>
                    <th className="px-4 py-2">Gateway reference</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Bin</th>
                    <th className="px-4 py-2">Last4</th>
                </tr>
            </thead>
            <tbody>
                {mapTable()}
            </tbody>
        </table>
    )
}




export default TableComponent;


