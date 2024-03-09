package organization

type  organizationModel struct{
    Id string
    Name string
    Description string
    CreatedAt string
    UpdatedAt string
}

type  createOrganizationDto struct{
    Name string
    Description string
}
type  updateOrganizationDto struct{
    Id string
    Description string
}
type  deleteOrganizationDto struct{
    Id string
}
type  getByIdOrganizationDto struct{
    Id string

}