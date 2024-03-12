package announcement

type iRepository interface {
	Create(data AnnouncementM)
	Update(data AnnouncementM)
	Delete(dataId int)
	FindById(dataId int) (data AnnouncementM, err error)
	FindAll() (list []AnnouncementM)
}

type iService interface {
	Create(data createAnnouncementDto)
	Update(data updateAnnouncementDto)
	Delete(dataId int)
	FindById(dataId int) (data announcementResponseDto, err error)
	FindAll() (list []announcementResponseDto)
}
