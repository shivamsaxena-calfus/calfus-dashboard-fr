// ExcelReader.js

import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import PieChart from './PieChartComponent'; // Import your PieChart component

const ExcelReader = () => {
  const [excelData, setExcelData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('C:/Users/Calfus/Desktop/calfus-dashboard/src/component/List.xlsx'); // Adjust the path based on your project structure
        const blob = await response.blob();

        const fileData = await readFile(blob);
        setExcelData(fileData);
      } catch (error) {
        console.error('Error reading the file:', error);
      }
    };

    fetchData();
  }, []);

  const readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        try {
          const binaryString = event.target.result;
          const workbook = XLSX.read(binaryString, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          resolve(jsonData);
        } catch (error) {
          reject(error);
        }
      };

      reader.readAsBinaryString(file);
    });
  };

  return (
    <div>
      {excelData && <PieChart data={excelData} />}
    </div>
  );
};

export default ExcelReader;
