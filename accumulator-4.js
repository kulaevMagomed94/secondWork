let arr = ['Muhammad','Saad','Ali','Abdurohman','Hamzat','Rasul','Ibrogim','Mansur','Movsar','Yacub']
let accumulator = []
for(let i = 0; i < arr.length; i++){
    if(arr[i][0] === 'A'){
        accumulator.push(arr[i])
    }
}
console.log(accumulator)