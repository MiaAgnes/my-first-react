import {useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function updateCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={updateCount}>Increment</button>
        </div>
    );
}