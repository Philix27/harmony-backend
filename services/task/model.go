package task

import "time"

type TaskModel struct {
	Id                uint
	Name              string
	Description       string
	GithubIssueNumber string
	GithubIssueLink   string
	// Relationship
	Story      string
	AssignedTo string
	CreatedAt  time.Time
	UpdatedAt  time.Time
}

func (TaskModel) TableName() string {
	return "tasks"
}
