package auth

import (
	"harmony/services/user"

	"github.com/gofiber/fiber/v2"
)


type iRepository interface {
     CreateUser(data user.User)
}

type iService interface {
	 CreateUser(data createUserDto)
}

type iRoutes interface  {
	createUser(c *fiber.Ctx) error
	sendEmailOtp(c *fiber.Ctx) error
	verifyEmailOtp(c *fiber.Ctx) error
	login(c *fiber.Ctx) error
	resendOtp(c *fiber.Ctx) error
	logout(c *fiber.Ctx) error
	getAuthCredentials(c *fiber.Ctx) error
}
