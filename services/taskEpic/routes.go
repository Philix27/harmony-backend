package taskEpic

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	epic := router.Group("/epic")
	epic.Post("/", createEpic)
	epic.Put("/", updateEpic)
	epic.Delete("/", deleteEpic)
	epic.Get("/id", getOneEpic)
	epic.Get("/", getEpics)

}

func createEpic(c *fiber.Ctx) error {
	return c.SendString("createEpic")
}
func updateEpic(c *fiber.Ctx) error {
	return c.SendString("updateEpic")
}
func deleteEpic(c *fiber.Ctx) error {
	return c.SendString("deleteEpic")
}
func getOneEpic(c *fiber.Ctx) error {
	return c.SendString("getOneEpic")
}
func getEpics(c *fiber.Ctx) error {
	return c.SendString("getEpics")
}
