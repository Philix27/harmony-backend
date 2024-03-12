package announcement

import "github.com/gofiber/fiber/v2"

type iRepository interface {
	Create(data AnnouncementM)
	Update(data AnnouncementM)
	Delete(dataId int)
	FindById(dataId int) (data AnnouncementM, err error)
	FindAll() (list []AnnouncementM)
}

type iService interface {
	Create(data createAnnouncementDto)
	Update(data updateAnnouncementDto)
	Delete(dataId int)
	FindById(dataId int) (data announcementResponseDto, err error)
	FindAll() (list []announcementResponseDto)
}

type iRoutes interface {
	create(router fiber.Router)
	update(c *fiber.Ctx) error
	getAll(c *fiber.Ctx) error
	getOne(c *fiber.Ctx) error
	deleteOne(c *fiber.Ctx) error
}
