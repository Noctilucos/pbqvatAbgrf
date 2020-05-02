function pivot(arr,start=0,end=arr.length-1){
  let val = arr[start]
  let index = start
  let p = start
  while(p<=end){
    if(val<=arr[p]){
      p++
    }else{
      index++
      let temp = arr[p]
      arr[p] = arr[index]
      arr[index] = temp
      p++
    }
  }
  arr[start] = arr[index]
  arr[index] = val
  return index
}

function quickSort(arr,left=0,right=arr.length-1){
  if(left<right){
    let pp = pivot(arr,left,right)
    quickSort(arr,left,pp-1)
    quickSort(arr,pp+1,right)
  }
  return arr
}

debugger;quickSort([5,4,3,12,11,-5,-8])