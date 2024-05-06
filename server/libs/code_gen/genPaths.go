package code_gen

import (
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
)

func GenerateTsRouteHandlers(server *fiber.App, outputPath string) {

	// server.GetRoute("./").Handlers
	// Open the output file for writing
	output, err := os.Create(outputPath)
	if err != nil {
		fmt.Println("Error creating output file:", err)
		return
	}

	defer output.Close()

	var arrName []string
	var arrWeirdPath = []string{"/api", "/api/v1", "/", "/swagger/*"}

	setup := `
import * as T from "./dto";
import axiosClient from "./axiosClient";

export class ApiRoutes {
	`

	// 	  public async announcementGetAll(
	//     params: T.AnnouncementGetAllQueryParams
	//   ): Promise<T.AnnouncementGetAllResponse> {
	//     const res = await axiosClient.get("announcement/", { params: params })
	//     return res.data
	//   }

	for _, r := range server.GetRoutes() {

		if arrContains(arrName, r.Name) || arrContains(arrWeirdPath, r.Path) {
			continue
		}

		arrName = append(arrName, r.Name)

		c := fmt.Sprintf("  "+
			`
  public async %v: Promise<T.%vResponse> {
	const res = await axiosClient.%v(%v);
    return res.data
  }
 `, genFuncHead(r.Path, r.Name, r.Method),
			r.Name,
			getMethod(r.Method),
			processPath(r.Method, r.Name, r.Path))

		setup = setup + c + "\n"
	}

	newVar := fmt.Append([]byte(setup), "}")

	_, err = output.Write([]byte(newVar))
	if err != nil {
		fmt.Println("Error writing to output file:", err)
	}

	err2 := err
	// err2 := os.WriteFile("c/routes.ts", []byte(newVar), 23)
	if err2 != nil {
		log.Print(err2)
	}
}
