package task

import (
	"harmony/libs/database"

	"github.com/gofiber/fiber/v2"
)

type iRepository interface {
	createTask(data database.TaskModel) (database.TaskModel, error)
	getTasks(data filterDto) (database.TaskModel, error)
	getByOrgId(data getTaskByIdDto) (database.TaskModel, error)
}

type iService interface {
	create(data createTaskDto) (database.TaskModel, error)
	getTasks(data filterDto) (database.TaskModel, error)
	getByOrgId(data getTaskByIdDto) (database.TaskModel, error)
}

type iRoutes interface {
	createTask(c *fiber.Ctx) error
	updateTask(c *fiber.Ctx) error
	deleteTask(c *fiber.Ctx) error
	getOneTask(c *fiber.Ctx) error
	getTasks(c *fiber.Ctx) error
	addIssueToTasks(c *fiber.Ctx) error
}
