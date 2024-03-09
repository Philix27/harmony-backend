package wiki

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	r := router.Group("/")
	r.Get("/", announce).Name("WikiGet")
	// return c.SendStatus(fiber.StatusOK)
}
func announce(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
