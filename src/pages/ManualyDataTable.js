import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import data from '../data.json'

const ManualyDataTable = () => {

    const [Data,setData] = useState([])
  
    const PageBtn = [
      {
        text : '1',
        to : 0,
        from : 10
      },
      {
        text : '2',
        to : 10,
        from : 20
      },
      {
        text : '3',
        to : 20,
        from : 30
      },
      {
        text : '4',
        to : 30,
        from : 40
      },
      {
        text : '5',
        to : 40,
        from : 50
      },
      {
        text : '6',
        to : 50,
        from : 60
      },
      {
        text : '7',
        to : 60,
        from : 70
      },
      {
        text : '8',
        to : 70,
        from : 80
      },
      {
        text : '9',
        to : 80,
        from : 90
      },
      {
        text : '10',
        to : 90,
        from : 100
      },
      {
        text : '11',
        to : 100,
        from : 110
      },
      {
        text : '12',
        to : 110,
        from : 120
      },
      {
        text : '13',
        to : 120,
        from : 130
      },
      {
        text : '14',
        to : 130,
        from : 140
      },
      {
        text : '15',
        to : 140,
        from : 150
      },
      {
        text : '16',
        to : 150,
        from : 160
      },
      {
        text : '17',
        to : 160,
        from : 170
      },
      {
        text : '18',
        to : 170,
        from : 180
      },
      {
        text : '19',
        to : 180,
        from : 190
      },
      {
        text : '20',
        to : 190,
        from : 200
      }
    ]
  
    useEffect(() => {
      setData(data.slice(0,10))
    },[])
  
    const OnPAgeChanege = (to,from,event) => {
      setData(data.slice(to,from))
      console.log(event);
    }
    
    return (
      <div className='col-8 mx-auto my-3'>
        {
          PageBtn.map((i) => {
            return (
                <Pagination className='d-inline-block'>
                  <Pagination.Item onClick={(event) => OnPAgeChanege(i.to,i.from,event)}>{i.text}</Pagination.Item>
                </Pagination>
            )
          })
        }
        <Table bordered>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Complate</th>
            </tr>
            {
              Data.map((i) => {
                return (
                  <tr>
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