package auth

import (
	"harmony/domains/notification"
	"harmony/domains/user"

	"golang.org/x/crypto/bcrypt"
)

type Service struct {
	repository iRepository
	notifySvc notification.Service
}

// login implements iService.
func (*Service) login(data LoginDto) {
	panic("unimplemented")
}

// CreateUser implements iRepository.
func (s Service) CreateUser(data createUserDto) (user.User, error) {

	password, err := bcrypt.GenerateFromPassword([]byte(data.Password), 14)

	if err != nil {
		return user.User{}, err
	}

	user, err := s.repository.CreateUser(user.User{
		Email:    data.Email,
		Password: string(password),
	})

	if err != nil {
		return user, err
	}

	s.notifySvc.SendEmail(user.Email, "Your account has been created successfully");
	
	return user, nil

}

func InitService(repository iRepository) iService {
	return &Service{repository: repository}
}
