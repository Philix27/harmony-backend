package auth

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	router.Post("/create_user", createUser).Name("AuthCreateUser")
	router.Post("/send_email_otp", sendEmailOtp).Name("AuthSendEmailOtp")
	router.Post("/verify_email_otp", verifyEmailOtp).Name("AuthVerifyEmailOtp")
	router.Post("/login", login).Name("AuthLogin")
	router.Post("/resent_otp", resendOtp).Name("AuthResetOtp")
	router.Post("/logout", logout).Name("AuthLogout")
	router.Get("/get_auth_credentials", getAuthCredentials).Name("AuthGetCredentials")
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
