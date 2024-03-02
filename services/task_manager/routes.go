package task_manager

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

	// Task
	task := router.Group("/epic")
	task.Post("/", createTask)
	task.Put("/", updateTask)
	task.Delete("/", deleteTask)
	task.Get("/id", getOneTask)
	task.Get("/", getTasks)

	// Stories
	stories := router.Group("/stories")
	stories.Post("/", createStory)
	stories.Put("/", updateStory)
	stories.Delete("/", deleteStory)
	stories.Get("/id", getOneStory)
	stories.Get("/", getStories)

}

// !SECTION
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

// !SECTION
func createStory(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func updateStory(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func deleteStory(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func getOneStory(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func getStories(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}

// !SECTION
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
