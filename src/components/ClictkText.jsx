import { useState } from "react"



function ClickText({question,answer}) {
  const [clickAnswer, setClickAnswer] = useState(true);
  const urlPlus = "../src/assets/images/icon-plus.svg"
  const urlMinus = "../src/assets/images/icon-minus.svg"
  return (
    <>
    <div className="grid my-3 gap-y-4">
          <div className='flex justify-between text-black gap-y-2'>
      <a className="hover:text-[#AD28EB] font-bold" href="#" onClick={()=>setClickAnswer(!clickAnswer)}>{question}</a>
      <img src={clickAnswer ? urlPlus : urlMinus} alt="" />
      
    </div>
    <div>
      <p className="text-[#8B6990] text-left text-xs">{clickAnswer ? answer : null }</p>
      
    </div>
    </div>
  
    </>
  
  );
}


export default ClickText