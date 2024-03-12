package taskStory

type TaskStoryModel struct {
	Id          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	UpdateAt    bool   `json:"updateAt"`
	CreateAt    string `json:"createAt"`
}
