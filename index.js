// 과목1
window.addEventListener("load", function(){
    button.onclick = function () {
        result.value = ''

        // 단위 등급
        let dd = 0
        // 단위
        let d = 0

        let subject = []
        let x = []
        let y = []
        let z = []
        let button = document.getElementById("button");

        for(let i=1; i<11; i++)
        {
            subject.push(  document.getElementById("subject-" + String(i) ).value  )
            x.push(parseInt(  document.getElementById("x-" + String(i) ).value  ));
            y.push(parseInt(  document.getElementById("y-" + String(i) ).value  ));
            z.push(parseInt(  document.getElementById("z-" + String(i) ).value  ));
        }
        
        for(let i=0; i<10; i++)
        {
            let a = x[i]
            let b = y[i]
            let sum = a/b*100;

            if (!isNaN(z[i]))
            d += z[i] 
        
            if (0<=sum && sum<=4){
                result.value += subject[i]+":1  ";
                dd += 1*z[i]
            }else if (sum<=11){
                result.value += subject[i]+":2  ";
                dd += 2*z[i]
            }else if (sum<=23){
                result.value += subject[i]+":3  ";
                dd += 3*z[i]
            }else if (sum<=40){
                result.value += subject[i]+":4  ";
                dd += 4*z[i]
            }else if (sum<=60){
                result.value += subject[i]+":5  ";
                dd += 5*z[i]
            }else if (sum<=77){
                result.value += subject[i]+":6  ";
                dd += 6*z[i]
            }else if (sum<=89){
                result.value += subject[i]+":7  ";
                dd += 7*z[i]
            }else if (sum<=96){
                result.value += subject[i]+":8  ";
                dd += 8*z[i]
            }else if (sum<=100){
                result.value += subject[i]+":9  ";
                dd += 9*z[i]
            }
        }
        result.value += "전체 평균 등급: "+ String(dd/d)
    }
});