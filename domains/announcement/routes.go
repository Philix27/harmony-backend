package announcement

import (
	"github.com/gofiber/fiber/v2"
)

type iRoutes interface {
	create(router fiber.Router)
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

//	type announcementX struct {
//		Id       int    `json:"id"`
//		Title    string `json:"title"`
//		Subtitle string `json:"subtitle"`
//	}
func (r *Routes) create(route fiber.Router) {
	route.Post("/", func(c *fiber.Ctx) error {
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
	}).Name("AnnouncementCreate")
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

// announce := router.Group("/")
// announce.Post("/", handler.create).Name("AnnouncementCreate")
// announce.Patch("/:id/expired", handler.update).Name("AnnouncementPatch")
// announce.Get("/", handler.getAll).Name("AnnouncementGetAll")
// announce.Get("/id", handler.getOne).Name("AnnouncementGetOne")
// announce.Delete("/", handler.deleteOne).Name("AnnouncementDelete")
// return GenRoutes(router  ,handler)

// func GenRoutes(router fiber.Router, handler Routes)    {
// 	announce := router.Group("/")
// 	announce.Post("/", handler.create).Name("AnnouncementCreate")
// 	announce.Patch("/:id/expired", handler.update).Name("AnnouncementPatch")
// 	announce.Get("/", handler.getAll).Name("AnnouncementGetAll")
// 	announce.Get("/id", handler.getOne).Name("AnnouncementGetOne")
// 	announce.Delete("/", handler.deleteOne).Name("AnnouncementDelete")
// }
