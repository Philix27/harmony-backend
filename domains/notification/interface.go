package notification



type iService interface {
	sendEmailOtp() 
	sendPhoneOtp() 
	sendEmail() 
	sendPhoneMsg() 

}

