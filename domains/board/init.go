package board

import (
	"harmony/libs/database"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/exp/slog"
	"gorm.io/gorm"
)

var ModuleName = "BOARD"

func Setup(router fiber.Router, db *gorm.DB, logger *slog.Logger) {

	repo := NewRepository(
		db.Model(&database.WorkspaceStory{}).Debug(),
		logger, ModuleName+"_REPOSITORY")

	handler := NewRoutes(repo, logger, ModuleName+"_ROUTES")

	router.Route("/workspace_story", handler.manager)

}
