package team

import "gorm.io/gorm"

type TeamModel struct {
	gorm.Model
	Name        string `json:"name"`
	Description string `json:"description"`
}
