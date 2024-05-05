package code_gen

import (
	"fmt"
	"strings"
)

func processPath(method string, pathName string, apiPath string) string {
	newPath, _ := strings.CutPrefix(apiPath, "/api/v1/")
	lPath, _ := strings.CutSuffix(newPath, "/:id")

	// var patho string

	// if hasId {
	// 	patho = `"` + lPath + `"`
	// } else {

	// 	patho = `"` + lPath + `"`
	// }

	if hasSlash := strings.HasSuffix(lPath, "/"); hasSlash {
		return fmt.Sprintf(`"%v"%v`, lPath, genAxiosField(method, pathName, apiPath, apiPath))
	} else {
		return fmt.Sprintf(`"%v/"`, lPath)
	}

}

// Name of function
// Name of dataType for id - pathParams
// Name of dataType for queryParams
// Name of dataType for data body

func makeFirstLower(data string) string {
	return strings.ToLower(data[:1]) + data[1:]
}
