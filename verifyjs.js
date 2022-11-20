const d=document;
const setotp=748834;
const input=d.querySelectorAll(".otps");
const otp_arry=new Array();
input[0].focus();
input.forEach((element,index)=>{
    
    element.addEventListener("keydown",(event)=>{
        if(event.key>=0&&event.key<=9&&event.key!=" ")
        {  if(input[index+1]!==undefined)
            {  
                otp_arry.push(event.key);
                setTimeout(()=>{
                    input[index+1].focus();
                    input[index].classList.add("datap");
                    
                  },100)
                
            }
            else
            {
                input[index].classList.add("datap");
                otp_arry.push(event.key);
                if(otp_arry.length===6)
                {  let valo=otp_arry.reduce((acc,el)=>{
                           return  acc+el.toString();
                       },"")


                    setTimeout(()=>{
                        if(Number(valo)==setotp)
                          alert("VERIFIED 🤗🤗🤗🤗🤗🤗");
                          else
                          {
                            alert("INVALID OTP 😢😢😢😢😢😢");
                          }
                        
                     },100)
                }
              
            }
            
        }

       
            if(event.key=="Backspace")
            {    if(input[index-1]!=undefined&&input[index-1].value!="")
                 {
                    setTimeout(()=>{
                        input[index-1].focus();
                        input[index].classList.remove("datap");
                         otp_arry.pop(); 
                    },100)
                         
                 }
                 else
                 {
                    input[index].classList.remove("datap");
                    otp_arry.pop(); 
                 }
                
            }
          

       
    });

   
})


