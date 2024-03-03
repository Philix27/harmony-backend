package main

import (
	_ "harmony/docs"
	"harmony/middleware"
	"harmony/services/announcement"
	"harmony/services/auth"
	"harmony/services/chat"
	"harmony/services/organization"
	"harmony/services/task_manager"
	"harmony/services/team"
	"harmony/services/user"
	"harmony/services/wiki"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/swagger"
)

// @title Fiber Example API
// @version 1.0
// @description This is a sample swagger for Fiber
// @termsOfService http://swagger.io/terms/
// @contact.name API Support
// @contact.email fiber@swagger.io
// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html
// @host localhost:8080
// @BasePath /

func main() {
	app := fiber.New(fiber.Config{
		Prefork:           true,
		CaseSensitive:     true,
		StrictRouting:     true,
		ServerHeader:      "Fiber",
		AppName:           "Test App v1.0.1",
		EnablePrintRoutes: true,
		IdleTimeout:       5,
		ReduceMemoryUsage: true,
	})

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:1400",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))
	api := app.Group("/api", middleware.ApiHandler) // /api
	v1 := api.Group("/v1", middleware.Version)      // /api/v1
	v1.Route("/announcement", announcement.RoutesHandler)
	v1.Route("/auth", auth.RoutesHandler)
	v1.Route("/chat", chat.RoutesHandler)
	v1.Route("/organization", organization.RoutesHandler)
	v1.Route("/task_manager", task_manager.RoutesHandler)
	v1.Route("/team", team.RoutesHandler)
	v1.Route("/user", user.RoutesHandler)
	v1.Route("/wiki", wiki.RoutesHandler)

	// fmt.Println("Handlers Count")

	// for i, data := range app.GetRoutes() {
	// 	fmt.Println("Index: %v Name:", i+1, data.Name)
	// 	fmt.Println("Index: %v Params:", i+1, data.Params)
	// 	fmt.Println("Index: %v Handlers:", i+1, data.Handlers)
	// 	fmt.Println("Index: %v Path:", i+1, data.Path)
	// }


	app.Get("/swagger/*", swagger.HandlerDefault) // default

	// app.Get("/swagger/*", swagger.New(swagger.Config{ // custom
	// 	URL: "http://example.com/doc.json",
	// 	DeepLinking: false,
	// 	// Expand ("list") or Collapse ("none") tag groups by default
	// 	DocExpansion: "none",
	// 	// Prefill OAuth ClientId on Authorize popup
	// 	OAuth: &swagger.OAuthConfig{
	// 		AppName:  "OAuth Provider",
	// 		ClientId: "21bb4edc-05a7-4afc-86f1-2e151e4ba6e2",
	// 	},
	// 	// Ability to change OAuth2 redirect uri location
	// 	OAuth2RedirectUrl: "http://localhost:8080/swagger/oauth2-redirect.html",
	// }))


	log.Fatal(app.Listen(":3111"))
}
