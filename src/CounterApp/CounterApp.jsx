import React, { useState } from 'react'
import './CounterApp.css'


const CounterApp = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <div className="counter_conta">
            <h1>COUNTER APP</h1>
            <div className="count_display">{count}</div>

            <div className="button-group">
                <button onClick={()=> setCount(count-1)} className='btn dec'>-</button>
                <button onClick={()=> setCount(0)} className='btn reset'>RESET</button>
                <button onClick={()=> setCount (count+1)} className='btn add'>+</button>
            </div>
        </div>
    </div>
  )
}

export default CounterApp