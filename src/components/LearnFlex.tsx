import React from 'react';
import "./LearnFlex.css";

export function Content1({index}: {index: number}) {
    return <div style= {{height: 50, width: 60, backgroundColor: 'red', borderColor: 'cyan', borderStyle: 'solid', margin: 10}} >Content {index}</div>
}

export function FlexContainer() {
    return <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', 
    justifyContent: 'space-around',
    // alignItems: 'center',
    height:600, width: 700, backgroundColor: 'green'}} >
        {Array(5).fill(0).map((value, index) => <Content1 index={index}/>)}
    </div>
}
