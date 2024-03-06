// useState라는 리액트 훅 기능을 사용하겠다는 뜻
import { useState } from "react";

function Counter(){

    const [num, setNum] = useState(0); //const[상태 값 저장 변수, 상태 값 갱신 함수] = useState(상태 초기값)

    const onIncrease = () => {
        setNum(num => num+1);
    };

    const onDecrease = () => {
        setNum(num => num-1);
    };

    return  (
        <>
            <h1>{num}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            {/* <button onClick={()=> setNum(num+1)}>+1</button> */}
            {/* <button onClick={()=> setNum(num-1)}>-1</button> */}
        </>
    );
}

export default Counter;