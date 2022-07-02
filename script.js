const countdown=document.querySelector(".countdown")
const body=document.querySelector("body")
let timer=10

countdown.innerText=timer--;
setTimeout(()=>{
    countdown.innerText=timer--;
    setTimeout(()=>{
        countdown.innerText=timer--; 
        setTimeout(()=>{
            countdown.innerText=timer--; 
            setTimeout(()=>{
                countdown.innerText=timer--;
                setTimeout(()=>{
                    countdown.innerText=timer--; 
                    setTimeout(()=>{
                        countdown.innerText=timer--;
                        setTimeout(()=>{
                            countdown.innerText=timer--; 
                            setTimeout(()=>{
                                countdown.innerText=timer--;
                                setTimeout(()=>{
                                    countdown.innerText=timer--;
                                    setTimeout(()=>{
                                        countdown.innerText="Happy Independence Day"
                                    },800)
                                },800)   
                            },800)  
                        },800)   
                    },800)  
                },800)   
            },800)  
        },800)  
    },800)   
},800)