package team

type TeamModel struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	UpdateAt    bool   `json:"updateAt"`
	CreateAt    string `json:"createAt"`
}
