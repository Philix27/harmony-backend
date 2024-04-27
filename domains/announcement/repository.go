package announcement

import (
	"errors"

	"harmony/libs/database"

	"golang.org/x/exp/slog"
	"gorm.io/gorm"
)

type iRepository interface {
	Create(data createAnnouncementDto) error
	Update(data updateAnnouncementDto) error
	Delete(dataId int) error
	FindById(dataId int) (announcement, error)
	FindAll() ([]announcement, error)
}

type Repository struct {
	Db          *gorm.DB
	logger      *slog.Logger
	logGroupKey string
}

func NewRepository(db *gorm.DB, logger *slog.Logger, logGroupKey string) iRepository {
	return &Repository{Db: db, logger: logger, logGroupKey: logGroupKey}
}

// Create implements iRepository.
func (r *Repository) Create(data createAnnouncementDto) error {
	model := database.Announcement{
		Title:       data.Title,
		Subtitle:    data.Subtitle,
		WorkspaceID: data.WorkspaceID,
	}

	if result := r.Db.Create(&model); result.Error != nil {
		println(result.Error)
		r.logger.WithGroup(r.logGroupKey).Error("FAILED_TO_CREATE", "errMsg", result.Error)
		return result.Error
	}
	r.logger.WithGroup(r.logGroupKey).Info("CREATE_SUCCESSFUL")
	return nil
}

// Update implements iRepository.
func (r *Repository) Update(data updateAnnouncementDto) error {
	var updateAn = updateAnnouncementDto{
		Title: data.Subtitle,
		Id:    int(data.Id),
	}

	result := r.Db.Model(&data).Updates(updateAn)

	if result.Error != nil {
		r.logger.Error("CANNOT UPDATE")
		return result.Error
	}
	r.logger.Info("UPDATE announcement successful")
	return nil
}

// FindAll implements iRepository.
func (r *Repository) FindAll() ([]announcement, error) {
	var announceList []announcement
	result := r.Db.Find(&announceList)

	if result.Error != nil {
		return nil, result.Error
	}

	return announceList, nil
}

// FindById implements iRepository.
func (r *Repository) FindById(dataId int) (announcement, error) {
	var announcementItem database.Announcement
	result := r.Db.Find(&announcementItem, dataId)

	res := announcement{
		Title:    announcementItem.Title,
		Subtitle: announcementItem.Subtitle,
	}

	if result != nil {
		return res, nil
	} else {
		return res, errors.New("NOT FOUND")
	}

}

// Delete implements iRepository.
func (r *Repository) Delete(dataId int) error {
	result := r.Db.Where("id = ?", dataId).Delete(new(announcement))

	if result.Error != nil {
		return result.Error
	}
	return nil
}
