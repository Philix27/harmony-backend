package announcement

type iRepository interface {
	Create(data announcementM)
	Update(data announcementM)
	Delete(dataId int)
	FindById(dataId int) (data announcementM, err error)
	FindAll() (list []announcementM)
}

type iService interface {
	Create(data createAnnouncementDto)
	Update(data updateAnnouncementDto)
	Delete(dataId int)
	FindById(dataId int) (data announcementResponseDto, err error)
	FindAll() (list []announcementResponseDto)
}
