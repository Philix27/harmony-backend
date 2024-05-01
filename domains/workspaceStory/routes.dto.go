package workspaceStory

// * Create
type WorkspaceStoryCreateInput struct {
	Title           string `json:"title"`
	Description     string `json:"description"`
	WorkspaceEpicId uint   `json:"workspaceEpicId"`
}

type WorkspaceStoryCreateResponse struct {
	Id              int    `json:"id"`
	Title           string `json:"title"`
	Description     string `json:"description"`
	WorkspaceEpicId uint   `json:"workspaceEpicId"`
}

// * Update
type WorkspaceStoryUpdateInput struct {
	Id          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

type WorkspaceStoryUpdateResponse struct {
	Msg string `json:"msg"`
}

type WorkspaceStoryDeleteResponse struct {
	Msg string `json:"msg"`
}

// * Read one
type WorkspaceStoryGetOneResponse struct {
	Id              int    `json:"id"`
	Title           string `json:"title"`
	Description     string `json:"description"`
	WorkspaceEpicId uint   `json:"workspaceEpicId"`
}

// * Read all
// type WorkspaceStoryGetAllInput struct {
// 	Limit  int `json:"limit"`
// 	UserId int `json:"userId"`
// }

type WorkspaceStoryGetAllResponse struct {
	Data []WorkspaceStory `json:"data"`
}

type WorkspaceStory struct {
	Id              int    `json:"id"`
	Title           string `json:"title"`
	Description     string `json:"description"`
	WorkspaceEpicId uint   `json:"workspaceEpicId"`
}
