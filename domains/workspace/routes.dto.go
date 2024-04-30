package workspace

// * Create
type WorkspaceCreateInput struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	OwnerId     uint   `json:"ownerId"`
}

type WorkspaceCreateResponse struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}

// * Update
type WorkspaceUpdateInput struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}
type WorkspaceUpdateResponse struct {
	Msg string `json:"msg"`
}

type WorkspaceDeleteResponse struct {
	Msg string `json:"msg"`
}

// * Read one
type WorkspaceGetOneResponse struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}

// * Read all
type WorkspaceGetAllInput struct {
	Limit  int `json:"limit"`
	UserId int `json:"userId"`
}
type WorkspaceGetAllResponse struct {
	Data []Workspace `json:"data"`
}

type Workspace struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}
