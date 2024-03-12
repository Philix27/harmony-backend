package main

import (
	"gorm.io/gorm"
)

type AppState struct {
	DB *gorm.DB
}
