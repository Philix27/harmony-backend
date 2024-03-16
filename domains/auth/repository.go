package auth

import (
	"harmony/domains/user"

	"gorm.io/gorm"
)

type repository struct {
	Db *gorm.DB
}

// getUser implements iRepository.
func (r *repository) getUserByEmail(email string) (user.User, error) {
	var userModel user.User

	err := r.Db.Where("email = ?", email).First(&userModel)

	return userModel, err.Error
}

func NewRepository(db *gorm.DB) iRepository {
	return &repository{Db: db}
}

// CreateUser implements iRepository.
func (r *repository) CreateUser(data user.User) (user.User, error) {
	userData := new(user.User)
	result := r.Db.Create(userData)

	return *userData, result.Error
}
