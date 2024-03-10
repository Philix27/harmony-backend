package database

import (
	"harmony/services/announcement"
	"harmony/services/task"
	"harmony/services/user"

	"gorm.io/gorm"
)

func RunMigrations(db *gorm.DB) {
	db.AutoMigrate(
		&announcement.AnnouncementM{},
		&task.Task{},
		&user.User{},
	)
}
