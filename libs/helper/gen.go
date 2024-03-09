package helper

import (
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
)


func GenerateTypescriptPaths(server *fiber.App)  {
    setup := "class Async { \n" 

	for _, r := range server.GetRoutes() {
		 c := fmt.Sprintf(`static %v_%v = "%v";`, r.Name, r.Method,  r.Path);

		 setup = setup + c + "\n"
	}

	newVar := fmt.Append([]byte(setup), "}")

	err2 := os.WriteFile("routes.ts", []byte(newVar), 23)
	if err2 != nil {
		log.Print(err2)
	}
}
func GenerateDto(server *fiber.App)  {
   
}