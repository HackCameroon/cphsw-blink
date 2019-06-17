import React from 'react';
import MaterialTable from 'material-table';
import {
  AddBox,
  ArrowUpward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn
} from '@material-ui/icons';

const tableIcons = {
  Add: AddBox,
  Check,
  Clear,
  Delete: DeleteOutline,
  DetailPanel: ChevronRight,
  Edit,
  Export: SaveAlt,
  Filter: FilterList,
  FirstPage,
  LastPage,
  NextPage: ChevronRight,
  PreviousPage: ChevronLeft,
  ResetSearch: Clear,
  Search,
  SortArrow: ArrowUpward,
  ThirdStateCheck: Remove,
  ViewColumn
};

const Table = ({ data }) => {
  console.log(data);

  return (
    <MaterialTable
      title="Transactions List"
      //   actions={[
      //     {
      //       icon: tableIcons.Add,
      //       tooltip: 'Add User',
      //       isFreeAction: true,
      //       onClick: () => toggleEditUserModal()(),
      //     },
      //     {
      //       icon: tableIcons.Delete,
      //       tooltip: 'Delete User',
      //       onClick: (e, rowData) => toggleDeleteUserModal(rowData)(),
      //     },
      //     {
      //       icon: tableIcons.Edit,
      //       tooltip: 'Edit User',
      //       onClick: (e, rowData) => toggleEditUserModal(rowData, true)(),
      //     },
      //   ]}
      columns={[
        { title: 'ID', field: 'id' },
        { title: 'Timestamp', field: 'date' },
        { title: 'Type', field: 'type' },
        { title: 'From', field: 'fromAmount' },
        { title: 'To', field: 'toAmount' },
        { title: 'State', field: 'state' }
      ]}
      data={data}
      icons={tableIcons}
      options={{
        actionsColumnIndex: -1,
        exportButton: true
      }}
    />
  );
};

export default Table;
