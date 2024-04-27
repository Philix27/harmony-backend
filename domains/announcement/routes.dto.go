package announcement

// * Create
type AnnouncementCreateInput struct {
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
	WorkspaceID uint `json:"workspaceId"`
}

type AnnouncementCreateResponse struct {
	Id       int 
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
}

// * Update
type AnnouncementUpdateInput struct {
	Id       int `validate:"required"`
	Title    string
	Subtitle string
}
type AnnouncementUpdateResponse struct {
	Msg string
}

// * Delete

type AnnouncementDeleteInput struct {
	Id int `validate:"required"`
}
type AnnouncementDeleteResponse struct {
	Msg string
}

// * Read one
type AnnouncementGetOneInput struct {
	Id int
}
type AnnouncementGetOneResponse struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
}

// * Read all
type AnnouncementGetAllInput struct {
	Limit int
}
type AnnouncementGetAllResponse struct {
	data []announcement
}

type announcement struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
}

type createAnnouncementDto struct {
	Title    string `validate:"required, min=1, max=10" json:"name" `
	Subtitle string `validate:"required"`
	WorkspaceID uint 
}

type announcementResponseDto struct {
	Id       int    `validate:"required"`
	Title    string `validate:"required"`
	Subtitle string
}

type updateAnnouncementDto struct {
	Id       int `validate:"required"`
	Title    string
	Subtitle string
}
