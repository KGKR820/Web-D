function password(length,lower,upper,symb){
    let loweral = "abcdefghijklmnopqrstuvwxyz";
    let upperal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbols ="@#$*&_-+";
    let allowed ="";
    let password ="";
    if(lower){
        allowed += loweral;
    }
    if(upper){
        allowed += upperal;
    }
    if(symb){
        allowed += symbols;
    }
    for(let i=0;i<length;i++){
       password += allowed[Math.floor(Math.random()*(allowed.length))];
    }
    console.log(password);
}
password(10,1,0,0);