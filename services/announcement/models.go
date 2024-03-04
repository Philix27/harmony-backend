package announcement

// @Success 200 {array} model.Account
type announcementDto struct {
	Id       int    `json:"id"`
	Title    string `json:"title"`
	Expired  bool   `json:"expiredAt"`
	CreateAt string `json:"createAt"`
}

