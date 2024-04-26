package announcement

import (
	"github.com/gofiber/fiber/v2"
)

type iRoutes interface {
	manager(router fiber.Router)
	managerCreate(c *fiber.Ctx) error
	create(c *fiber.Ctx) error
	update(c *fiber.Ctx) error
	getAll(c *fiber.Ctx) error
	getOne(c *fiber.Ctx) error
	deleteOne(c *fiber.Ctx) error
}

type Routes struct {
	service iService
}

func NewRoutes(svc iService) iRoutes {
	return &Routes{
		service: svc,
	}
}

func (r *Routes) manager(route fiber.Router) {
	route.Post("/", r.create).Name("AnnouncementCreate")
	route.Put("/", r.update).Name("AnnouncementUpdate")
	route.Get("/{:id}", r.getOne).Name("AnnouncementGetOne")
	route.Delete("/", r.managerCreate).Name("AnnouncementDelete")
	route.Get("/", r.managerCreate).Name("AnnouncementGetAll")
}

func (r *Routes) managerCreate(c *fiber.Ctx) error {
	return c.JSON("Heyaya")
}

func (r *Routes) create(c *fiber.Ctx) error {

	var list = []AnnouncementCreateInput{}
	body := &AnnouncementCreateInput{}

	if err := c.BodyParser(body); err != nil {
		return err
	}

	body.Id = len(list) + 1

	list = append(list, *body)

	return c.JSON(AnnouncementCreateResponse{
		data: list,
	})
}

func (r *Routes) update(c *fiber.Ctx) error {

	var list = []AnnouncementCreateInput{}
	id, err := c.ParamsInt("id")

	if err != nil {
		c.Status(401).SendString("Invalid id")
	}

	for i, j := range list {
		if j.Id == id {
			list[i].Title = ""
			break
		}
	}
	return c.JSON(list)

}

func (r *Routes) deleteOne(c *fiber.Ctx) error {

	return c.SendString("Delete one announcement")

}

func (r *Routes) getAll(c *fiber.Ctx) error {

	var list = []AnnouncementCreateInput{}
	return c.JSON(list)

}

func (r *Routes) getOne(c *fiber.Ctx) error {

	return c.SendString("Get one announcement")

}
