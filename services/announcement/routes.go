package announcement

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	router.Get("/", getAll)
	router.Get("/id", getOne)
	router.Post("/", create)
	router.Put("/", update)
	router.Delete("/", deleteOne)

}

func create(c *fiber.Ctx) error {
	return c.SendString("Create announcement")
}
func update(c *fiber.Ctx) error {
	return c.SendString("Update Announcement")
}
func deleteOne(c *fiber.Ctx) error {
	return c.SendString("Delete one announcement")
}
func getAll(c *fiber.Ctx) error {
	return c.SendString("Get all announcement")
}
func getOne(c *fiber.Ctx) error {
	return c.SendString("Get one announcement")
}
