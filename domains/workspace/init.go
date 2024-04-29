package workspace

import (
	"github.com/gofiber/fiber/v2"
	"golang.org/x/exp/slog"
	"gorm.io/gorm"
)

func Setup(router fiber.Router, db *gorm.DB, logger *slog.Logger) {

	repo := NewRepository(db, logger, "WORKSPACE_REPOSITORY")

	handler := NewRoutes(repo, logger, "WORKSPACE_ROUTES")

	router.Route("/workspace", handler.manager)

}
