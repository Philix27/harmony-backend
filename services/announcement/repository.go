package announcement

type iRepository interface {
    Create(data announcementM)
    Update(data announcementM)
    Delete(dataId int)
    FindById(dataId int)(data announcementM, err error)
    FindAll()(list []announcementM)
}