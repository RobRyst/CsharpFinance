import {
  AllCommunityModule,
  ModuleRegistry,
  themeMaterial,
} from "ag-grid-community";
import ActionCellRenderer from "./ActionCellRenderer";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
//import { useState } from "react";

ModuleRegistry.registerModules([AllCommunityModule]);

const InvoiceTable = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5086/api/invoice/with-user")
      .then((response) => {
        setRowData(response.data);
      })
      .catch((error) => console.error("Failed to fetch", error));
  }, []);

  const columnDefs = useMemo(() => {
    const onDeleteSuccess = (deletedId) => {
      setRowData((prev) => prev.filter((row) => row.id !== deletedId));
    };

    return [
      { field: "id", headerName: "Id", sortable: true, filter: true },
      {
        field: "firstName",
        headerName: "First Name",
        sortable: true,
        filter: true,
      },
      {
        field: "lastName",
        headerName: "Last Name",
        sortable: true,
        filter: true,
      },
      { field: "status", headerName: "Status", sortable: true, filter: true },
      {
        field: "sub_total",
        headerName: "SubTotal",
        sortable: true,
        filter: true,
      },
      {
        field: "discount",
        headerName: "Discount",
        sortable: true,
        filter: true,
      },
      { field: "total", headerName: "Total", sortable: true, filter: true },
      {
        field: "invoiceCreated",
        headerName: "Created",
        sortable: true,
        filter: true,
      },
      {
        field: "invoiceDueDate",
        headerName: "Due Date",
        sortable: true,
        filter: true,
      },
      {
        headerName: "Actions",
        cellRenderer: "actionCellRenderer",
        maxWidth: 160,
        flex: 0, // prevent it from expanding too much
        cellRendererParams: { onDeleteSuccess },
        sortable: false, // Actions column usually shouldn't be sortable
        filter: false, // Actions column usually shouldn't be filtered
      },
    ];
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
      <AgGridReact
        theme={themeMaterial}
        rowData={rowData}
        columnDefs={columnDefs}
        components={{ actionCellRenderer: ActionCellRenderer }}
        defaultColDef={{ resizable: true, flex: 1 }}
      />
    </div>
  );
};

export default InvoiceTable;
