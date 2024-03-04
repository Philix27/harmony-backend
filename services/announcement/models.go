package announcement


type announcementM struct {
	Id int `gorm: "type:int; primary_key"`
	Title string `gorm: "type:varchar(255)"`
	Subtitle string `gorm: "type:varchar(255)"`
}