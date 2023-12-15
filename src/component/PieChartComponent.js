import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data) {
      const expData = d3.groups(data, d => d['Exp Range']);

      const width = 400;
      const height = 400;
      const radius = Math.min(width, height) / 2;

      const chart = d3.select(chartRef.current);

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

      const pie = d3.pie()
        .sort(null)
        .value(d => d[1].length);

      chart.selectAll('*').remove();

      const chartWrapper = chart
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

      const g = chartWrapper.selectAll('.arc')
        .data(pie(expData))
        .enter()
        .append('g')
        .attr('class', 'arc');

      g.append('path')
        .attr('d', arc)
        .style('fill', d => color(d.data));

      // You can add legends, tooltips, etc., as needed.
    }
  }, [data]);

  return <div ref={chartRef} />;
};

export default PieChartComponent;
