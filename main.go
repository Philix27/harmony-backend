package main

import (
	"fmt"
	_ "harmony/docs"
	"harmony/libs/app"
	"harmony/libs/code_gen"
	"harmony/libs/database"
	"harmony/libs/helper"
	"log"

	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)


func main() {
	err := godotenv.Load(".env")

	helper.ErrorPanic(err, "Could not load env")

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

	config := &database.DbConfig{
		Host:     os.Getenv("DB_HOST"),
		Port:     os.Getenv("DB_PORT"),
		Password: os.Getenv("DB_PASSWORD"),
		User:     os.Getenv("DB_USER"),
		SSLMode:  os.Getenv("DB_SSLMODE"),
		DbName:   os.Getenv("DB_NAME"),
	}

	db, err := database.DbNewConnection(config); 

	if err != nil {
		helper.ErrorPanic(err, "Cannot connect to db")
	}
	
	database.RunMigrations(db)

	appState := app.AppState{
		DB: db,
	}

	appState.SetupRoutes(server)

	if os.Getenv("ENV") == "DEV" {
		code_gen.GenerateTypescriptPaths(server, "./sdk/routes.ts")
		if err := code_gen.ConvertGoToTs("sample.go", "./sdk/dto.ts"); err != nil {
			fmt.Println("Error in conversion: ", err)
		} else {
			fmt.Println("Conversion successful!")

		}
	}

	log.Fatal(server.Listen(":" + os.Getenv("PORT")))
}
