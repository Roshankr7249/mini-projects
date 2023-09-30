import React from 'react'

const Square = (props) => {
    return (
        <div onClick={props.onClick}
            className='square'
            style={{ border: '1px solid', height: '100px', width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
        >
            <h5>{props.value}</h5>
        </div>
    )
}

export default Square