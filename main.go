package main

import (
	"fmt"

	"harmony/libs/app"
	"harmony/libs/code_gen"
	"harmony/libs/database"
	"harmony/libs/helper"

	"os"

	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(".env"); err != nil {
		helper.ErrorPanic(err, "Could not load env")
	}

	config := &database.DbConfig{
		Host:     os.Getenv("DB_HOST"),
		Port:     os.Getenv("DB_PORT"),
		Password: os.Getenv("DB_PASSWORD"),
		User:     os.Getenv("DB_USER"),
		SSLMode:  os.Getenv("DB_SSLMODE"),
		DbName:   os.Getenv("DB_NAME"),
	}

	db, err := database.NewConnection(config)

	if err != nil {
		helper.ErrorPanic(err, "Cannot connect to db")
	}

	database.RunMigrations(db)

	appState := app.AppState{
		DB: db,
	}

	server := appState.NewApp()

	appState.SetupRoutes(server)

	if os.Getenv("ENV") == "DEV" {
		code_gen.GenerateTsRouteHandlers(server, "./sdk/routes.ts")
		// if err := code_gen.GenerateTsRouteHandlers(server, "./sdk/dto.ts"); err != nil {
		// 	fmt.Println("Error in conversion: ", err)
		// } else {
		// 	fmt.Println("Conversion successful!")

		// }
		if err := code_gen.GoThroughFiles("./", "./sdk/dto.ts"); err != nil {
			fmt.Println("Error:", err)
		} else {
			fmt.Println("Conversion successful!")
		}
	}

	// log.Fatal(server.Listen(":" + os.Getenv("PORT")))
}
