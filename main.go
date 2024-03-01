package main

import (
	"log"

	"harmony/services/announcement"
	"harmony/services/auth"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	// api := app.Group("/api", middleware.ApiHandler) // /api
	// v1 := api.Group("/v1", middleware.V1) // /api/v1
	app.Route("/announcement", announcement.RoutesHandler)
	app.Route("/auth", auth.RoutesHandler)
	log.Fatal(app.Listen(":3111"))
}
