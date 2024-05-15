const Result = ({getInput}) => {
    const stacks_array = [
        {
          name: "React",
          img: <p><img src="./../../images/React.png"/></p>
        //   import.meta.env.PUBLIC_URL + "./images/React.png"
        },
        {
          name: "Java",
          img: <p><img src="./../../images/Java.png"/></p>
        },
        {
          name: "Kotlin",
          img: <p><img src="./../../images/Kotlin.png"/></p>
        },
        {
          name: "Mysql",
          img: <p><img src="./../../images/Mysql.png"/></p>
        },
        {
          name: "Python",
          img: <p><img src="./../../images/Python.png"/></p>
        },
        {
          name: "Spring",
          img: <p><img src="./../../images/Spring.png"/></p>
        },
        {
          name: "Swift",
          img: <p><img src="./../../images/Swift.png"/></p>
        },
        {
          name: "Vue",
          img: <p><img src="./../../images/Vue.png"/></p>
        },
      ];
    
    return (       
        <div>
            { 
            getInput  === "Java" 
            ? <p><img src="./../../images/Java.png"/></p>
            : getInput  === "Spring" 
            ? <p><img src="./../../images/Spring.png"/></p>
            : getInput  === "Vue" 
            ? <p><img src="./../../images/Vue.png"/></p>
            : getInput  === "Mysql" 
            ? <p><img src="./../../images/Mysql.png"/></p>
            : getInput  === "Swift" 
            ? <p><img src="./../../images/Swift.png"/></p>
            : getInput  === "Python" 
            ? <p><img src="./../../images/Python.png"/></p>
            : getInput  === "React" 
            ? <p><img src="./../../images/React.png"/></p>
            : getInput  === "Kotlin" 
            ? <p><img src="./../../images/Kotlin.png"/></p>
            : alert("해당 스택은 없습니다!")
            }            
      </div>
    )
}

export default Result;