package workspace

type createWorkspaceDto struct {
	Name        string
	Description string
}
type updateWorkspaceDto struct {
	Id          string
	Description string
}
type deleteWorkspaceDto struct {
	Id string
}
type getByUserIdDto struct {
	Id string
}
type getByOrgIdDto struct {
	Id string
}
