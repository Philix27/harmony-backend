package helper

import "log"

func ErrorPanic(err error, msg string) {
	if err != nil {
		log.Fatal(err, msg)
		panic(err)
	}
}


