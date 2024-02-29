package main

import (
	"harmony/middleware"
	"log"

	"github.com/gofiber/fiber/v2"
	// "harmony/middleware/handler"
)

func main() {
	app := fiber.New()

	handlerW := func(c *fiber.Ctx) error {
		return c.SendStatus(fiber.StatusOK)
	}

	api := app.Group("/api", middleware.ApiHandler) // /api

	v1 := api.Group("/v1", middleware.V1) // /api/v1

	v1.Get("/list", handlerW) // /api/v1/list
	v1.Get("/user", handlerW) // /api/v1/user

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})
	app.Get("/hey", func(c *fiber.Ctx) error {
		return c.SendString("Greetings!")
	})

	log.Fatal(app.Listen(":3111"))
}
