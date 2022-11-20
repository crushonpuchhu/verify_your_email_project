const d=document;
const input=d.querySelectorAll(".otps");
const otp_arry=new Array();
input[0].focus();
input.forEach((element,index)=>{
    
    element.addEventListener("keydown",(event)=>{
        if(event.key>=0&&event.key<=9&&event.key!=" ")
        {  if(input[index+1]!==undefined)
            {  console.log(event.key);
                otp_arry.push(event.key);
                setTimeout(()=>{
                    input[index+1].focus();
                  },100)
                
            }
            else
            {
                console.log(event.key); 
                otp_arry.push(event.key);
            }
            
        }

       
            if(event.key=="Backspace")
            {    if(input[index-1]!=undefined)
                setTimeout(()=>{
                input[index-1].focus();
            },100)
                 
                
            }
          

       
    });

   
})

