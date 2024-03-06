import { useState } from "react";
import { useForm } from "react-hook-form";

import "./PlusMul.css";

function PlusMul() {

    const {
        register,
        handleSubmit,
        formState: {isSubmitting, isSubmitted, errors}
    } = useForm();

    const [first,setFirst] = useState(0);
    const [second,setSecond] = useState(0);
    const [result,setResult] = useState(0);

    const submitForm = (data) => {
        console.log(data);
        const buttonName = window.event.submitter.name;
        console.log(buttonName);
        if (buttonName === "plus") {
            const result = parseInt(data.first) + parseInt(data.second);
            setResult(result); 
        } else {
            const result = parseInt(data.first) * parseInt(data.second);
            setResult(result); 
        }
       
    };

    // const [num,setNum] = useState(0);
    // const [num1,setNum1] = useState(0);
    // const [num2,setNum2] = useState(0);

    // const handleFirstNum = (e) => {
    //     setNum1(Number(e.target.value))
    // }

    // const handleFirstNum2 = (e) => {
    //     const num = e.target.value;
    //     setNum1(num);
    // }

    // const handleSecondNum = (e) => {
    //     setNum2(Number(e.target.value))
    // }

    // const handleSecondNum2 = (e) => {
    //     const num = e.target.value;
    //     setNum2(num);
    // }

    // const onPlus = () => {
    //     setNum(num1 + num2);
    // }

    // const onMul = () => {
    //     setNum(num1 * num2);
    // }

    return (
        <>  
            {/* <h1>덧셋/곱셈</h1>
            <input type="text" placeholder="첫번째 숫자 입력" onChange={handleFirstNum}/>
            <br/>
            <input type="text" placeholder="두번째 숫자 입력" onChange={handleSecondNum}/>
            <br/>
            <br/>
            <button onClick={onPlus}>+</button>
            <button onClick={onMul}>*</button>
            <br/>
            <h1>결과 : {num}</h1> */}

            <form onSubmit={handleSubmit(submitForm)}>
                <input type="text" name="firstNum" id="firstNum" 
                    aria-invalid={isSubmitted ? (errors.first ? "true" : "false") : undefined}
                    {...register("first",
                            {required: "첫번째 숫자는 필수입니다.",
                               min: {
                                    value: 0,
                                    message: "첫번째 숫자는 0이상 입력바랍니다."
                               },
                            onChange: (e) => setFirst(e.target.value)})}
                />
                {errors.first && <small role="alert">{errors.first.message}</small>}
                <br/>
                <input type="text" name="secondNum" id="secondNum" 
                    aria-invalid={isSubmitted ? (errors.second ? "true" : "false") : undefined}
                    {...register("second",
                            {required: "두번째 숫자는 필수입니다.",
                            min: {
                                value: 0,
                                message: "두번째 숫자는 0이상 입력바랍니다."
                           },
                            onChange: (e) => setSecond(e.target.value)})}
                />
                {errors.second && <small role="alert">{errors.second.message}</small>}
                <br/>
                <br/>
                <button type="submit" name="plus" disabled={isSubmitting}>+</button>
                <button type="submit" name="mul" disabled={isSubmitting}>*</button>
                <br/>
                <span>{result}</span>
            </form>

        </>
    );
}

export default PlusMul;