package tasks

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	task := router.Group("/task")
	task.Post("/", createTask)
	task.Put("/", updateTask)
	task.Delete("/", deleteTask)
	task.Get("/id", getOneTask)
	task.Get("/", getTasks)

}

func createTask(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func updateTask(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func deleteTask(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func getOneTask(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func getTasks(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
