package notes

import "gorm.io/gorm"

type Notes struct {
	gorm.Model
	Title string `json:"name"`
	Body  string `json:"description"`
}
