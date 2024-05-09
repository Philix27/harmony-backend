package app_err

type ErrorResponse struct {
    Error string `json:"error"`
}

func (s ErrorResponse) error()  {
    
}