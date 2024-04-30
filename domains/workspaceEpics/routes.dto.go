package workspaceEpics

// * Create
type WorkspaceEpicCreateInput struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	WorkspaceID uint   `json:"workspaceId"`
}

type WorkspaceEpicCreateResponse struct {
	Id          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	WorkspaceID uint   `json:"workspaceId"`
}

// * Update
type WorkspaceEpicUpdateInput struct {
	Id          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

type WorkspaceEpicUpdateResponse struct {
	Msg string `json:"msg"`
}


type WorkspaceEpicDeleteResponse struct {
	Msg string `json:"msg"`
}

// * Read one
type WorkspaceEpicGetOneResponse struct {
	Id          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	WorkspaceID uint   `json:"workspaceId"`
}

// * Read all
type WorkspaceEpicGetAllInput struct {
	Limit  int `json:"limit"`
	UserId int `json:"userId"`
}

type WorkspaceEpicGetAllResponse struct {
	Data []WorkspaceEpic `json:"data"`
}

type WorkspaceEpic struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}
