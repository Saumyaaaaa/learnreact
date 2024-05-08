import { useRef } from "react";

const LearnUseRef1 = () => {
  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let inputRef=useRef()
  return (
    <div>
      <p ref={ref1}>this is paragraph 1</p>
      <p ref={ref2}> this is paragraph 2</p>
      <div ref={ref3}>saumya</div>
      <button
        onClick={() => {
          ref1.current.style.backgroundColor = "blue";
          ref2.current.style.backgroundColor = "red";
        }}
      >
        Change background color
      </button>
      <button
        onClick={() => {
          ref3.current.innerHTML = "<p>ram</p>";
        }}
      >
        change name
      </button>
      <br />
      <div onClick={()=>{
        inputRef.current.focus()
      }}>
        Address
      </div>
      <input ref={inputRef} />
    </div>
  );
};

export default LearnUseRef1;
