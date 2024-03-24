package organization

import (
	"harmony/libs/database"

	"github.com/gofiber/fiber/v2"
)

type iRepository interface {
	createOrg(data organizationModel) (database.User, error)
	getByUserEmail(data getByUserIdDto) (database.User, error)
	getByOrgId(data getByOrgIdDto) (database.User, error)
}

type iService interface {
	create(data createOrganizationDto) (database.User, error)
	get(data getByUserIdDto) (database.User, error)
}

type iRoutes interface {
	createOrg(c *fiber.Ctx) error
	getOrg(c *fiber.Ctx) error
	viewMembers(c *fiber.Ctx) error
	sendAnInvite(c *fiber.Ctx) error
	deleteOrg(c *fiber.Ctx) error
	updateOrgInfo(c *fiber.Ctx) error
}
