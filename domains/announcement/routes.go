package announcement

import (
	"strconv"

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

func NewRoutes(repo iRepository, logger *slog.Logger, logGroupKey string) iRoutes {
	return &Routes{
		repository: repo,
		logger:     logger.WithGroup(logGroupKey),
	}
}

func (r *Routes) manager(route fiber.Router) {
	route.Post("/", r.create).Name("AnnouncementCreate")
	route.Put("/", r.update).Name("AnnouncementUpdate")
	route.Delete("/", r.deleteOne).Name("AnnouncementDelete")
	route.Get("/:id", r.getOne).Name("AnnouncementGetOne")
	route.Get("/", r.getAll).Name("AnnouncementGetAll")
}

func (r *Routes) create(c *fiber.Ctx) error {

	input := &AnnouncementCreateInput{}

	if err := c.BodyParser(input); err != nil {
		r.logger.Error("Error passing body")
		return err
	}

	if err := r.repository.Create(createAnnouncementDto{
		Title:       input.Title,
		Subtitle:    input.Subtitle,
		WorkspaceID: input.WorkspaceID,
	}); err != nil {
		return c.SendString("Error in request")
	}

	r.logger.Info("CREATED_ANNOUNCEMENT")
	return c.SendString("Created successfully")
}

func (r *Routes) update(c *fiber.Ctx) error {

	var input = &AnnouncementUpdateInput{}

	if err := c.BodyParser(input); err != nil {
		r.logger.Error("Error passing body")
		return err
	}

	if err := r.repository.Update(updateAnnouncementDto{
		Id:       input.Id,
		Title:    input.Title,
		Subtitle: input.Subtitle,
	}); err != nil {
		return err
	}
	r.logger.Info("UPDATED_ANNOUNCEMENT")
	return c.JSON(AnnouncementUpdateResponse{
		Msg: "success",
	})

}

func (r *Routes) getAll(c *fiber.Ctx) error {

	var input = &AnnouncementGetAllInput{}

	if err := c.BodyParser(input); err != nil {
		r.logger.Error("Error passing body")
		return err
	}

	obj, err := r.repository.FindAll()

	if err != nil {
		return err
	}

	r.logger.Info("GET_ALL_ANNOUNCEMENTS", obj)
	return c.JSON(AnnouncementGetAllResponse{
		Data: obj,
	})
}

func (r *Routes) getOne(c *fiber.Ctx) error {
	id := c.Params("id")

	if intValue, err := strconv.Atoi(id); err != nil {
		r.logger.Error("Error passing id")
		return err
	} else {
		obj, err := r.repository.FindById(intValue)
		if err != nil {
			return err
		}
		r.logger.Info("GET_ANNOUNCEMENT: " + strconv.Itoa(obj.Id))
		return c.JSON(obj)
	}

}

func (r *Routes) deleteOne(c *fiber.Ctx) error {
	input := &AnnouncementDeleteInput{}

	if err := c.BodyParser(input); err != nil {
		r.logger.Error("Error passing body")
		return err
	}
	if err := r.repository.Delete(input.Id); err != nil {
		return err
	}

	r.logger.Info("DELETED_ANNOUNCEMENT")
	return c.JSON(AnnouncementDeleteResponse{
		Msg: "Deleted successfully",
	})
}
