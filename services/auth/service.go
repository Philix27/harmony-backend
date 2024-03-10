package auth

import (
	"harmony/services/user"

	"golang.org/x/crypto/bcrypt"
)

type Service struct {
	repository iRepository
}

// login implements iService.
func (*Service) login(data LoginDto) {
	panic("unimplemented")
}

// CreateUser implements iRepository.
func (s Service) CreateUser(data createUserDto) error {

	password, err := bcrypt.GenerateFromPassword([]byte(data.Password), 14)

	if err != nil {
		return err
	}

	return s.repository.CreateUser(user.User{
		Email:    data.Email,
		Password: string(password),
	})

}

func NewService(repository iRepository) iService {
	return &Service{repository: repository}
}
