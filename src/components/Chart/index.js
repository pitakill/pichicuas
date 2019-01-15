import React from 'react';
import * as d3 from 'd3';

import './styles.css';

class Chart extends React.Component {
  state = {
    data: [100,200,300,400,500],
    width: 500,
    height: 20,
  }

  componentDidMount() {
    this.element = document.getElementById('Chart');

    this.drawChart();
  }

  drawChart = () => {
    const {data, height, width} = this.state;

    const x = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, width]);

    // Create "space" for chart
    const chart = d3
      .select(this.element)
      .attr('width', width)
      .attr('height', height * data.length);

    // Create bars
    const bar = chart
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(0, ${i * height})`);

    // Create rect
    bar
      .append('rect')
      .attr('width', x)
      .attr('height', height - 1);

    // Create text
    bar
      .append('text')
      .attr('x', (d) => x(d) - 3)
      .attr('y', height / 2)
      .attr('dy', '.35em')
      .text((d) => d);
  }

  render() {
    return (
      <svg id="Chart" />
    );
  }
}

export default Chart;
