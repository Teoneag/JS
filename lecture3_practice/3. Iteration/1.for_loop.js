// Take a look at the flowchart in the readme file.

for(var i = 1; i <= 5; i++){
	console.log(i);
}

// The above code is equivalent to 5 sequential statements:

//1 <= 5
//2 <= 5
//3 <= 5
//4 <= 5
//5 <= 5
//6 <= 5  (exit condition)

for(var i = 5; i >= 1; i--){
	console.log(i);
}

// The above code is equivalent to 5 sequential statements:

//5 >= 1
//4 >= 1
//3 >= 1
//2 >= 1
//1 >= 1
//0 >= 1  (exit condition)

for(var i = 2; i <= 10; i+=2){
	console.log(i);
}

// The above code is equivalent to 5 sequential statements:

//2 <= 10
//4 >= 10
//6 >= 10
//8 <= 10
//10 = 1
//0 >= 1  (exit condition)