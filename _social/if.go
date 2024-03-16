// Go - If statement

var y = 3

// brackets wrapping the conditionals 
// are not needed unlike other languages
if y > 2 {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}

// This is called an "initializer statement"
// x is scoped to the if statement.
if x := someFunction(); x < 0 {
    // code to execute if x is less than 0
} else if x == 0 {
    // code to execute if x is equal to 0
} else {
    // code to execute if x is greater than 0
}


name, age := "John", 25
	
	println(name)
	println(age)