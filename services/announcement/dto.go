package announcement

type announcementDto struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
	Expired  bool   `json:"expiredAt"`
	CreateAt string `json:"createAt"`
}

type createAnnouncementDto struct {
	Title    string `validate:"required, min=1, max=10" json:name `
	Subtitle string `validate:"required"`
}

type updateAnnouncementDto struct {
	Id       int    `validate:"required"`
	Title    string `validate:"required"`
	Subtitle string
}
type announcementResponseDto struct {
	Id       int    `validate:"required"`
	Title    string `validate:"required"`
	Subtitle string
}
