import { useState } from "react";

import { useTranslation } from "react-i18next";

import CsvUploader from "./CsvUploader";

function TableRenderer({ config }) {
  const { t } = useTranslation();

  const [tableData, setTableData] =
    useState(config.rows || []);

  const columns =
    config.columns || [];

  return (
    <div className="runtime-card">
      <h2 className="runtime-title">
        {t(config.title)}
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
                  {t(col)}
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
                {t("noDataFound")}
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
                        {typeof row[
                          col
                        ] ===
                        "string"
                          ? t(
                              row[
                                col
                              ].toLowerCase()
                            )
                          : row[
                              col
                            ] || "-"}
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