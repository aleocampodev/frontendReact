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
            <table className="ml-10 mt-10">
                <thead>
                    <tr>
                        <th className="border px-4 pl-4 bg-blue-600">Status</th>
                        <th className="border px-4 bg-blue-600">Suma de total_amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableInfo.map(row => (
                            <tr key={row[0]} className="fillingItems">
                                <td className="border px-4">{row[0]}</td>
                                <td className="border px-4">{row[1]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="m-20">
                <Doughnut data={{
                    datasets:[
                        {
                            data: chartData[1],
                            backgroundColor: [
                                '#ffd700',
                                '#00BB2D',
                                '#0D47A1'
                            ]
                        }
                    ],
                    labels: chartData[0],
                }} />
            </div>
        </>
    )
}

export default StatusComponent;