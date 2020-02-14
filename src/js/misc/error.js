import { select } from 'd3-selection'

// call this to add a warning icon to a graph and log an error to the console
export function error (args) {
  console.error(`ERROR : ${args.target} : ${args.error}`)

  select(args.target).select('.mg-chart-title')
    .append('tspan')
    .attr('class', 'fa fa-x fa-exclamation-circle mg-warning')
    .attr('dx', '0.3em')
    .text('\uf06a')
}

export function internalError (args) {
  console.error(`INTERNAL ERROR : ${args.target} : ${args.internalError}`)
}
