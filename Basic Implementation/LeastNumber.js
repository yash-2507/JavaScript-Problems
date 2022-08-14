// Given some digits, make smallest possible number using all digits once 
// [1,0,9,4] => 1049
// [0,0,1,9] => 1009

const least =  (num) => {
    //Create a character array and sort it in ascending order
    let sorted = num.split('').sort();
    //Check if first character is not 0 then join and return it 
    if(sorted[0] != '0') return sorted.join('')
    //find the index of the first non - zero character 
    let index = 0; 
    for(let i = 0; i < sorted.length; i++) {  
        if(sorted[i] > "0") {    
            index = i;    
            break;  
        } 
    }
    //Swap the indexes  
    let temp = sorted[0];  
    sorted[0] = sorted[index];  
    sorted[index] = temp;
    //return the string after joining the characters of array 
    return sorted.join('')
}

const output = least("1902")
console.log('output: ', output);
