import React from 'react'
import PropTypes from 'prop-types'

function Alert(props) {
    const capitalise = (word) =>
    {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
    return (
        <>
        
        <div style={{height:"50px"}}>
        {props.alert && <div id='alerts' className= {`alert alert-${props.alert.type} alert-dismissible fade show `}role="alert">        
                {/* <img id='image2' src="ad.jpeg" alt="idk" />
                <img id='image2' src="ad2.png" alt="idk" />
                <img id='image2' src="ad.jpeg" alt="idk" />
                <img id='image2' src="ad.jpeg" alt="idk" />
                <img id='image2' src="ad2.png" alt="idk" />
                <img id='image2' src="ad.jpeg" alt="idk" /> */}
                <strong><b>{capitalise(props.alert.type)}:</b>  </strong>{props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
        </>
    )
}


export default Alert;