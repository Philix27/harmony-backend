package taskStory

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	stories := router.Group("/stories")
	stories.Post("/", createStory)
	stories.Put("/", updateStory)
	stories.Delete("/", deleteStory)
	stories.Get("/id", getOneStory)
	stories.Get("/", getStories)

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