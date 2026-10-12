import React from "react";
export default function ChildComponent1({updateoption}){
    return(
        <div>
<h2>
    ChildComponent1
</h2>
<button onClick={()=>updateoption("option1")}>option1</button>
        </div>
    )
}