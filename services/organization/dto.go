package organization

type createOrganizationDto struct {
	Name        string
	Description string
}
type updateOrganizationDto struct {
	Id          string
	Description string
}
type deleteOrganizationDto struct {
	Id string
}
type getByUserIdDto struct {
	Id string
}
type getByOrgIdDto struct {
	Id string
}
