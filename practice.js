// how to reverse an array without using the inbuild methods;

// let array = [2,34,53,65,78,34,53,42,56,]

// function reverse(array){
//     let newArray = [];
//     for(let i=0; i<array.length; i++)
//     {
//         newArray.push(array[array.length-1-i])
//     }
//     console.log(newArray);
// }
// reverse(array);

// let array = [2,34,53,65,78,34,9,9,53,42,56,74];

// function count(arr,num){
//     let count = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===num){
//             count++;
//         }
//     }
//     return console.log(`the count of`,count)
// }

// count(array,9)


// remove the fisrt matching element from thje array

// let array = [2,34,53,65,78,34,999,9,9,53,42,56,74];

// function removeAnItem(array,elemet){
//     let index = array.indexOf(elemet);
//     array.splice(index,1);
//     return array;
// }

// console.log(removeAnItem(array,999))

// remove all the matching element

let array = [2,34,53,65,9,9,9,9,9,78,34,999,9,9,53,42,56,74];

function removeAllMatching(array,value){
    let i=0;

    while(i<array.length)
        {
        if(array[i]===value){
            array.splice(i,1);
        }else{
            i++;
        }
    }
    return console.log(array);
}

removeAllMatching(array,9)