import React from 'react'
import PropTypes from 'prop-types'

export default function Surface(props) {
    const { className, view, trbl, style, children, ...other } = props
    const paddingBottom = `${Math.round((view[1] / view[0]) * 100)}%`

    // uses bottom-padding hack. See https://css-tricks.com/scale-svg/
    return (
        <div
            className={className}
            style={{
                ...style,
                position: 'relative',
                width: '100%',
                height: '0px',
                paddingBottom,
            }}
            {...other}
        >
            <svg
                viewBox={`0 0 ${view[0]} ${view[1]}`}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                }}
            >
                <g transform={`translate(${trbl[3]} ,${trbl[0]})`}>{children}</g>
            </svg>
        </div>
    )
}

Surface.propTypes = {
    children: PropTypes.node,
    sName: PropTypes.string,
    style: PropTypes.object,
    trbl: PropTypes.array,
    view: PropTypes.array,
}

Surface.defaultProps = {
    view: [1000, 350],
    trbl: [10, 10, 10, 10],
}