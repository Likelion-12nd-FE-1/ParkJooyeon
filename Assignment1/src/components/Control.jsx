import { useState } from 'react';

const Control = ({onClickButton}) => {
    const [puts, setPuts] = useState("");

    const putsName = (e) => {
        setPuts(e.target.value);
    }

    const onReset = (e) => {
        setPuts("");
    };

    return (
        <div>
            <input
            value={puts}
            onChange={putsName}
            placeholder={"Stackname"}
            />
            <button
            onClick={()=>{
                onClickButton(puts)
                onReset()
            }}>추가</button>
        </div>
    )

    //추가버튼 없을때.... 없는줄...

    // const nameInputRef = useRef();
    // const [puts, setPuts] = useState('');

    // const onChangeInput = event => {
    //     setPuts(event.target.value);
    // }

    // const formSubHandler = event => {
    //     event.preventDefault();
    //     const putValue = nameInputRef.current.value;
  
    //     //useRef 사용하여 값 출력
    //     console.log(putValue);
    //     //nameInputRef.current.value=''; //DOM을 직접 조작x
    // }

    // return (
    //     <form onSubmit={formSubHandler}>
    //         <input 
    //         type="text" 
    //         id="name" 
    //         ref={nameInputRef} 
    //         onChange={onChangeInput}
    //         value={puts}/>
    //     </form>
    // )  
}

export default Control;