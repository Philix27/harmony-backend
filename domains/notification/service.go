package notification

type Service struct {
	SendGrid string
	Twilo    string
	Termii   string
}

// sendEmail implements iService.
func (*Service) sendEmail() {
	panic("unimplemented")
}

// sendEmailOtp implements iService.
func (*Service) sendEmailOtp() {
	panic("unimplemented")
}

// sendPhoneMsg implements iService.
func (*Service) sendPhoneMsg() {
	panic("unimplemented")
}

// sendPhoneOtp implements iService.
func (*Service) sendPhoneOtp() {
	panic("unimplemented")
}

func InitializeNotifiaction() iService {
	return &Service{}
}
