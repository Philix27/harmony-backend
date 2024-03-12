package auth

import (
	"harmony/domains/user"

	"github.com/gofiber/fiber/v2"
)

type iRepository interface {
	CreateUser(data user.User) (user.User, error)
	getUserByEmail(data getUserByEmailDto) (user.User, error)
}

type iService interface {
	CreateUser(data createUserDto) (user.User, error)
	login(data LoginDto) 
}

type iRoutes interface {
	createUser(c *fiber.Ctx) error
	sendEmailOtp(c *fiber.Ctx) error
	verifyEmailOtp(c *fiber.Ctx) error
	login(c *fiber.Ctx) error
	resendOtp(c *fiber.Ctx) error
	logout(c *fiber.Ctx) error
	getAuthCredentials(c *fiber.Ctx) error
}
