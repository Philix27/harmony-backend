package app

import (
	"harmony/domains/announcement"
	"harmony/domains/workspace"
	"harmony/domains/workspaceEpics"
	"harmony/libs/middleware"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/exp/slog"
)

func (state AppState) SetupRoutes(app *fiber.App, logger *slog.Logger) {
	app.Group("/api", middleware.ApiHandler)        // /api
	api := app.Group("/api", middleware.ApiHandler) // /api
	v1 := api.Group("/v1", middleware.Version)      // /api/v1
	// api.Group("/v1", middleware.Version) // /api/v1

	announcement.Setup(v1, state.DB, logger)
	workspace.Setup(v1, state.DB, logger)
	workspaceEpics.Setup(v1, state.DB, logger)
	// v1.Route("/auth", auth.RoutesHandler)
	// v1.Route("/chat", chat.RoutesHandler)
	// v1.Route("/workspace", workspace.RoutesHandler)
	// v1.Route("/task_epic", taskEpic.RoutesHandler)
	// v1.Route("/task_story", taskStory.RoutesHandler)
	// v1.Route("/task", task.RoutesHandler)
	// v1.Route("/team", team.RoutesHandler)
	// v1.Route("/user", user.RoutesHandler)
	// v1.Route("/documents", documents.RoutesHandler)

}
