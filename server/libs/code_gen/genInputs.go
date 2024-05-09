package code_gen

import "fmt"

func genInput(method string, name string) string {
	switch getMethod(method) {
	case "get":
		return ""
	case "delete":
		return ""
	case "post":
		return fmt.Sprintf("input: T.%vInput;", name)
	case "put":
		return fmt.Sprintf("input: T.%vInput;", name)
	}
	return ""
}
