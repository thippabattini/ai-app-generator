import Papa from "papaparse";

import toast from "react-hot-toast";

function CsvUploader({
  setTableData,
}) {
  const handleFileUpload = (
    event
  ) => {
    const file =
      event.target.files[0];

    if (!file) {
      toast.error(
        "No file selected"
      );

      return;
    }

    if (
      !file.name.endsWith(".csv")
    ) {
      toast.error(
        "Please upload a CSV file"
      );

      return;
    }

    if (file.size === 0) {
      toast.error(
        "CSV file is empty"
      );

      return;
    }

    Papa.parse(file, {
      header: true,

      skipEmptyLines: true,

      complete: (results) => {
        try {
          if (
            !results.data ||
            results.data.length === 0
          ) {
            toast.error(
              "No data found in CSV"
            );

            return;
          }

          const cleanedData =
            results.data.filter(
              (row) =>
                Object.values(
                  row
                ).some(
                  (value) =>
                    value !== null &&
                    value !== ""
                )
            );

          if (
            cleanedData.length === 0
          ) {
            toast.error(
              "CSV contains empty rows only"
            );

            return;
          }

          setTableData(
            cleanedData
          );

          toast.success(
            "CSV imported successfully"
          );
        } catch (error) {
          console.error(
            "CSV Processing Error:",
            error
          );

          toast.error(
            "Failed to process CSV"
          );
        }
      },

      error: (error) => {
        console.error(
          "CSV Parse Error:",
          error
        );

        toast.error(
          "Failed to import CSV"
        );
      },
    });
  };

  return (
    <div className="csv-upload-card">
      <h2>
        Import CSV Data
      </h2>

      <input
        type="file"
        accept=".csv"
        onChange={
          handleFileUpload
        }
      />
    </div>
  );
}

export default CsvUploader;