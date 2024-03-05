package main

import (
	_ "harmony/docs"
	"harmony/services/app"

	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

	"gorm.io/gorm"
)

// @title Harmony
// @version 1.0
// @description Harmony Backend Server
// @termsOfService http://swagger.io/terms/

// @contact.name Felix Eligbue
// @contact.email philixbob@gmail.com
// @contact.url    http://www.swagger.io/support

// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host localhost:3111
// @BasePath /api/v1/

// @securityDefinitions.basic  BasicAuth

// @externalDocs.description  OpenAPI
// @externalDocs.url          https://swagger.io/resources/open-api/

func main() {
	server := fiber.New(fiber.Config{
		Prefork:           true,
		CaseSensitive:     true,
		StrictRouting:     true,
		ServerHeader:      "Fiber",
		AppName:           "Test server v1.0.1",
		EnablePrintRoutes: true,
		IdleTimeout:       5,
		ReduceMemoryUsage: true,
	})

	server.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:1400",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	appState := app.AppState {
		DB: &gorm.DB{},
	}

	appState.SetupRoutes(server)

	log.Fatal(server.Listen(":3111"))
}
