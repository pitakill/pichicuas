import React from 'react';
import * as d3 from 'd3';

import './styles.css';

class Chart extends React.Component {
  state = {
    data: [100,200,300,400,500],
    width: 500,
    height: 500,
  }

  componentDidMount() {
    this.element = document.getElementById('Chart');

    // We don't have a back end service. So we can emulate the draw with a delay
    // With this approach the chart is not showed
    setTimeout(() => this.drawChart(), 350);
  }

  drawChart = () => {
    const {data, height, width} = this.state;

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    const barWidth = width / data.length;

    // Create "space" for chart
    const chart = d3
      .select(this.element)
      .attr('width', width)
      .attr('height', height);

    // Create bars
    const bar = chart
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${i * barWidth}, 0)`);

    // Create rect
    bar
      .append('rect')
      .attr('y', (d) => y(d))
      .attr('width', barWidth - 1 )
      .attr('height', (d) => height - y(d));

    // Create text
    bar
      .append('text')
      .attr('x', (barWidth / 2) + 9)
      .attr('y', (d) => y(d) + 3)
      .attr('dy', '.75em')
      .text((d) => d);
  }

  render() {
    return (
      <div className="Chart-wrapper">
        <svg id="Chart" />
      </div>
    );
  }
}

export default Chart;
