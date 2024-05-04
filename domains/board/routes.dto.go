package board

// * Create
type BoardCreateInput struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	WorkspaceId uint   `json:"workspaceId"`
}

type BoardCreateResponse struct {
	Id              int    `json:"id"`
	Title           string `json:"title"`
	Description     string `json:"description"`
	WorkspaceEpicId uint   `json:"workspaceEpicId"`
}

// * Update
type BoardUpdateInput struct {
	Id          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

type BoardUpdateResponse struct {
	Msg string `json:"msg"`
}

type BoardDeleteResponse struct {
	Msg string `json:"msg"`
}

// * Read one
type BoardGetOneResponse struct {
	Id              int    `json:"id"`
	Title           string `json:"title"`
	Description     string `json:"description"`
	WorkspaceId uint   `json:"workspaceId"`
}

// * Read all
// type BoardGetAllInput struct {
// 	Limit  int `json:"limit"`
// 	UserId int `json:"userId"`
// }

type BoardGetAllResponse struct {
	Data []Board `json:"data"`
}

type Board struct {
	Id              int    `json:"id"`
	Title           string `json:"title"`
	Description     string `json:"description"`
	WorkspaceId uint   `json:"workspaceId"`
}
