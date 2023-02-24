import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import data from '../data.json'

const ManualyDataTable = () => {

    const [filteredData,setfilteredData] = useState([])
    const [page , setPage] = useState(1)
    const [Sort, setSort]= useState([])
    const Perpage = 15
    const LastData = page * Perpage
    const FirstData = LastData - Perpage
  
    useEffect(() => {
      setfilteredData(data.slice(FirstData,LastData))
    },[page])
  
    const OnPAgeChanege = (num) => {
      setPage(num)
    }
    const OnClickSorting = () => {
      const sort = filteredData.sort((a,b) => a.title.localeCompare(b.title))
      setSort(sort)
      setfilteredData(sort)
    }
    
    return (
      <div className='col-8 mx-auto my-3'>
        <div src=''></div>
        {
          Array.from(Array(Math.ceil(data.length / Perpage)), (_, i) => {
            return (
              <Pagination key={i} className='d-inline-block'>
                <Pagination.Item onClick={() => OnPAgeChanege(i + 1)}>{i + 1}</Pagination.Item>
              </Pagination>
          )
          })
        }
        <Table bordered>
          <tbody>
            <tr>
              <th>Id</th>
              <th onClick={OnClickSorting}>Title</th>
              <th>Complate</th>
            </tr>
            {
              filteredData.map((i) => {
                return (
                  <tr key={i.id}>
                    <td>{i.id}</td>
                    <td>{i.title}</td>
                    <td>{i.completed === true ? 'Yes' : 'No'}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
export default ManualyDataTable