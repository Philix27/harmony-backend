package announcement

// * Create
type AnnouncementCreateInput struct {
	Title       string `json:"title"`
	Subtitle    string `json:"subtitle"`
	WorkspaceId uint   `json:"workspaceId"`
}

type AnnouncementCreateResponse struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
}

// * Update
type AnnouncementUpdateInput struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
}
type AnnouncementUpdateResponse struct {
	Msg string `json:"msg"`
}

// * Delete

type AnnouncementDeleteInput struct {
	Id int `json:"id"`
}
type AnnouncementDeleteResponse struct {
	Msg string `json:"msg"`
}

// * Read one
type AnnouncementGetOneInput struct {
	Id int `json:"id"`
}
type AnnouncementGetOneResponse struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
}

// * Read all
type AnnouncementGetAllInput struct {
	Limit int `json:"limit"`
}
type AnnouncementGetAllResponse struct {
	Data []announcement `json:"data"`
}

type announcement struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
}

type createAnnouncementDto struct {
	Title       string `validate:"required, min=1, max=10" json:"name" `
	Subtitle    string `validate:"required"`
	WorkspaceId uint
}

type updateAnnouncementDto struct {
	Id       int `validate:"required"`
	Title    string
	Subtitle string
}
