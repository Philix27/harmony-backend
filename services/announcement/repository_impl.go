package announcement

import (
	"errors"
	"harmony/helper"

	"gorm.io/gorm"
)

type repositoryImpl struct {
	Db *gorm.DB
}

func NewAnnouncementRepository(db *gorm.DB) iRepository {
	return &repositoryImpl{Db: db}
}

// Create implements iRepository.
func (r *repositoryImpl) Create(data announcementM) {
	result := r.Db.Create(&data)
	helper.ErrorPanic(result.Error)
}

// Delete implements iRepository.
func (r *repositoryImpl) Delete(dataId int) {
	var payload announcementM
	result := r.Db.Where("id = ?", dataId).Delete(&payload)
	helper.ErrorPanic(result.Error)
}

// FindAll implements iRepository.
func (r *repositoryImpl) FindAll() (list []announcementM) {
	var announceList []announcementM
	result := r.Db.Find(&announceList)
	helper.ErrorPanic(result.Error)
	return announceList
}

// FindById implements iRepository.
func (r *repositoryImpl) FindById(dataId int) (data announcementM, err error) {
	var announcementItem announcementM
	result := r.Db.Find(&announcementItem, dataId)

	if result != nil {
		return announcementItem, nil
	} else {
		return announcementItem, errors.New("Announcement not found")
	}

}

// Update implements iRepository.
func (r *repositoryImpl) Update(data announcementM) {
	var updateAn = updateAnnouncementDto{
		Title: data.Subtitle,
		Id:    data.Id,
	}

	result := r.Db.Model(&data).Updates(updateAn)
	helper.ErrorPanic(result.Error)
}
