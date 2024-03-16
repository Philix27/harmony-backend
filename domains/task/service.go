package task

type Service struct {
	repository iRepository
}

// create implements iService.
func (s *Service) create(data createTaskDto) (TaskModel, error) {

	user, err := s.repository.createTask(TaskModel{
		Name:        data.Name,
		Story:       data.Story,
		Description: data.Description,
		AssignedTo:  data.AssignedTo,
	})

	if err != nil {
		return user, err
	}

	return user, nil
}

// getByOrgId implements iService.
func (*Service) getByOrgId(data getTaskByIdDto) (TaskModel, error) {
	panic("unimplemented")
}

// getTasks implements iService.
func (*Service) getTasks(data filterDto) (TaskModel, error) {
	panic("unimplemented")
}

func NewService(repository iRepository) iService {
	return &Service{repository: repository}
}
