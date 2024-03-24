package task

import (
	"harmony/libs/database"

	"github.com/gofiber/fiber/v2"
)

type iRepository interface {
	createTask(data database.Task) (database.Task, error)
	getTasks(data filterDto) (database.Task, error)
	getByOrgId(data getTaskByIdDto) (database.Task, error)
}

type iService interface {
	create(data createTaskDto) (database.Task, error)
	getTasks(data filterDto) (database.Task, error)
	getByOrgId(data getTaskByIdDto) (database.Task, error)
}

type iRoutes interface {
	createTask(c *fiber.Ctx) error
	updateTask(c *fiber.Ctx) error
	deleteTask(c *fiber.Ctx) error
	getOneTask(c *fiber.Ctx) error
	getTasks(c *fiber.Ctx) error
	addIssueToTasks(c *fiber.Ctx) error
}
