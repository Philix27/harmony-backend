package code_gen

import (
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
)

func GenerateTsRouteHandlers(server *fiber.App, outputPath string) {

	// server.GetRoute("./").Handlers
	// Open the output file for writing
	output, err := os.Create(outputPath)
	if err != nil {
		fmt.Println("Error creating output file:", err)
		return
	}

	defer output.Close()

	var arrName []string
	var arrWeirdPath = []string{"/api", "/api/v1", "/", "/swagger/*"}

	setup := `
import * as T from "./dto";

	`

	for _, r := range server.GetRoutes() {

		if arrContains(arrName, r.Name) || arrContains(arrWeirdPath, r.Path) {
			continue
		}

		arrName = append(arrName, r.Name)

		c := fmt.Sprintf("  "+
			`
  type %v = {
	path: "%v";
	%v
	response: T.%vResponse;
	pathParam: T.%vPathParams;
	queryParams: T.%vQueryParams;
	method: "%v";
  }
 `,
			r.Name,
			processPath(r.Path),
			genInput(r.Method, r.Name),
			r.Name,
			r.Name,
			r.Name,
			getMethod(r.Method),
		)

		setup = setup + c + "\n"
	}

	typesCollection := `
 type AllTypes = { 
	`

	for _, val := range arrName {
		body := fmt.Sprintf(
			`%v: %v;`, val, val,
		)

		typesCollection = typesCollection + body + "\n"
	}

	typesCollection += "}"

	// newVar := fmt.Append([]byte(setup), "}")

	_, err = output.Write([]byte(setup + typesCollection))
	if err != nil {
		fmt.Println("Error writing to output file:", err)
	}

	err2 := err
	// err2 := os.WriteFile("c/routes.ts", []byte(newVar), 23)
	if err2 != nil {
		log.Print(err2)
	}
}
