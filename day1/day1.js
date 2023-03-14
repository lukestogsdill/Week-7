//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(a_string, name_array){
    //Your code goes here
    for(let word of name_array){ 
        if(a_string.toLowerCase().includes(word.toLowerCase()))
        console.log(`Matched ${word}`)
    }
}
//Call method here with parameters
findWords(dog_string, dog_names)

// //============Exercise #2 ============//
// /*Write a function that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    for(let i = 0; i < arr.length; i++){
        if(i%2 == 0){
            arr[i] = 'is even'
        }
    }
    console.log(arr)
}
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
replaceEvens(arr)