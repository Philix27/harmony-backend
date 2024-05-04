package board

// ? create
type BoardCreatePathParams struct {
	Id string `json:"id"`
}
type BoardCreateQueryParams struct {
}

// ? delete
type BoardDeletePathParams struct {
	Id string `json:"id"`
}
type BoardDeleteQueryParams struct {
}

// ? Update
type BoardUpdatePathParams struct {
	Id string `json:"id"`
}
type BoardUpdateQueryParams struct {
}
// ? GetAll
type BoardGetAllPathParams struct {
	Id string `json:"id"`
}
type BoardGetAllQueryParams struct {
}
