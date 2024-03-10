package task

import "time"

type Task struct {
	ID          uint   `gorm: "type:int; primary_key"`
	Name        string `gorm: "type:varchar(255)"`
	Description string `gorm: "type:varchar(255)"`
	CreatedAt   time.Time
	UpdatedAt   time.Time
}

func (Task) TableName() string {
	return "tasks"
}
