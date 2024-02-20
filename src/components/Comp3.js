import React, {useState} from 'react'

export default function Comp3() {
  const [preState, updatedState] = useState( {
    color: "black",
    backgroundColor: "white",
  });
  
  const [preTitle, postTitle] = useState("Enable dark mode");
  const Toggle = () => {
    if (preState.color === 'black'){
        updatedState({
            color: "white",
            backgroundColor: "black",
        })
        postTitle("Enable light mode");
    }
    else{
        updatedState({
            color: "black",
            backgroundColor: "White",
        })
        postTitle("Enable dark mode");
    }
  }

  return (<>
    <button type="button" className="btn btn-secondary" onClick={Toggle} style={preState}>{preTitle}</button>
    <div style={preState}>
        <div className="accordion my-3" id="accordionExample" style={preState}>
            <div className="accordion-item" style={preState}>
                <h2 className="accordion-header" style={preState}>
                    <button className="accordion-button" type="button" style={preState} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={preState}>
                <h2 className="accordion-header" style={preState}>
                <button className="accordion-button collapsed" type="button" style={preState} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={preState}>
                <h2 className="accordion-header" style={preState}>
                <button className="accordion-button collapsed" type="button" style={preState} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
