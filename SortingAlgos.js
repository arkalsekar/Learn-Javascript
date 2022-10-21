//Bubble sort

// Optimized implementation of bubble sort Algorithm

function bubbleSort(arr){

    var i, j;
    var len = arr.length;
    
    var isSwapped = false;
    
    for(i =0; i < len; i++){
        
        isSwapped = false;
        
        for(j = 0; j < len; j++){
            if(arr[j] > arr[j + 1]){
            var temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            isSwapped = true;
            }
        }
        
        // IF no two elements were swapped by inner loop, then break
        
        if(!isSwapped){
        break;
        }
    }
    
    // Print the array
    console.log(arr)
    }
    
    
    var arr = [243, 45, 23, 356, 3, 5346, 35, 5];
    
    // calling the bubbleSort Function
    bubbleSort(arr)

//  Output
// Sorted Array :
// [3, 5, 23, 35, 45, 243, 356, 5346]
    
///////////////***************////////////
//Javascript program for implementation of selection sort
function swap(arr,xp, yp)
{
	var temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

function selectionSort(arr, n)
{
	var i, j, min_idx;

	// One by one move boundary of unsorted subarray
	for (i = 0; i < n-1; i++)
	{
		// Find the minimum element in unsorted array
		min_idx = i;
		for (j = i + 1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

		// Swap the found minimum element with the first element
		swap(arr,min_idx, i);
	}
}

function printArray( arr, size)
{
	var i;
	for (i = 0; i < size; i++)
		document.write(arr[i] + " ");
	document.write(" <br>");
}

var arr = [64, 25, 12, 22, 11];
	var n = 5;
	selectionSort(arr, n);
	document.write("Sorted array: <br>");
	printArray(arr, n);

    // Sorted array: 
    // 11 12 22 25 64 
