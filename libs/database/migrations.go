package database

import (
	"gorm.io/gorm"
)

func RunMigrations(db *gorm.DB) {
	db.AutoMigrate(
		Announcement{},
		Task{},
		User{},
		Organization{},
		TaskEpic{},
		TaskStory{},
		Team{},
		Notes{},
	)

}
