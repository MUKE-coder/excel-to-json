import * as XLSX from "xlsx";

function convertArrayToExcel(data: any[], filename: string) {
  // Create a new workbook
  const workbook = XLSX.utils.book_new();

  // Convert the array of objects to a worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Write the workbook to a file
  XLSX.writeFile(workbook, filename);
}

export default convertArrayToExcel;

const data = [
  { name: "John", age: 30, city: "New York" },
  { name: "Alice", age: 25, city: "Los Angeles" },
  { name: "Bob", age: 35, city: "Chicago" },
];

convertArrayToExcel(data, "example.xlsx");
