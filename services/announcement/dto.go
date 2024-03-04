package announcement

type announcementDto struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle    string `json:"subtitle"`
	Expired  bool   `json:"expiredAt"`
	CreateAt string `json:"createAt"`
}

type createAnnouncementDto struct {
	Title    string `validate:"required"`
	Subtitle    string `validate:"required"`
}


