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
      <div id="Chart" />
    );
  }
}

export default Chart;
