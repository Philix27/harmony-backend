package notification

type NotificationService struct {
}

// sendEmail implements iService.
func (*NotificationService) sendEmail() {
	panic("unimplemented")
}

// sendEmailOtp implements iService.
func (*NotificationService) sendEmailOtp() {
	panic("unimplemented")
}

// sendPhoneMsg implements iService.
func (*NotificationService) sendPhoneMsg() {
	panic("unimplemented")
}

// sendPhoneOtp implements iService.
func (*NotificationService) sendPhoneOtp() {
	panic("unimplemented")
}

func InitializeNotifiaction() iService {
	return &NotificationService{}
}
