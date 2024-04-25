package helper

import (
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
)

func GenerateTypescriptPaths(server *fiber.App) {

	// Open the output file for writing
    output, err := os.Create("./sdk/routes.ts")
    if err != nil {
        fmt.Println("Error creating output file:", err)
        return
    }
	  defer output.Close()

	var arrName []string;
	var arrWeirdPath = []string{"/api", "/api/v1", "/", "/swagger/*"};

	setup := `import axios from "axios";

export class ApiRoutes {
	`

	for _, r := range server.GetRoutes() {
		
		if contains(arrName, r.Name) || contains(arrWeirdPath, r.Path) {
			continue;
		}
		arrName = append(arrName, r.Name);
		// if r.Path == "/api" || r.Path == "/api/v1" || r.Path == "/" || r.Path == "/swagger/*" {
		// 	continue
		// }
		c := fmt.Sprintf("  " + 
	`public async %v(): Promise<any> {
		try {
			const res = await axios.%v("%v");
			return res;
		} catch(e) {
			return e.message;
		}

	}`, r.Name, getMethod(r.Method), r.Path)

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
func GenerateDto(server *fiber.App) {

}

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

func contains(arr []string , value string) bool {
	for _, v := range arr {
		if v == value {
			return true;
		}
	}
	return false
}
