//grab AM/PM
var amOrPm ='am'

function dayChange(){
    var checkBox = document.getElementById('checkbox')
    if(checkBox.checked){
       amOrPm = "pm"
    }else{
       amOrPm ="am"
    }
}



//grab hour and if PM add 12 sorta
function getTime(num){
console.log(num)

    //clear all other inputs

// console.log(document.querySelector('button'))

//     const allInputs = document.querySelectorAll('.timeInput')
//     const numOfInputs = document.querySelectorAll('.timeInput').length

//     let chosenHour = 0

//     for(let i=0; i<numOfInputs; i++){
//         if(allInputs[i].checked == true){
//             // console.log(allInputs[i].value)
//             chosenHour = allInputs[i].value
//         }else{
//         }
//         // console.log(allInputs[i].checked)
//     }
//     console.log(`chosen hours is ${chosenHour}`)

}


// getTime()

//designate time str to be ${hh} + ${MM}



//problem with input is that number or checkbox cant be tranparent