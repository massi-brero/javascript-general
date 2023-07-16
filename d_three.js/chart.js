import * as d3 from 'https://unpkg.com/d3?module'

export function drawChart() {
    const DUMMY_DATA = [
        {ID: 'd1', value: 6, region: 'USA'},
        {ID: 'd2', value: 13, region: 'Europe'},
        {ID: 'd3', value: 12, region: 'Asia'},
        {ID: 'd4', value: 14, region: 'Australia'}
    ]

    const xScale = d3
        .scaleBand()
        .domain(DUMMY_DATA.map(datapoint => datapoint.region))
        .rangeRound([0, 250])
        .padding(0.1)

    const yScale = d3
        .scaleLinear()
        .domain([0, 16])
        .range([200, 0])

    const container = d3.select('svg')
        .classed('container', true)

    container
        .selectAll('.bar')
        .data(DUMMY_DATA)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('width', xScale.bandwidth())
        .attr('height', data =>200-yScale(data.value))
        .attr('x', data => xScale(data.region))
        .attr('y', data => yScale(data.value))
}
