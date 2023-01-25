import React, { useState } from 'react'

function About(props) {

    // const [myStyle, setMystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })

    let myStyle ={
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode ==='light'? '#eeeded':'rgb(57 69 109)',
        border: '2px solid',
        borderColor: props.mode ==='light'? '#eeeded':'rgb(57 69 109)' 
    }


    return (
        <>
            <div className="accordion" id="box" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1 className='my-3 mx-3'>About Us</h1>
                <div className="accordion-item mx-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={myStyle} aria-expanded="true" aria-controls="collapseOne">
                        <b>Analyzes Text</b> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>How Text is analyzed.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae omnis voluptatum et sequi error quidem aliquid alias voluptatem maxime praesentium, expedita id dolor enim magnam corporis, quasi unde quos voluptas facilis modi? A similique ut eveniet facere. Aliquid assumenda omnis repudiandae distinctio.
                        </div>
                    </div>
                </div>
                <div className="accordion-item mx-1">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={myStyle} aria-expanded="false" aria-controls="collapseTwo">
                        <b>Free to use</b> 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Absolutely FREE of cost</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laudantium, magnam hic culpa quisquam nobis sapiente quae modi eligendi fugit aspernatur ab suscipit rerum iste! Quas fuga esse ut temporibus. Delectus, ab similique. Recusandae quo iste nisi harum est id illum! Culpa?
                        </div>
                    </div>
                </div>
                <div className="accordion-item mx-1">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" style={myStyle} aria-controls="collapseThree">
                        <b>Browser Compatible</b> 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is Browser Compatible</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam similique dolores porro, ut voluptas sequi ab dolorem saepe, nemo optio corporis, qui veritatis. Voluptatibus cupiditate libero dolor ea commodi! Voluptatibus praesentium nobis modi expedita in eos, numquam, ducimus libero suscipit soluta aliquam?
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;
