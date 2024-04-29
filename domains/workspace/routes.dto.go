package workspace

// * Create
type WorkspaceCreateInput struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	OwnerId     uint   `json:"ownerId"`
}

type WorkspaceCreateResponse struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
}

// * Update
type WorkspaceUpdateInput struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
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
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
}

// * Read all
type WorkspaceGetAllInput struct {
	Limit int `json:"limit"`
	UserId int `json:"userId"`
}
type WorkspaceGetAllResponse struct {
	Data []Workspace `json:"data"`
}

type Workspace struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Subtitle string `json:"subtitle"`
}
