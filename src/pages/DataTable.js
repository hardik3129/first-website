import React from 'react'
import data from '../data.json'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const DataTable = () => {

  const columns = [
    {
      dataField : "id",
      text : 'Id',
      sort : true
    },
    {
      dataField : "title",
      text : 'Data Title',
      sort : true,
      filter : textFilter()
    },
    {
      dataField : "completed",
      text : 'Complate'
    }
  ]

  return (
    <div className='col-8 mx-auto my-3'>
        <BootstrapTable filter={filterFactory()} pagination={paginationFactory()} keyField='id' data={data} columns={columns} />
    </div>
  )
}


export default DataTable;
