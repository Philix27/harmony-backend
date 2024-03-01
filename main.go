package main

import (
	"log"

	"harmony/services/announcement"
	"harmony/services/auth"
	"harmony/services/chat"
	"harmony/services/organization"
	"harmony/services/task_manager"
	"harmony/services/team"
	"harmony/services/user"
	"harmony/services/wiki"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	// api := app.Group("/api", middleware.ApiHandler) // /api
	// v1 := api.Group("/v1", middleware.V1) // /api/v1
	app.Route("/announcement", announcement.RoutesHandler)
	app.Route("/auth", auth.RoutesHandler)
	app.Route("/chat", chat.RoutesHandler)
	app.Route("/organization", organization.RoutesHandler)
	app.Route("/task_manager", task_manager.RoutesHandler)
	app.Route("/team", team.RoutesHandler)
	app.Route("/user", user.RoutesHandler)
	app.Route("/wiki", wiki.RoutesHandler)
	log.Fatal(app.Listen(":3111"))
}
