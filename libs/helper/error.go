package helper

func ErrorPanic(err error, msg string) {
	if err != nil {
		// log.Fatal(err)
		panic(err)
	}
}
