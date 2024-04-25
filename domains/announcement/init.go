package announcement

import (
	"github.com/go-playground/validator"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func Setup(router fiber.Router, db *gorm.DB) {

	repo := NewRepository(db)

	svc := NewService(repo, validator.New())

	handler := NewRoutes(svc)

	router.Route("/announcement", handler.create)

}

