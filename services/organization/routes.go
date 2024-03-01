package organization

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	router.Post("/", createOrg)
	router.Delete("/", deleteOrg)
	router.Get("/members", viewMembers)
	router.Post("/invite", sendAnInvite)
	router.Put("/invite", updateOrgInfo)
}
func createOrg(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func viewMembers(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func sendAnInvite(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func deleteOrg(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func updateOrgInfo(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
