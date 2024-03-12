package organization

import "time"

type OrganizationModel struct {
	Name        string
	Description string
	CreatedAt   time.Time
	UpdatedAt   time.Time
}
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
