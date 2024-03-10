package auth

import (
	"harmony/services/user"

	"golang.org/x/crypto/bcrypt"
)

type Service struct {
	repository iRepository
}

func NewService(repository iRepository) iService {
	return &Service{repository: repository}
}

// CreateUser implements iRepository.
func (s Service) CreateUser(data createUserDto) {
password, _ := bcrypt.GenerateFromPassword([]byte(data.Password), 14)
    s.repository.CreateUser(user.User{
        Email: data.Email,
        Password: string(password),  
    })
}

