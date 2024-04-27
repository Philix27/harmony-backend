package database

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Email        string
	Password     string
	AccessToken  string
	RefreshToken string
	WorkspaceID  uint
}

type Workspace struct {
	gorm.Model
	Name          string
	Description   string
	Notes         []Documents
	Announcements []Announcement
	Epics         []TaskEpic
	Members       []User
}

type Documents struct {
	gorm.Model
	Title       string
	Body        string
	WorkspaceID uint
}

type Announcement struct {
	gorm.Model
	Title       string
	Subtitle    string
	WorkspaceID uint
}

type TaskEpic struct {
	gorm.Model
	Title       string
	Description string
	TaskStories []TaskStory
	WorkspaceID uint
}

type TaskStory struct {
	gorm.Model
	Title       string
	Description string
	Tasks       []Task
	TaskEpicID  uint
}

type Task struct {
	gorm.Model
	Name              string
	Description       string
	GithubIssueNumber string
	GithubIssueLink   string
	AssignedTo        string
	TaskStoryID       uint
	TaskEpic       uint
	
}
type TaskTags struct {
	gorm.Model
	Name        string
	Description string
	ColorCode   string
}
