function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let newStr = [input[0]];
    for( let i =1 ; i < input.length; i++){
        if((input[i]%2 === 0) && ( input[i-1] % 2 === 0)){
            newStr.push( "-" + input[i] );
        } else {
            newStr.push( input[i] );
        }
    }
    out=newStr.join('');
    output.innerText = out;
}


 
