import React from "react";
export default function ChildComponent2({updateoption}){
    return(
        <div>
            <h2>
    ChildComponent2
</h2>
<button onClick={()=>updateoption("option2")}>option2</button>
        </div>
    )
}