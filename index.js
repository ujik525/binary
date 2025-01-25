//input digit=1
function digit(e){
    if(e.value.length>1){
        e.value=e.value.slice(0, 1);
    }
}

function nscal(){
    let y=[];
    let z=[];
    let sumAb=0;
    let sumY=0;

    for(let i=1; i<6; i++){
        y.push(parseInt(document.querySelector("#y-"+String(i)).value));
        z.push(parseInt(document.querySelector("#z-"+String(i)).value));
    }
    
    for(let i=0; i<5; i++){
        if(!isNaN(y[i])&&!isNaN(z[i])){
            let a=y[i];
            let b=z[i];
            sumAb+=a*b;
            sumY+=a;
        }
    }
    let result = (sumAb/sumY).toFixed(2);
    document.querySelector('#result').value=result;
}