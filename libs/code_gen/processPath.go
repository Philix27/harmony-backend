package code_gen

import "strings"

func processPath(apiPath string) string {
	newPath, _ := strings.CutPrefix(apiPath, "/api/v1/")
	lPath, hasId := strings.CutSuffix(newPath, "/:id")

	if hasId {
		return `"` + lPath + `"` + " + id"
	} else {

		return  `"` + lPath + `"`
	}
}

// Name of function
// Name of dataType for id - pathParams
// Name of dataType for queryParams
// Name of dataType for data body
func genFuncHead(apiPath string, pathName string) string {
	formation := makeFirstLower(pathName)

	newPath, _ := strings.CutPrefix(apiPath, "/api/v1")

	_, hasId := strings.CutSuffix(newPath, ":id")

	if hasId {
		formation = formation + "(id : number)"
		return formation
	} else {

		return formation + "(data: T." + pathName + "Input)"
	}
}

func makeFirstLower(data string) string {
	return strings.ToLower(data[:1]) + data[1:]
}
