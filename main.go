package main

import "github.com/gofiber/fiber/v2"

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})
	app.Get("/hey", func(c *fiber.Ctx) error {
		return c.SendString("Greetings!")
	})

	app.Listen(":3111")
}
