function run() {
    const arr = [];
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
    if(input>input2){
        for( let i = input2 ; i <= input ; i++){
            if(i % 4 === 0){
                arr.push(i);
            }
        }
    }else{
        for( let i = input ; i <= input2 ; i++){
            if(i % 4 === 0){
                arr.push(i);
            }
        }
    }
    out= arr;
    output.innerText = out;
}


 
