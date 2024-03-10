package announcement

import (
	"errors"
	"harmony/libs/helper"

	"gorm.io/gorm"
)

type repositoryImpl struct {
	Db *gorm.DB
}

func NewAnnouncementRepository(db *gorm.DB) iRepository {
	return &repositoryImpl{Db: db}
}

// Create implements iRepository.
func (r *repositoryImpl) Create(data AnnouncementM) {
	result := r.Db.Create(&data)
	helper.ErrorPanic(result.Error, "Create announcement")
}

// Delete implements iRepository.
func (r *repositoryImpl) Delete(dataId int) {
	result := r.Db.Where("id = ?", dataId).Delete(new(AnnouncementM))
	helper.ErrorPanic(result.Error, "Delete announcement")
}

// FindAll implements iRepository.
func (r *repositoryImpl) FindAll() (list []AnnouncementM) {
	var announceList []AnnouncementM
	result := r.Db.Find(&announceList)
	helper.ErrorPanic(result.Error, "Find all announcement")
	return announceList
}

// FindById implements iRepository.
func (r *repositoryImpl) FindById(dataId int) (data AnnouncementM, err error) {
	var announcementItem AnnouncementM
	result := r.Db.Find(&announcementItem, dataId)

	if result != nil {
		return announcementItem, nil
	} else {
		return announcementItem, errors.New("Announcement not found")
	}

}

// Update implements iRepository.
func (r *repositoryImpl) Update(data AnnouncementM) {
	var updateAn = updateAnnouncementDto{
		Title: data.Subtitle,
		Id:    data.Id,
	}

	result := r.Db.Model(&data).Updates(updateAn)
	helper.ErrorPanic(result.Error, "Update announcement")
}
