import React, {useState,useEffect,useCallback,useMemo} from  'react';
import { fetchData } from '../redux/actions/showInformation';
import {useSelector, useDispatch} from 'react-redux'
import '../style.css';

const TableComponent = () => {
    const dispatch = useDispatch(); 
    const {tableData , loadStatus} = useSelector(state => state.showData);

    useEffect(() => {
        dispatch(fetchData())  
        return () => {
            console.log('bye');
        }
    }, [])

    function mapTable(){
        return  tableData.map(row => (
            <tr key={row.order_id} className="filling">
                <td className="border px-4">{row.order_id}</td>
                <td className="border px-4">{row.creation_date}</td>
                <td className="border px-4">{row.total_amount}</td>
                <td className="border px-4">{row.total_items}</td>
                <td className="border px-4">{row.user_id}</td>
                <td className="border px-4">{row.gateway_reference}</td>
                <td className="border px-4">{row.status}</td>
                <td className="border px-4">{row.bin}</td>
                <td className="border px-4">{row.last4}</td>
            </tr>
        ))
    }
 
    return(
        <table className="table-auto ml-4">
            <thead>
                <tr>
                    <th className="px-4 py-2 bg-blue-400 ">Order id</th>
                    <th className="px-4 py-2 bg-blue-400">Creation date</th>
                    <th className="px-4 py-2 bg-blue-400">Total amount</th>
                    <th className="px-4 py-2 bg-blue-400">Total items</th>
                    <th className="px-4 py-2 bg-blue-400">User id</th>
                    <th className="px-4 py-2 bg-blue-400">Gateway reference</th>
                    <th className="px-4 py-2 bg-blue-400">Status</th>
                    <th className="px-4 py-2 bg-blue-400">Bin</th>
                    <th className="px-4 py-2 bg-blue-400">Last4</th>
                </tr>
            </thead>
            <tbody>
                {mapTable()}
            </tbody>
        </table>
    )
}




export default TableComponent;


