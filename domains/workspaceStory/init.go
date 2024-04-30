package workspaceStory

import (
	"github.com/gofiber/fiber/v2"
	"golang.org/x/exp/slog"
	"gorm.io/gorm"
)

var ModuleName = "WORKSPACE_STORY"

func Setup(router fiber.Router, db *gorm.DB, logger *slog.Logger) {

	repo := NewRepository(db, logger, ModuleName + "_REPOSITORY")

	handler := NewRoutes(repo, logger, "_ROUTES")

	router.Route("/workspace_epic", handler.manager)

}