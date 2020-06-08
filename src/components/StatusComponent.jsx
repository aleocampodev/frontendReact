import React, {useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import { Doughnut } from 'react-chartjs-2';


const StatusComponent = () => {
    const {tableData} = useSelector(state => state.showData);
    const [tableInfo , setTableInfo] = useState([]);
    const [chartData , setChartData] = useState([])

     useEffect(() => {
        const tableStatus = tableData.reduce((previous,current)=>{
            previous[current.status] = current.total_amount + (previous.total_amount || 0)
            return previous
        }, {})
        setTableInfo(Object.entries(tableStatus))
        console.log(tableStatus)
        setChartData(Object.entries(tableStatus)
            .reduce((previous,current) =>{
                previous[0].push(current[0])
                previous[1].push(current[1])
                return previous
            },[[], []]))
    }, [tableData])
    
    console.log(tableInfo)
    console.log('aprender redux',chartData)


    return(
        <>
            <table>
    <thead>
               <tr>
                   <th>status</th>
                   <th>Suma de total_amount</th>
               </tr>
           </thead>
           <tbody>
               {
                   tableInfo.map(row => (
                       <tr key={row[0]}>
                           <td>{row[0]}</td>
                           <td>{row[1]}</td>
                       </tr>
                   ))
               }
           </tbody>
        </table>
        <div>
            <Doughnut data={{
                datasets:[
                    {
                        data: chartData[1],
                        backgroundColor: [
                            'blue',
                            'red',
                            'green'
                        ]
                    }
                ],
                labels: chartData[0],
            }}/>
        </div>
    </>
    )
}

export default StatusComponent;