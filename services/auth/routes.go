package auth

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	router.Post("/create_user", createUser)
	router.Post("/send_email_otp", sendEmailOtp)
	router.Post("/verify_email_otp", verifyEmailOtp)
	router.Post("/login", login)
	router.Post("/resent_otp", resendOtp)
	router.Post("/logout", logout)
	router.Get("/get_auth_credentials", getAuthCredentials)
}

func sendEmailOtp(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func verifyEmailOtp(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func createUser(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func login(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func resendOtp(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func logout(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
func getAuthCredentials(c *fiber.Ctx) error {
	return c.SendString("Borrow Checker")
}
