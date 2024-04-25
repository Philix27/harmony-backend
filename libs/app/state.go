package app

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"gorm.io/gorm"
)

type AppState struct {
	DB *gorm.DB
}


func (app AppState) NewApp() *fiber.App  {
	server := fiber.New(fiber.Config{
		Prefork:           false,
		CaseSensitive:     true,
		StrictRouting:     true,
		ServerHeader:      "Harmony Server",
		AppName:           "Harmony",
		EnablePrintRoutes: true,
		IdleTimeout:       5,
		ReduceMemoryUsage: true,
	})

server.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:1400",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))
return server
}