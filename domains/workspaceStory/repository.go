package workspaceStory

import (
	"harmony/libs/database"

	"golang.org/x/exp/slog"
	"gorm.io/gorm"
)

type iRepository interface {
	Create(WorkspaceStoryCreateInput) error
	Update(WorkspaceStoryUpdateInput) error
	Delete(int) error
	FindById(int) (WorkspaceStory, error)
	FindWorkspaceId(workspaceId int, limit int) ([]WorkspaceStory, error)
}

type Repository struct {
	Db          *gorm.DB
	logger      *slog.Logger
	logGroupKey string
}

func NewRepository(db *gorm.DB, logger *slog.Logger, logGroupKey string) iRepository {
	return &Repository{
		Db:         db,
		logger:      logger,
		logGroupKey: logGroupKey,
	}
}

// Create implements iRepository.
func (r *Repository) Create(data WorkspaceStoryCreateInput) error {
	// fmt.Println(data)
	if result := r.Db.Create(&database.WorkspaceStory{
		Title:           data.Title,
		Description:     data.Description,
		WorkspaceEpicID: data.WorkspaceEpicId,
	}); result.Error != nil {
		println(result.Error)
		r.logger.Error(
			"FAILED_TO_CREATE",
			"errMsg",
			result.Error,
		)
		return result.Error
	}
	r.logger.Info("CREATE_SUCCESSFUL")
	return nil
}

// Update implements iRepository.
func (r *Repository) Update(data WorkspaceStoryUpdateInput) error {
	result := r.Db.Where(
		"id = ?", data.Id,
	).Updates(data)

	if result.Error != nil {
		r.logger.Error("CANNOT_UPDATE")
		return result.Error
	}
	r.logger.Info("UPDATE_SUCCESSFUL")
	return nil
}

// FindAll implements iRepository.
func (r *Repository) FindWorkspaceId(workspaceEpicId int, limit int) ([]WorkspaceStory, error) {
	var list []WorkspaceStory
	result := r.Db.Where("workspace_id =? ", workspaceEpicId).Limit(limit).Find(&list)

	if result.Error != nil {
		r.logger.Error("CANNOT_FIND_ALL:", result.Error)
		return nil, result.Error
	}
	r.logger.Info("READ_ALL_SUCCESS")
	return list, nil
}

// FindById implements iRepository.
func (r *Repository) FindById(id int) (WorkspaceStory, error) {
	object := WorkspaceStory{}

	result := r.Db.Where("id = ?", id).First(&object, id)

	if result.Error != nil {
		r.logger.Error("FindById:", result.Error)
		return WorkspaceStory{}, result.Error
	} else {
		r.logger.Error("RETRIEVE_FIND_ONE:", object)
		return object, nil
	}

}

// Delete implements iRepository.
func (r *Repository) Delete(dataId int) error {
	result := r.Db.Where("id = ?", dataId).Delete(&database.WorkspaceStory{})

	if result.Error != nil {
		return result.Error
	}
	return nil
}
