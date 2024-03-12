package organization

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	r := router.Group("/")
	r.Post("/", createOrg).Name("AuthCreateOrh")
	r.Delete("/", deleteOrg).Name("AuthDelete")
	r.Get("/members", viewMembers).Name("AuthViewMembers")
	r.Post("/invite", sendAnInvite).Name("AuthInviteMember")
	r.Put("/update_info", updateOrgInfo).Name("AuthUpdateInfo")
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
