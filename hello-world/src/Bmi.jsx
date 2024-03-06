import { useState } from "react";
import { useForm } from "react-hook-form";

function Bmi() {

     // const handleFirstNum = (e) => {
    //     setNum1(Number(e.target.value))
    // }

    // const handleSecondNum = (e) => {
    //     setNum2(Number(e.target.value))
    // }

    // const onResult = () => {
    //     const height = num1 / 100;
    //     const result = (num2 / (height*height)).toFixed(2);
    //     setNum(result);
    // }


    const {
        register,
        handleSubmit,
        formState: {isSubmitting, isSubmitted, errors}
    } = useForm();

    const [num,setNum] = useState(0);
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);

    const submitForm = (data) => {
        const height = parseInt(data.num1) / 100;
        const result = (parseInt(num2) / (height*height)).toFixed(2);
        setNum(result);
    };

    return (
        <>  
            <h1>체질량지수 구하기</h1>
            
            <form onSubmit={handleSubmit(submitForm)}>
                <input type="text" name="num1" id="num1" placeholder="키(cm)" 
                    aria-invalid={isSubmitted ? (errors.num1 ? "true" : "false") : undefined}
                    {...register("num1",
                    {required: "키는 필수입력입니다.",
                       min: {
                            value: 100,
                            message: "키는 100cm이상으로 입력바랍니다."
                       },
                    onChange: (e) => setNum1(e.target.value)})}
                />
                {errors.num1 && <small role="alert">{errors.num1.message}</small>}
                <br/>
                <input type="text" name="num2" id="num2" placeholder="몸무게(kg)"
                    aria-invalid={isSubmitted ? (errors.num2 ? "true" : "false") : undefined}
                    {...register("num2",
                    {required: "몸무게는 필수입력입니다.",
                       min: {
                            value: 30,
                            message: "몸무게는 30kg이상 입력바랍니다."
                       },
                    onChange: (e) => setNum2(e.target.value)})}

                />
                {errors.num2 && <small role="alert">{errors.num2.message}</small>}

                <br/>
                <br/>
                <button type="submit" disabled={isSubmitting}>계산</button>
                <br/>
                <h1>BMI : {num}</h1>
            </form>
         
        </>
    );
}

export default Bmi;