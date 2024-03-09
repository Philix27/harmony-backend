package tasks

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	task := router.Group("/")
	task.Post("/", createTask).Name("Task_Create")
	task.Put("/", updateTask).Name("Task_Update")
	task.Delete("/", deleteTask).Name("Task_Delete")
	task.Get("/id", getOneTask).Name("Task_GetOne")
	task.Get("/", getTasks).Name("Task_GetAll")

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
