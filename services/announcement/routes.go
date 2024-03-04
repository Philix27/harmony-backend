package announcement

import (
	"github.com/gofiber/fiber/v2"
)

var list = []announcementDto{}

func RoutesHandler(router fiber.Router) {
	router.Post("/", create)
	router.Patch("/:id/expired", update)
	router.Get("/", getAll)
	router.Get("/id", getOne)
	router.Delete("/", deleteOne)

}


func create(c *fiber.Ctx) error {
	body := &announcementDto{}

	if err := c.BodyParser(body); err != nil {
		return err
	}

	body.Id = len(list) + 1

	list = append(list, *body)

	return c.JSON(list)
}

func update(c *fiber.Ctx) error {
	id, err := c.ParamsInt("id")

	if err != nil {
		c.Status(401).SendString("Invalid id")
	}

	for i, j := range list {
		if j.Id == id {
			list[i].Expired = true
			break
		}
	}
	return c.JSON(list)
}

func deleteOne(c *fiber.Ctx) error {
	return c.SendString("Delete one announcement")
}
func getAll(c *fiber.Ctx) error {
	return c.JSON(list)
}
func getOne(c *fiber.Ctx) error {
	return c.SendString("Get one announcement")
}
