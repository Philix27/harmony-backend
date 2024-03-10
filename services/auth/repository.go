package auth

import (
	"harmony/libs/helper"
	"harmony/services/user"

	"gorm.io/gorm"
)

type repository struct {
	Db *gorm.DB
}


func NewRepository(db *gorm.DB) iRepository {
	return &repository{Db: db}
}

// CreateUser implements iRepository.
func (r *repository) CreateUser(data user.User) {
    u := new(user.User)
	result := r.Db.Create(u)
    helper.ErrorPanic(result.Error, "Create User Error")
}
