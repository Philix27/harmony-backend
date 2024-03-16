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

type createTaskDto struct {
	Name        string
	Description string
	// Relationship
	Story      string
	AssignedTo string
}
type updateTaskDto struct {
	Id          string
	Description string
}
type deleteTaskDto struct {
	Id string
}
type getTasksDto struct {
	Id string
}

type getTaskByIdDto struct {
	Id string
}
type filterDto struct {
	limit int
}
