package announcement

import (
	"errors"
	"harmony/helper"

	"gorm.io/gorm"
)

type RepositoryImpl struct {
	Db *gorm.DB
}

func NewAnnouncementRepository() iRepository {

	return &RepositoryImpl{Db: db}
}


// Create implements iRepository.
func (r *RepositoryImpl) Create(data announcementM) {
    result := r.Db.Create(&data)
helper.ErrorPanic(result.Error)
}

// Delete implements iRepository.
func (r *RepositoryImpl) Delete(dataId int) {
    var payload announcementM;
    result := r.Db.Where ("id = ?", dataId).Delete(&payload)
    helper.ErrorPanic(result.Error)
}

// FindAll implements iRepository.
func (r *RepositoryImpl) FindAll() (list []announcementM) {
	var announceList []announcementM;
    result := r.Db.Find(&announceList)
    helper.ErrorPanic(result.Error)
    return announceList 
}

// FindById implements iRepository.
func (r *RepositoryImpl) FindById(dataId int) (data announcementM, err error) {
	var announcementItem announcementM;
    result := r.Db.Find(&announcementItem, dataId)

    if result != nil {
        return announcementItem, nil
    } else  {
        return announcementItem, errors.New("Announcement not found")
    }
   
}

// Update implements iRepository.
func (r *RepositoryImpl) Update(data announcementM) {
	panic("unimplemented")
}

