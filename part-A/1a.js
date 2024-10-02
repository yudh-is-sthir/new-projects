function translate(str){
    let newStr = "";
    const vowels = "aeiou "
    for(ch in str){
        if(vowels.includes(str[ch])){
            newStr += str[ch];
            console.log(ch, str[ch])
        }else{
            newStr += str[ch] + "o" + str[ch] 
        }
    }
    return(newStr)
}

console.log (translate("Hello"))