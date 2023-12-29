import React, { useState } from 'react';
import './App.css';

function App() {

    const [no, setno] = useState('');
    const [fval,setfval]=useState();
    const [sign,setsign]=useState();

    const num = (n) => {
      setno(no+n);

      if(n === 'C'){
        setno('');
      }

    }

    const action = (s) => {
      setfval(no);
      setno('');
      setsign(s);
    }

    const erase = () => {
      setno(no.substr(0,(no.length)-1));
    }

    const ans = () => {

      if (sign === '+') {
        setno(parseInt(fval) + parseInt(no));
      } else if (sign === '-') {
        setno(parseInt(fval) - parseInt(no));
      } else if (sign === '*') {
        setno(parseInt(fval) * parseInt(no));
      } else if (sign === '/') {
        if (parseInt(no) === 0) {
          setno("Error: Division by zero");
        } else {
          setno(parseInt(fval) / parseInt(no));
        }
      }

    }

  return (
    <>
      
      <div className="box">
        <input type="text" name="" value={no} readOnly />
        <div className="btn">
          <input type="button" value="7"  onClick={(e)=>{num(e.target.value)}}/>
          <input type="button" value="8"  onClick={(e)=>{num(e.target.value)}}/>
          <input type="button" value="9"  onClick={(e)=>{num(e.target.value)}}/>
          <input type="button" value="+"  onClick={(e)=>{action(e.target.value)}}/>
          <input type="button" value="4"  onClick={(e)=>{num(e.target.value)}}/>
          <input type="button" value="5"  onClick={(e)=>{num(e.target.value)}}/>
          <input type="button" value="6"  onClick={(e)=>{num(e.target.value)}}/>
          <input type="button" value="-"  onClick={(e)=>{action(e.target.value)}}/>
          <input type="button" value="1"  onClick={(e)=>{num(e.target.value)}}/>
          <input type="button" value="2"  onClick={(e)=>{num(e.target.value)}}/>
          <input type="button" value="3"  onClick={(e)=>{num(e.target.value)}}/>
          <input type="button" value="*"  onClick={(e)=>{action(e.target.value)}}/>
          <input type="button" value="0"  onClick={(e)=>{num(e.target.value)}}/>
          <input type="button" value="c"  onClick={() => num('C')}/>
          <input type="button" value="="  onClick={ans}/>
          <input type="button" value="/"  onClick={(e)=>{action(e.target.value)}}/>
          <input type="button" value="Back" onClick={erase}/>
        </div>
      </div>

    </>
  );
}

export default App;
