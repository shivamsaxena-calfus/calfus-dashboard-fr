import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarGraph = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Dummy data
    const data = [10, 25, 15, 30, 20];

    // Set up the dimensions
    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Create the SVG element
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create scales
    const xScale = d3.scaleBand()
      .domain(data.map((_, i) => i))
      .range([0, chartWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([chartHeight, 0]);

    // Create bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (_, i) => xScale(i))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => chartHeight - yScale(d))
      .attr('fill', 'steelblue');

    // Add axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append('g')
      .attr('transform', `translate(0,${chartHeight})`)
      .call(xAxis);

    svg.append('g')
      .call(yAxis);

  }, []);

  return <div ref={chartRef}></div>;
};

export default BarGraph;
