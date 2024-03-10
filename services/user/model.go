package user

import "time"

type User struct {
	ID        uint   `gorm: "type:int; primary_key"`
	Email     string `gorm: "type:varchar(255)"`
	Password  string `gorm: "type:varchar(255)"`
	CreatedAt time.Time
	UpdatedAt time.Time
}
