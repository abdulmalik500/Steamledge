// var array = [2, 3, 4, 3, 6, 7];
// var sum = 9;
// function bruteForceTwoSum(array, sum) {
// // var bruteForceTwoSum = (array, sum) => {
  
//     var nums = []

//     for (var x = 0; x < array.length; x++) {
//         for(var y = 0; y < array.length; y++) {
//         	// see if array[x] + array[y] === sum
//               // save successful combos to nums array
//               if (array[x] + array[y] === sum){
//                 nums.push([array[x], array[y]])
//                }
//         }
//       }  	
//     // find addends
//     // pass them into nums array for storage
    
//     return nums
//     // alert(nums);
//   }
//   document.getElementById("geto").innerText = bruteForceTwoSum(array, sum);
var arr = [1, 2, 5, 7, 11, 15];
var target = 9;
  function mostFrequent(arr, target){
      let result = []
      let numIndex = new Map();

      for (var i = 0; i < arr.length; i++) {
        let num = arr[i];
        let compliment = target - num;
    
        if (numIndex.has(compliment)) {
            result[0] = numIndex.get(compliment);
            result[1] = i;
            console.log(result[0],result[1])
            return result;
        }
        numIndex.set(num, 1)
  }
  return result;
    
  }
  document.getElementById("geto").innerText = mostFrequent(arr, target);

  