let x = prompt();
x= Number(x);
alert(typeof x);
if(typeof x === 'number') {
    if(x % 2 === 0){
        console.log("число четное")
    }
    else if (x % 3 === 0){
        console.log("число нечетное")
    }
}
else if(Number.isNaN(x)){
    console.log("NaN")
}else{
    console.log("Упс, кажется, Вы ошиблись")
}


//следующие задачи

let hi = "Hello";
function reversSTR(str){
    return str.split("").revers().join("")
}
reversSTR(hi);

// next

let randomNum = Number(Math.random());

//next #5 maasiv
massiv=[]
function x (g){
    for(let i = 0;i<=g.length-1;i++)
        console.log(g[i])
}
x(massiv)

/// next # 7 massiv

massiv=[]
let chet= 0
let nechet = 0
let nullC4et4ik= 0 
for( let i = 0;i<= massiv.length-1;i++){
    if(typeof massiv[i] === number & massiv[i] % 2=== 0){
        chet++
    }
    else if(typeof massiv[i] === number & massiv[i] % 3 === 0){
        nechet++
    }else if(typeof massiv[i] === null){
        nullC4et4ik++
    }
}
console.log(`Столько четных ${chet}, столько нечетных ${nechet}, и null ${nullC4et4ik}`)

//next # 6 massiv

massiv=[]
for(let i= 0;i<=massiv.length-1;i++){
    for(let j = 0;j<=massiv.length;j++){
        if(massiv[i] === massiv[j]){
            let tr = true
        }else{ tr=false}
    }
}
if(tr === true){
    console.log(tr)
}

// next #8 massiv

let myMap = new Map();
myMap.set(1, 'one');
myMap.set(2, 'two');
for (let [key, value] of myMap.entries()) {
    console.log(`Ключ-${key}, значение-${value}`);
}