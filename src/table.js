import './index.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';

function Table() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  

  const rowStyle = (row, rowIndex) => {
    const classes = [];
    if (row.isSelected) {
      classes.push('table-success');  
    }
    return {
      classes: classes.join(' '),
    };
  };

  const columns = [
    {
      dataField: 'postId',
      text: 'EmployeeSerial#',
    
      sort: true,
      validator: (newValue, row, column) => {
        if (isNaN(newValue)) {
          return {
            valid: false,
            message: 'Please enter numeric value',
          };
        }
        return true;
      },
    },
   
{
    dataField: 'postId', //Add the data field from the table 
      text: 'Emp Type',
      editable: true,
 

},

{
    dataField:"postId", //Add the data field from the table 
    text:"DeptCode",
    editable:false,  
},
{
    dataField:"postId", //Add the data field from the table 
    text:"DeptName",
    editable:false,  
},
{
    dataField:"postId", //Add the data field from the table 
    text:"IS Manager?",
    editable:false, //hardcoded data


},
{
    dataField:"postId", //Add the data field from the table 
    text:"Emp Type",
    editable:false, //hardcoded data


},
{
    dataField:"postId", //Add the data field from the table 
    text:"Location Blue pgaes",
    editable:false, //hardcoded data


},
{
    dataField:"postId", //Add the data field from the table 
    text:"Mgr Name",
    editable:false, //hardcoded data


},
{
    dataField:"postId", //Add the data field from the table 
    text:"Leader Name",
    editable:true, 


},
{
    dataField:"postId", //Add the data field from the table 
    text:"Employee email",
    editable:false, //hardcoded data


},
{
    dataField:"postId", //Add the data field from the table 
    text:"Diversity",
    editable:true, 


},
{
    dataField:"postId", //Add the data field from the table 
    text:"Emp Type",
    editable:true, 


},
{
    dataField:"postId", //Add the data field from the table 
    text:"Work location",
    editable:false, //hardcoded data

},
{
    dataField:"postId", //Add the data field from the table 
    text:"Remarks",

 }

    // Add the rest of the additional columns here
  ];

  return (
    <div className="tableWrap">
      <h1 className="BP_name">Bluepage SyncUp</h1>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory()}
        cellEdit={cellEditFactory({
          mode: 'dbclick',
          blurToSave: true,
        })}
     
        rowStyle={rowStyle}
      />
    </div>
  );
}

export default Table;
