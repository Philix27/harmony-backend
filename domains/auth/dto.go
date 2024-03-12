package auth

type createUserDto struct {
	Email    string
	Password string
}
type getUserByEmailDto struct {
	Email string
}
type LoginDto struct {
	Email    string
	Password string
}
