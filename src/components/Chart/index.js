import React from 'react';
import * as d3 from 'd3';

import './styles.css';

import {dataURL} from '../../constants';
import HTTPService from '../../http';

class Chart extends React.Component {
  state = {
    data: [],
    width: 500,
    height: 500,
  }

  async componentDidMount() {
    this.element = document.getElementById('Chart');

    await this.getData();
    await this.drawChart();
  }

  transform = (data) => {
    // We want the fourth element of the columns
    const key = data.columns[3];
    const stations = [];
    const stationsSeen = {};

    data.forEach(e => {
      const name = e[key].split(' · ').pop();

      if (!stationsSeen[name]) {
        stationsSeen[name] = 1;
        return
      }

      stationsSeen[name]++;
    });

    for (let name in stationsSeen) {
      if (stationsSeen[name] >= 4) {
        stations.push({
          name,
          numberOfStations: stationsSeen[name],
        });
      }
    }

    this.setState({data: stations});
  }

  getData = () => {
    return HTTPService
      .get(dataURL)
      .then(this.transform)
      .then()
  }

  drawChart = () => {
    const {data, height, width} = this.state;

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.numberOfStations)])
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
      .attr('transform', (d, i) => `translate(${i * barWidth}, 0)`)
      .on('mouseover', (d, i, e) => d3.select(e[i]).raise())

    // Create rect
    bar
      .append('rect')
      .attr('y', (d) => y(d.numberOfStations))
      .attr('width', barWidth - 1 )
      .attr('height', (d) => height - y(d.numberOfStations));

    // Create text
    bar
      .append('text')
      .attr('y', (d) => y(d.numberOfStations) + 3)
      .attr('dy', '.75em')
      .text((d) => d.name)
      .attr('x', (d, i, e) => (barWidth / 2) + (e[i].getBBox().width / 2))
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
