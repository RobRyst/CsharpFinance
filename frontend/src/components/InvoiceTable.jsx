import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import ActionCellRenderer from "./ActionCellRenderer";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useMemo, useState, useRef } from "react";
import axios from "axios";

ModuleRegistry.registerModules([AllCommunityModule]);

const InvoiceTable = ({ filterTable }) => {
  const [rowData, setRowData] = useState([]);
  const gridApi = useRef(null);

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
        flex: 0,
        cellRendererParams: { onDeleteSuccess },
        sortable: false,
        filter: false,
      },
    ];
  }, []);

  const onGridReady = (params) => {
    gridApi.current = params.api;

    if (filterTable) {
      params.api.setGridOption("quickFilterText", filterTable);
    }
  };

  useEffect(() => {
    if (gridApi.current) {
      gridApi.current.setGridOption("quickFilterText", filterTable);
    }
  }, [filterTable]);

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
      <AgGridReact
        onGridReady={onGridReady}
        rowData={rowData}
        columnDefs={columnDefs}
        components={{ actionCellRenderer: ActionCellRenderer }}
        defaultColDef={{ resizable: true, flex: 1 }}
      />
    </div>
  );
};

export default InvoiceTable;
