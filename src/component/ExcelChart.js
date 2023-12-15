import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as XLSX from 'xlsx';


const ExcelChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/List.xlsx'); // Update with your Excel file path
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        // Extract experience data
        const experienceData = jsonData.map(entry => ({
          experience: entry['Experience'],
          count: 1,
        }));

        // Group by experience
        const groupedData = d3.group(experienceData, d => d.experience);

        // Convert to array
        const chartData = Array.from(groupedData, ([experience, values]) => ({ experience, count: values.length }));

        // Create chart
        const width = 400;
        const height = 300;
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };

        const svg = d3.select(chartRef.current)
          .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scaleBand()
          .domain(chartData.map(d => d.experience))
          .range([0, width])
          .padding(0.1);

        const y = d3.scaleLinear()
          .domain([0, d3.max(chartData, d => d.count)])
          .range([height, 0]);

        svg.selectAll('.bar')
          .data(chartData)
          .enter().append('rect')
          .attr('class', 'bar')
          .attr('x', d => x(d.experience))
          .attr('width', x.bandwidth())
          .attr('y', d => y(d.count))
          .attr('height', d => height - y(d.count));

        svg.append('g')
          .attr('transform', `translate(0,${height})`)
          .call(d3.axisBottom(x));

        svg.append('g')
          .call(d3.axisLeft(y));
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      }
    };

    fetchData();
  }, []);

  return <div ref={chartRef} />;
};

export default ExcelChart;
