let counter = document.querySelectorAll('#counter')
counter.forEach(counter => {
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let increment = target /150 ;
    let interval = setInterval(()=>{
        count +=increment;
        if (count >=target){
            counter.innerText =target;
            clearInterval(interval);
        }
        else{
            counter.innerText = Math.floor(count);
        }
    },10);
    
});