package code_gen

func getMethod(method string) string {
	switch {
	case method == "GET":
		return "get"
	case method == "PUT":
		return "put"
	case method == "POST":
		return "post"
	case method == "PATCH":
		return "patch"
	case method == "DELETE":
		return "delete"
	}
	return "get"
}

func arrContains(arr []string, value string) bool {
	for _, v := range arr {
		if v == value {
			return true
		}
	}
	return false
}

// Function to map Go types to TypeScript types
func mapGoTypeToTsType(goType string) string {
	switch goType {
	case "string":
		return "string"
	case "int", "int32", "int64", "uint", "uint32", "uint64":
		return "number"
	case "float32", "float64":
		return "number"
	default:
		return goType
	}
}
