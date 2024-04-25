package auth

import (
	"harmony/libs/database"

	"gorm.io/gorm"
)

type iRepository interface {
	CreateUser(data database.User) (database.User, error)
	getUserByEmail(email string) (database.User, error)
}

type repository struct {
	Db *gorm.DB
}

// getUser implements iRepository.
func (r *repository) getUserByEmail(email string) (database.User, error) {
	var userModel database.User

	err := r.Db.Where("email = ?", email).First(&userModel)

	return userModel, err.Error
}

func NewRepository(db *gorm.DB) iRepository {
	return &repository{Db: db}
}

// CreateUser implements iRepository.
func (r *repository) CreateUser(data database.User) (database.User, error) {
	userData := new(database.User)
	result := r.Db.Create(userData)

	return *userData, result.Error
}
