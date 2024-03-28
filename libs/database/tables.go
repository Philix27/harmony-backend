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
	TeamID       uint
}

type Workspace struct {
	gorm.Model
	Name          string
	Description   string
	Notes         []Notes
	Teams         []Team
	Announcements []Announcement
	Epics         []Task_Epic
}

type Notes struct {
	gorm.Model
	Title       string
	Body        string
	WorkspaceID uint
}

type Team struct {
	gorm.Model
	Name        string
	Description string
	WorkspaceID uint
	Users       []User
}

type Announcement struct {
	gorm.Model
	Title       string
	Subtitle    string
	WorkspaceID uint
}

type Task_Epic struct {
	gorm.Model
	Title       string
	Description string
	TaskStories []Task_Story
	WorkspaceID uint
}

type Task_Story struct {
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
}
type Chat_Channel struct {
	gorm.Model
	Name        string
	Description string
	Type        string
	Chat_Msgs   []Chat_Msg
}
type Chat_Msg struct {
	gorm.Model
	Msg            string
	Sender         string
	Chat_ChannelID uint
}
type Chat_DM struct {
	gorm.Model
	Msg            string
	Sender         string
	Receiver       string
	Chat_ChannelID uint
}
