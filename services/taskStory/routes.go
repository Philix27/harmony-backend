package taskStory

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	stories := router.Group("/")
	stories.Post("/", createStory).Name("TaskStoryCreate")
	stories.Put("/", updateStory).Name("TaskStoryUpdate")
	stories.Delete("/", deleteStory).Name("TaskStoryDelete")
	stories.Get("/id", getOneStory).Name("TaskStoryGetOne")
	stories.Get("/", getStories).Name("TaskStoryGetAll")

}

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