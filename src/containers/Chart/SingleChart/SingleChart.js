import React, { PureComponent } from 'react'
import { NodeGroup } from 'react-move'
import Surface from '../../../components/Surface/Surface';
import { scaleLinear, scaleBand } from 'd3-scale'
import { easeExpInOut } from 'd3-ease'
import { ascending, max } from 'd3-array'
import Button from '../../../components/UI/Buttons/ButtonSpecial';
import classes from './SingleChart.module.css';



const view = [1000, 450] // [width, height]
const trbl = [30, 2, 30, 2] // [top, right, bottom, left] margins

const dims = [
    view[0] - trbl[1] - trbl[3],
    view[1] - trbl[0] - trbl[2],
]


class SingleChart extends PureComponent {
    state = {
        sortAlpha: true,
    }
    y = scaleLinear()
        .range([dims[1], 0])
        .domain([0, max(this.props.chartData, (d) => d.frequency)]);

    update = () => {
        this.setState((state) => ({
            sortAlpha: !state.sortAlpha,
        }))
    }

    render() {

        const { sortAlpha } = this.state

        const sorted = this.props.chartData.sort(sortAlpha ?
            (a, b) => ascending(a.name, b.name) :
            (a, b) => a.frequency - b.frequency,
        ).slice(0)

        const scale = scaleBand()
            .rangeRound([0, dims[0]])
            .domain(sorted.map((d) => d.name))
            .padding(0.1)

        const width = scale.bandwidth()

        return (
            <div className={classes.ChartMainDiv}>
                <Surface view={view} trbl={trbl}>
                    <NodeGroup
                        data={sorted}
                        keyAccessor={(d) => d.name}

                        start={() => ({
                            opacity: 1e-6,
                            x: 1e-6,
                        })}

                        enter={(d) => ({
                            opacity: [0.7],
                            x: [scale(d.name)],
                            timing: { duration: 750, ease: easeExpInOut },
                        })}

                        update={(d, i) => ({
                            opacity: [0.7],
                            x: [scale(d.name)],
                            timing: { duration: 750, delay: i * 50, ease: easeExpInOut },
                        })}

                        leave={() => ({
                            opacity: [1e-6],
                            x: [scale.range()[1]],
                            timing: { duration: 750, ease: easeExpInOut },
                        })}
                    >
                        {(nodes) => (
                            <g>
                                {nodes.map(({ key, data, state: { x, opacity } }) => (
                                    <g key={key} transform={`translate(${x},0)`}>
                                        <text
                                            x={0}
                                            y={this.y(data.frequency)+20}
                                            // dx="-.35em"
                                            dx={(width-data.frequency.toString().length*13)/2}
                                            fill="#dadada"
                                        >{data.frequency}</text>
                                        <rect
                                            height={dims[1] - this.y(data.frequency)}
                                            y={this.y(data.frequency)}
                                            fill="darkred"
                                            width={width}
                                            opacity={opacity}
                                        />
                                        <text
                                            style={{
                                                fontSize: "0.9em"
                                            }}
                                            x={0}
                                            y={dims[1] + 15}
                                            // dx="-.35em"
                                            dx={(width-data.name.length*8)/2}
                                            fill="#dadada"
                                        >{data.name}</text>
                                    </g>
                                ))}
                            </g>
                        )}
                    </NodeGroup>
                </Surface>
                <Button click={this.update}>
                    {`Sort by ${sortAlpha ? 'Value' : 'Name'}`}
                </Button>
            </div>
        )
    }
}

export default SingleChart;