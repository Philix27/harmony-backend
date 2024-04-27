package announcement

import (
	"github.com/gofiber/fiber/v2"
	"golang.org/x/exp/slog"
)

type iRoutes interface {
	manager(router fiber.Router)
	create(c *fiber.Ctx) error
	update(c *fiber.Ctx) error
	getAll(c *fiber.Ctx) error
	getOne(c *fiber.Ctx) error
	deleteOne(c *fiber.Ctx) error
}

type Routes struct {
	repository iRepository
	logger     *slog.Logger
}

func NewRoutes(repo iRepository, logger *slog.Logger) iRoutes {
	return &Routes{
		repository: repo,
		logger:     logger,
	}
}

func (r *Routes) manager(route fiber.Router) {
	route.Post("/", r.create).Name("AnnouncementCreate")
	route.Put("/", r.update).Name("AnnouncementUpdate")
	route.Get("/:id", r.getOne).Name("AnnouncementGetOne")
	route.Delete("/", r.deleteOne).Name("AnnouncementDelete")
	route.Get("/", r.getAll).Name("AnnouncementGetAll")
}

func (r *Routes) create(c *fiber.Ctx) error {

	input := &AnnouncementCreateInput{}

	if err := c.BodyParser(input); err != nil {
		r.logger.Error("Error passing body")
		return err
	}

	if err := r.repository.Create(createAnnouncementDto{
		Title:    input.Subtitle,
		Subtitle: input.Subtitle,
		WorkspaceID: input.WorkspaceID,
	}); err != nil {
		return c.SendString("Error in request")
		// return c.SendStatus(503)
	}
	r.logger.Info("Created announcement successfully")
	return c.SendString("Created successfully")
}

func (r *Routes) update(c *fiber.Ctx) error {

	var input = &AnnouncementUpdateInput{}

	if err := c.BodyParser(input); err != nil {
		return err
	}

	if err := r.repository.Update(updateAnnouncementDto{
		Id:       input.Id,
		Title:    input.Title,
		Subtitle: input.Subtitle,
	}); err != nil {
		return err
	}

	return c.JSON(AnnouncementUpdateResponse{
		Msg: "success",
	})

}

func (r *Routes) getAll(c *fiber.Ctx) error {

	var input = &[]AnnouncementGetAllInput{}

	if err := c.BodyParser(input); err != nil {
		return err
	}

	obj, err := r.repository.FindAll()

	if err != nil {
		return err
	}

	return c.JSON(AnnouncementGetAllResponse{
		data: obj,
	})
}

func (r *Routes) getOne(c *fiber.Ctx) error {
	input := &AnnouncementGetOneInput{}

	if err := c.BodyParser(input); err != nil {
		return err
	}

	obj, err := r.repository.FindById(input.Id)

	if err != nil {
		return err
	}

	return c.JSON(AnnouncementGetOneResponse{
		Title:    obj.Title,
		Subtitle: obj.Subtitle,
		Id:       obj.Id,
	})

}

func (r *Routes) deleteOne(c *fiber.Ctx) error {
	input := &AnnouncementDeleteInput{}

	if err := c.BodyParser(input); err != nil {
		return err
	}
	if err := r.repository.Delete(input.Id); err != nil {
		return err
	}

	return c.JSON(AnnouncementDeleteResponse{
		Msg: "Deleted successfully",
	})
}
