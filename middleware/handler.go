package middleware

import "github.com/gofiber/fiber/v2"

func ApiHandler(c *fiber.Ctx) error {
	return c.SendStatus(fiber.StatusOK)
}

func V1(c *fiber.Ctx) error {
	return c.SendStatus(fiber.StatusOK)
}
