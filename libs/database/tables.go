package database

import (
	"harmony/services/announcement"
	"harmony/services/notes"
	"harmony/services/organization"
	"harmony/services/task"
	"harmony/services/taskEpic"
	"harmony/services/taskStory"
	"harmony/services/team"
	"harmony/services/user"

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
