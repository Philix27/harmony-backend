package main

import (
	"harmony/domains/announcement"
	"harmony/domains/auth"
	"harmony/domains/chat"
	"harmony/domains/notes"
	"harmony/domains/organization"
	"harmony/domains/task"
	"harmony/domains/taskEpic"
	"harmony/domains/taskStory"
	"harmony/domains/team"
	"harmony/domains/user"
	"harmony/libs/middleware"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/swagger"
)

func (state *AppState) SetupRoutes(app *fiber.App) {
	api := app.Group("/api", middleware.ApiHandler) // /api
	v1 := api.Group("/v1", middleware.Version)      // /api/v1

	announcement.Setup(v1, state.DB)
	v1.Route("/auth", auth.RoutesHandler)
	v1.Route("/chat", chat.RoutesHandler)
	v1.Route("/organization", organization.RoutesHandler)
	v1.Route("/task_epic", taskEpic.RoutesHandler)
	v1.Route("/task_story", taskStory.RoutesHandler)
	v1.Route("/task", task.RoutesHandler)
	v1.Route("/team", team.RoutesHandler)
	v1.Route("/user", user.RoutesHandler)
	v1.Route("/notes", notes.RoutesHandler)

	app.Get("/swagger/*", swagger.HandlerDefault) // default
	
}
