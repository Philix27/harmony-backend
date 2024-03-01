package middleware

import "github.com/gofiber/fiber/v2"

func ApiHandler(c *fiber.Ctx) error {
	return c.SendString("API handler")
}

func V1(c *fiber.Ctx) error {
	return c.SendString("V1")
	// .SendStatus(fiber.StatusOK)
}
