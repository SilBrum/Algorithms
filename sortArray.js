//Welcome to my algorithm to sort arrays.
//leetcode exercise 912
//I'll use the Merge Sort method, which will split the array in 2 parts, sort each one of the parts and then merge them together and put them back in the original array. 
//
 //Scope: sort the array of numbers in ascending order. Time complexity should be O(n log n)
 const sortArray = function(nums) {

    //splitting the array in two parts to sort the numbers in each part first until it's just a single element array
        const divide = function(start, end) {
            if (start >= end) return; //if the start is bigger or equal the end, stop dividing
    
            const mid = Math.floor((start + end)/2);//finding the middle
            divide(start, mid); //defining the first half
            divide(mid+1, end);// defining the second half
            mergeSort(start, end, mid); //after dividing, merging the two halves back but in ascending order
        
        }
    // now we'll start to merge the two arrays
        const mergeSort = function(left, right, middle) {
            let firstArr = nums.slice(left, middle+1); //first half of the array
            let secondArr = nums.slice(middle+1, right+1); //second half of the array
    
            let i = 0;
            let j = 0;
            let k = left; // k will track the correct position in the nums array when copying leftArr and rightArr
    
    //merging the sorted arrays into one comparing the smaller numbers and placing back into the nums array
            while (i < firstArr.length && j < secondArr.length) {
                if (firstArr[i] < secondArr[j]) {
                    nums[k++] = firstArr[i++]
                }
                else nums[k++] = secondArr[j++]
            }
    //copy elements of first array
            while (i < firstArr.length) {
                nums[k++] = firstArr[i++]
            }
    //copy elements of second array
            while (j < secondArr.length) {
                nums[k++] = secondArr[j++]
            }
        }
    
        divide(0, nums.length -1) //starting the sorting proccess
    
        return nums
    };
    
    const nums = [5, 7, 2, 6, 4, 3, 9, 10, 8, 1];
    console.log('Sorted Array:', sortArray(nums));