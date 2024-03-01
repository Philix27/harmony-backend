package announcement

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	router.Get("/", announce)
	// return c.SendStatus(fiber.StatusOK)
}
func announce(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
