let btn=document.querySelector(".btn")


btn.addEventListener("click",gamestart)


let attemt=0
let game=false
let random_number=Math.floor(Math.random()*10+1)
console.log( random_number)
let user_input;

function gamestart(){
    game=true
    while(game!==false){
        user_input=parseInt(prompt("Guess the number between 1 and 10:"))
        attemt++
        if (isNaN(user_input) || user_input < 1 || user_input > 10) {
            alert("Please enter a valid number between 1 and 10.");
            continue;
        }

        if(user_input===random_number){
            alert(`Congratulation! you guessed the correct number ${user_input} in ${attemt} attempt `)
            game=false
        }else(
            comprasion(random_number,user_input)
    
        )
    }
    
   
   
    
 
    

   

}


function comprasion(random,user) {
    console.log(random)
    console.log(user)
    if(random<user){
        alert("Your guess is too hig. Try again.")
    }
    else{
        alert("Your guess is too low. Try again.")

    }

    
}

// let btn = document.querySelector(".btn");

// btn.addEventListener("click", gamestart);

// let attempt = 0;
// let game = false;
// let random_number = Math.floor(Math.random() * 10 + 1);
// console.log(random_number)
// let user_input;

// function gamestart() {
//     game = true;

//     while (game !== false) {
//         user_input = parseInt(prompt("Guess the number between 1 and 10:"));
//         attempt++;
//         if (user_input === random_number) {
//             alert(`Congratulations! You guessed the correct number ${user_input} in ${attempt} attempts.`);
//             game = false;
//         } else {
//             comparison(user_input, random_number);
//         }
//     }
// }

// function comparison(user_input, random_number) {
//     if (user_input > random_number) {
//         alert("Your guess is too high. Try again.");
//     } else {
//         alert("Your guess is too low. Try again.");
//     }
// }
