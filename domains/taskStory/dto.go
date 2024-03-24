package taskStory

import "gorm.io/gorm"

type TaskStoryModel struct {
	gorm.Model
	Title       string `json:"title"`
	Description string `json:"description"`
}
