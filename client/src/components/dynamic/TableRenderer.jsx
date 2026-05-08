import { useState } from "react";

import CsvUploader from "./CsvUploader";

function TableRenderer({ config }) {
  const [tableData, setTableData] =
    useState(config.rows || []);

  const columns =
    config.columns || [];

  return (
    <div className="runtime-card">
      <h2 className="runtime-title">
        {config.title ||
          "Dynamic Table"}
      </h2>

      <CsvUploader
        setTableData={setTableData}
      />

      <table className="runtime-table">
        <thead>
          <tr>
            {columns.map(
              (col, index) => (
                <th key={index}>
                  {col}
                </th>
              )
            )}
          </tr>
        </thead>

        <tbody>
          {tableData.length === 0 ? (
            <tr>
              <td
                colSpan={
                  columns.length
                }
              >
                No Data Found
              </td>
            </tr>
          ) : (
            tableData.map(
              (row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map(
                    (
                      col,
                      colIndex
                    ) => (
                      <td
                        key={colIndex}
                      >
                        {row[col] ||
                          "-"}
                      </td>
                    )
                  )}
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableRenderer;