import React from 'react';
import * as d3 from 'd3';

import './styles.css';

class Chart extends React.Component {
  componentDidMount() {
    this.element = document.getElementById('Chart');

    this.drawChart();
  }

  drawChart = () => {
    d3
      .select(this.element)
      .selectAll('div')
      .data([100,200,300,400,500])
        .enter()
        .append('div')
        .style('width', d => `${d}px`)
        .text(d => d);
  }

  render() {
    return (
      <svg id="Chart" width="500" height="120">
        <g transform="translate(0,0)">
          <rect width="100" height="19"></rect>
          <text x="97" y="9.5" dy=".35em">100</text>
        </g>
        <g transform="translate(0,20)">
          <rect width="200" height="19"></rect>
          <text x="197" y="9.5" dy=".35em">200</text>
        </g>
        <g transform="translate(0,40)">
          <rect width="300" height="19"></rect>
          <text x="297" y="9.5" dy=".35em">300</text>
        </g>
        <g transform="translate(0,60)">
          <rect width="400" height="19"></rect>
          <text x="397" y="9.5" dy=".35em">400</text>
        </g>
        <g transform="translate(0,80)">
          <rect width="500" height="19"></rect>
          <text x="497" y="9.5" dy=".35em">500</text>
        </g>
      </svg>
    );
  }
}

export default Chart;
