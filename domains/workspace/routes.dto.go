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

// * Delete
type WorkspaceDeleteInput struct {
	Id int `json:"id"`
}

type WorkspaceDeleteResponse struct {
	Msg string `json:"msg"`
}

// * Read one
type WorkspaceGetOneInput struct {
	UserId int `json:"userId"`
}
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
