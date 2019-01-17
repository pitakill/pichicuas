import * as d3 from 'd3';

class Service {
  constructor() {
    this.service = d3;
  }

  _get(url, type) {
    return this.service[type](url);
  }

  get(url) {
    // This assumes that the url has the filename type in the string
    return this._get(url, url.split('.').pop());
  }
}

export default new Service();
