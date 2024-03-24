package taskEpic

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
