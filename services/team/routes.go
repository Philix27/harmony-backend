package team

import (
	"github.com/gofiber/fiber/v2"
)

func RoutesHandler(router fiber.Router) {
	router.Post("/create_team", createTeam)
	router.Post("/get_teams", getAllTeams)
	router.Post("/get_team_members", getTeamMembers)
	router.Post("/add_member", addMember)
	router.Post("/remove_member", removeMember)
	router.Post("/delete_team", deleteTeam)
	// return c.SendStatus(fiber.StatusOK)
}
func getAllTeams(c *fiber.Ctx) error {
	return c.SendString("getAllTeams")
}
func getTeamMembers(c *fiber.Ctx) error {
	return c.SendString("getTeamMembers")
}
func createTeam(c *fiber.Ctx) error {
	return c.SendString("createTeam")
}
func addMember(c *fiber.Ctx) error {
	return c.SendString("addMember")
}
func removeMember(c *fiber.Ctx) error {
	return c.SendString("removeMember")
}
func deleteTeam(c *fiber.Ctx) error {
	return c.SendString("deleteTeam")
}
