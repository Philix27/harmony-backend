package announcement

import (
	"gorm.io/gorm"
)

type AnnouncementM struct {
	gorm.Model

	Title    string `gorm: "type:varchar(255)"`
	Subtitle string `gorm: "type:varchar(255)"`
}

type Tabler interface {
	TableName() string
}

// TableName overrides the table name used by User to `profiles`
func (AnnouncementM) TableName() string {
	return "announcements"
}
