package task

import (
	"github.com/gofiber/fiber/v2"
)

type iRepository interface {
	createTask(data TaskModel) (TaskModel, error)
	getTasks(data filterDto) (TaskModel, error)
	getByOrgId(data getTaskByIdDto) (TaskModel, error)
}

type iService interface {
	create(data createTaskDto) (TaskModel, error)
	getTasks(data filterDto) (TaskModel, error)
	getByOrgId(data getTaskByIdDto) (TaskModel, error)
}

type iRoutes interface {
	createTask(c *fiber.Ctx) error
	updateTask(c *fiber.Ctx) error
	deleteTask(c *fiber.Ctx) error
	getOneTask(c *fiber.Ctx) error
	getTasks(c *fiber.Ctx) error
	addIssueToTasks(c *fiber.Ctx) error
}
