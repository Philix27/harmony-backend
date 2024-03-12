package database

import (
	"harmony/domains/announcement"
	"harmony/domains/notes"
	"harmony/domains/organization"
	"harmony/domains/task"
	"harmony/domains/taskEpic"
	"harmony/domains/taskStory"
	"harmony/domains/team"
	"harmony/domains/user"

	"gorm.io/gorm"
)

func RunMigrations(db *gorm.DB) {
	db.AutoMigrate(
		announcement.AnnouncementM{},
		task.TaskModel{},
		user.User{},
		organization.OrganizationModel{},
		taskEpic.TaskEpicModel{},
		taskStory.TaskStoryModel{},
		team.TeamModel{},
		notes.Notes{},
	)

}
