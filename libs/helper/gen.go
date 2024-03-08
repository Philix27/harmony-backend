package helper

import (
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
)


func GenerateTypescriptPaths(server *fiber.App)  {
    setup := "class Async {" 

	for _, r := range server.GetRoutes() {
		 c := fmt.Sprintf(`static routes_%v_%v = "%v";`, r.Name, r.Method,  r.Path);

		 setup = setup + c
	}

	newVar := fmt.Append([]byte(setup), "}")

	err2 := os.WriteFile("routes.ts", []byte(newVar), 23)
	if err2 != nil {
		log.Print(err2)
	}
}