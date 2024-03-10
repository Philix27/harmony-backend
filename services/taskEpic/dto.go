package taskEpic

type taskEpicModel struct {
	Id          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	UpdateAt    bool   `json:"updateAt"`
	CreateAt    string `json:"createAt"`
}

type createTaskEpicDto struct {
	Title       string `json:"title"`
	Description string `json:"description"`
}

type updateTaskEpicDto struct {
	Title       string `json:"title"`
	Description string `json:"description"`
}

type deleteTaskEpicDto struct {
	Id string `json:"id"`
}

type getOneTaskEpicDto struct {
	Id string `json:"id"`
}
