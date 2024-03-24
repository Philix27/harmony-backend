package auth

import (
	"harmony/libs/database"

	"github.com/gofiber/fiber/v2"
)

type iRepository interface {
	CreateUser(data database.User) (database.User, error)
	getUserByEmail(email string) (database.User, error)
}

type iService interface {
	CreateUser(data createUserDto) (database.User, error)
	login(data LoginDto) (string, error)
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
