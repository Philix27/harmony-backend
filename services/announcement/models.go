package announcement

import (
	"time"
)

type AnnouncementM struct {
	Id        int    `gorm: "type:int; primary_key"`
	Title     string `gorm: "type:varchar(255)"`
	Subtitle  string `gorm: "type:varchar(255)"`
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Tabler interface {
	TableName() string
}

// TableName overrides the table name used by User to `profiles`
func (AnnouncementM) TableName() string {
	return "announcements"
}
