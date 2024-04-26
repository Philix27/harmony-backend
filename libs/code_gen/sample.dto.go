package code_gen

type BrassAnnouncement struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
}

type BrassCreateAnnouncementDto struct {
	Title    string `validate:"required, min=1, max=10" json:"name" `
	Subtitle string `validate:"required"`
}

type BrassUpdateAnnouncementDto struct {
	Id       int    `validate:"required"`
	Title    string `validate:"required"`
	Subtitle string
}
type BrassResponseDto struct {
	Id       int    `validate:"required"`
	Title    string `validate:"required"`
	Subtitle string
	Checks BrassChecker
}
type BrassChecker struct {
	Id       int   
	Title    string
	Subtitle string
}
