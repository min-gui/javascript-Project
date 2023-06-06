import React, {useState} from "react";

const Input = () => {
    //num, setNumber는 num을 정의하는 setter 함수
    const [txtValue, setTextValue] = useState("");

    const onChange = (e) => {
        setTextValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={txtValue} onChange={onChange}/>
            <br />
            <p>{txtValue}</p>
        </div>
    );
};

export default Input;