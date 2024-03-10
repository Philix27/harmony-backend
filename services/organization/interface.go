package organization

import (
	"harmony/services/user"

	"github.com/gofiber/fiber/v2"
)

type iRepository interface {
	createOrg(data organizationModel) (user.User, error)
	getByUserEmail(data getByUserIdDto) (user.User, error)
	getByOrgId(data getByOrgIdDto) (user.User, error)
}

type iService interface {
	create(data createOrganizationDto) (user.User, error)
	get(data getByUserIdDto) (user.User, error)
}

type iRoutes interface {
	createOrg(c *fiber.Ctx) error
	getOrg(c *fiber.Ctx) error
	viewMembers(c *fiber.Ctx) error
	sendAnInvite(c *fiber.Ctx) error
	deleteOrg(c *fiber.Ctx) error
	updateOrgInfo(c *fiber.Ctx) error
}
