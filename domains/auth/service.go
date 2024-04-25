package auth

import (
	"harmony/domains/notification"
	"harmony/libs/app_err"
	"harmony/libs/database"

	"golang.org/x/crypto/bcrypt"
)

type iService interface {
	CreateUser(data createUserDto) (database.User, error)
	login(data LoginDto) (string, error)
}

type Service struct {
	repository iRepository
	notifySvc  notification.Service
}

// login implements iService.
func (s *Service) login(data LoginDto) (string, error) {
	user, err := s.repository.getUserByEmail(data.Email)

	if err != nil {
		return app_err.Auth_IncorrectPassword, err
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(data.Password)); err != nil {
		return app_err.Auth_IncorrectPassword, err
	}

	// claims := jwt.ClaimsFactory(jwt.NewSigner(), jwt.StandardClaimsFactory{issu})
	return "Success", nil
}

// CreateUser implements iRepository.
func (s Service) CreateUser(data createUserDto) (database.User, error) {

	password, err := bcrypt.GenerateFromPassword([]byte(data.Password), 14)

	if err != nil {
		return database.User{}, err
	}

	user, err := s.repository.CreateUser(database.User{
		Email:    data.Email,
		Password: string(password),
	})

	if err != nil {
		return user, err
	}

	return user, nil

}

func InitService(repository iRepository) iService {
	return &Service{repository: repository}
}
