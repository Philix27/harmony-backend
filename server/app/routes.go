package app

import (
	"harmony/domains/announcement"
	"harmony/domains/board"
	"harmony/domains/workspace"
	"harmony/domains/workspaceEpics"
	"harmony/domains/workspaceStory"
	"harmony/libs/middleware"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/exp/slog"
)

func (state AppState) SetupRoutes(app *fiber.App, logger *slog.Logger) {
	app.Group("/api", middleware.ApiHandler)        // /api
	api := app.Group("/api", middleware.ApiHandler) // /api
	v1 := api.Group("/v1", middleware.Version)      // /api/v1

	announcement.Setup(v1, state.DB, logger)
	workspace.Setup(v1, state.DB, logger)
	workspaceEpics.Setup(v1, state.DB, logger)
	workspaceStory.Setup(v1, state.DB, logger)
	board.Setup(v1, state.DB, logger)
}
