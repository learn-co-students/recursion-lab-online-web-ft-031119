function printString(string){
  if (string.length > 1) {
    console.log(string[0])
    printString(string.substring(1,string.length))
  } else {
    console.log(string[0])
  }
}

function reverseString(string){
  if (string.length > 1) {
     return string[string.length-1] + reverseString(string.substring(0,string.length-1))
  } else {
    return string[0]
  }
}

function isPalindrome(string){
  if(string.length <= 2){
    return string[0] === string[string.length-1]
  }else if (string[0] === string[string.length-1]) {
    return isPalindrome(string.substring(1,string.length-1))
  }else{
    return false
  }
}

function addUpTo(arr,index){
  if(index === 0){
    return arr[0]
  }
  return arr[0] + addUpTo(arr.slice(1,arr.length),index-1)
}

function maxOf(array){
  if(array.length > 1){
    if(array[0] >= array[1]){
      return maxOf(array.slice(0,1).concat(array.slice(2,array.length) ))
    }else{
      return maxOf(array.slice(1))
    }
  }else{
    return array[0]
  }
}
function includesNumber(array,num){
  if(array.length > 0){
    if(array[0] === num){
      return true
    }else{
      return includesNumber(array.slice(1),num)
    }
  }
  return false
}
