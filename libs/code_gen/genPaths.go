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
import axios from "axios";
import * as T from "./dto";

export class ApiRoutes {
	`

	for _, r := range server.GetRoutes() {

		if arrContains(arrName, r.Name) || arrContains(arrWeirdPath, r.Path) {
			continue
		}
		arrName = append(arrName, r.Name)
		// if r.Path == "/api" || r.Path == "/api/v1" || r.Path == "/" || r.Path == "/swagger/*" {
		// 	continue
		// }
		c := fmt.Sprintf("  "+
			`public async %v(data: T.%vInput): Promise<T.%vResponse> {
		try {
			const res = await axios.%v("%v", data);
			return res.data as T.%vResponse;
		} catch(e) {
			return e.message;
		}

	}`, r.Name, r.Name, r.Name, getMethod(r.Method), r.Path, r.Name)

		setup = setup + c + "\n"
	}

	newVar := fmt.Append([]byte(setup), "}")

	_, err = output.Write([]byte(newVar))
	if err != nil {
		fmt.Println("Error writing to output file:", err)
	}

	err2 := err
	// err2 := os.WriteFile("c/routes.ts", []byte(newVar), 23)
	if err2 != nil {
		log.Print(err2)
	}
}
