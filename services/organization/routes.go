package organization

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	router.Post("/", createOrg).Name("AuthVerifyEmailOtp")
	router.Delete("/", deleteOrg).Name("AuthVerifyEmailOtp")
	router.Get("/members", viewMembers).Name("AuthVerifyEmailOtp")
	router.Post("/invite", sendAnInvite).Name("AuthVerifyEmailOtp")
	router.Put("/invite", updateOrgInfo).Name("AuthVerifyEmailOtp")
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
