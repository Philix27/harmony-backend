package taskEpic

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	r := router.Group("/")
	r.Post("/", createEpic).Name("TaskEpicCreate")
	r.Put("/", updateEpic).Name("TaskEpicUpdate")
	r.Delete("/", deleteEpic).Name("TaskEpicDelete")
	r.Get("/id", getOneEpic).Name("TaskEpicGetOne")
	r.Get("/", getEpics).Name("TaskEpicGet")

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
