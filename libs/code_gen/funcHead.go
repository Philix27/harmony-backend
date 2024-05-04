package code_gen

import (
	"fmt"
	"strings"
)

func genFuncHead(apiPath string, pathName string, method string) string {
	formation := makeFirstLower(pathName)

	return formation + genHeadBrackets(method, pathName, apiPath)
	// newPath, _ := strings.CutPrefix(apiPath, "/api/v1")

	// _, hasId := strings.CutSuffix(newPath, ":id")

	// if hasId {
	// 	formation = formation + "(id: number)"
	// 	return formation
	// } else {

	// 	return formation + "(data: T." + pathName + "Input)"
	// }
}

func genHeadBrackets(method string, pathName string, apiPath string) string {
	var brackets = "("

	switch getMethod(method) {
	case "get":
		brackets += resolveGetMethod(apiPath, pathName)
	case "delete":
		brackets += fmt.Sprintf("id: number,  params: T.%vQueryParams", pathName)
	case "post":
		brackets += fmt.Sprintf("data: T.%vInput,  params: T.%vQueryParams", pathName, pathName)
	case "put":
		brackets += fmt.Sprintf("data: T.%vInput,  params: T.%vQueryParams", pathName, pathName)
	}

	brackets += ")"
	return brackets
}

func resolveGetMethod(apiPath string, pathName string) string {
	newPath, _ := strings.CutPrefix(apiPath, "/api/v1")
	_, hasId := strings.CutSuffix(newPath, ":id")
	var formation = ""

	if hasId {
		formation += fmt.Sprintf("id: number, params: T.%vQueryParams", pathName)
		return formation
	} else {
		formation += fmt.Sprintf("params: T.%vQueryParams", pathName)
		return formation
	}
}

func genAxiosField(method string, pathName string, apiPath string, freshPath string) string {
	var brackets = ""

	switch getMethod(method) {
	case "get":
		return resolveGetMethodAxios(pathName, freshPath)
		// return ".concat(id.toString()), params"
	case "delete":
		return ".concat(id.toString()), params"
	case "post":
		return ", data, params"
	case "put":
		return ", data, params"
	}

	return brackets
}

func resolveGetMethodAxios(pathName string, apiPath string) string {
	newPath, _ := strings.CutPrefix(apiPath, "/api/v1")
	hasId := strings.Contains(newPath, ":")

	if hasId {
		return ".concat(id.toString()), {params: params}"
	} else {

		return ", {params: params}"
	}
}
