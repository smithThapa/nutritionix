import React from 'react'

export default function AddButton(props) {
    return (
        <div>
            <div className="add-button" onClick={()=> {props.inputRef.current.focus()}}>
                +
            </div>
        </div>
    )
}
