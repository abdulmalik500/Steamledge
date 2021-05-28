// var bruteForceTwoSum = (array, sum) => {
//     var array = [2, 3, 4, 3, 6, 7];
//     var sum = 9;

//     var nums = []

//     for(var x in array){
//         for(var y in array){
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