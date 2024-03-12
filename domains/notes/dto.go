package notes

type Notes struct {
	Id       uint   `json:"id"`
	Title    string `json:"name"`
	Body     string `json:"description"`
	UpdateAt bool   `json:"updateAt"`
	CreateAt string `json:"createAt"`
}
