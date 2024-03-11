package main

// # Go - Variables

// the var keyword is used to create variables
var aName = "James" //type of string inferred

// can create multiple variable in a single statement
// Note the type at the end.
var c1, c2, c3 string

// the type can be skipped when initializing
var names, name2, name3 = "Kate", "Ryan", "Bryan"

// Shorthand :=
// - Only valid inside a function
// most commonly used

func aFunction()  {
	// the type is inferred from the value assigned to it
	// same as: var dada string = "Some value"
	dada := "Some value"
}


