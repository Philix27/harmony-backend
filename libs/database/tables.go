package database

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Email        string `gorm: "type:varchar(255)"`
	Password     string `gorm: "type:varchar(255)"`
	AccessToken  string
	RefreshToken string
}

type Organization struct {
	gorm.Model
	Name          string
	Description   string
	Notes         []Notes
	Teams         []Team
	Announcements []Announcement
	Epics         []TaskEpic
}

type Notes struct {
	gorm.Model
	Title string `json:"name"`
	Body  string `json:"description"`
}

type Team struct {
	gorm.Model
	Name        string `json:"name"`
	Description string `json:"description"`
}

type Announcement struct {
	gorm.Model
	Title    string `gorm: "type:varchar(255)"`
	Subtitle string `gorm: "type:varchar(255)"`
}

type TaskEpic struct {
	gorm.Model
	Title       string `json:"title"`
	Description string `json:"description"`
	Stories     []TaskStory
}

type TaskStory struct {
	gorm.Model
	Title       string `json:"title"`
	Description string `json:"description"`
	Tasks       []Task
}

type Task struct {
	gorm.Model
	Name              string
	Description       string
	GithubIssueNumber string
	GithubIssueLink   string
	// Relationship
	Story      string
	AssignedTo string
}
