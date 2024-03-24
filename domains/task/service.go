package task

import (
	"harmony/libs/database"
)

type Service struct {
	repository iRepository
}

// create implements iService.
func (s *Service) create(data createTaskDto) (database.Task, error) {

	user, err := s.repository.createTask(database.Task{
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
func (*Service) getByOrgId(data getTaskByIdDto) (database.Task, error) {
	panic("unimplemented")
}

// getTasks implements iService.
func (*Service) getTasks(data filterDto) (database.Task, error) {
	panic("unimplemented")
}

func NewService(repository iRepository) iService {
	return &Service{repository: repository}
}
