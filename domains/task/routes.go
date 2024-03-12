package task

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	r := Routes{}
	task := router.Group("/")
	task.Post("/", r.createTask).Name("Task_Create")
	task.Put("/", r.updateTask).Name("Task_Update")
	task.Delete("/", r.deleteTask).Name("Task_Delete")
	task.Get("/id", r.getOneTask).Name("Task_GetOne")
	task.Get("/", r.getTasks).Name("Task_GetAll")

}

type Routes struct {
	service iService
}

// addIssueToTasks implements iRoutes.
func (r *Routes) addIssueToTasks(c *fiber.Ctx) error {
	panic("unimplemented")
}

// createTask implements iRoutes.
func (r *Routes) createTask(c *fiber.Ctx) error {
	body := new(createTaskDto)

	if err := c.BodyParser(body); err != nil {
		return err
	}

	result, err := r.service.create(*body)

	if err != nil {
		return err
	}

	return c.JSON(result)
}

// deleteTask implements iRoutes.
func (*Routes) deleteTask(c *fiber.Ctx) error {
	panic("unimplemented")
}

// getOneTask implements iRoutes.
func (*Routes) getOneTask(c *fiber.Ctx) error {
	panic("unimplemented")
}

// getTasks implements iRoutes.
func (*Routes) getTasks(c *fiber.Ctx) error {
	panic("unimplemented")
}

// updateTask implements iRoutes.
func (*Routes) updateTask(c *fiber.Ctx) error {
	panic("unimplemented")
}

func NewRoutes() iRoutes {
	return &Routes{}
}
