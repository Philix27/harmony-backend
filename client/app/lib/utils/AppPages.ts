export class AppPages {
  static dashboard = "/dashboard"
  static repositories = "/repositories"
  static integrations = "/integrations"
  static board = "/board"
  static epics = "/epics"
  static stories = "/stories"

  static schedule = {
    calender: "/schedule/calender",
    events: "/schedule/events",
    automate: "/schedule/automate",
  }

  static backend = {
    providers: "/backend/storybook",
    test: "/backend/vitest",
    graphql: "/backend/graphql",
    sentry: "/backend/sentry",
  }
  static database = {
    postgres: "/database/postgres",
    mysql: "/database/mysql",
    mongodb: "/database/mongodb",
    mariadb: "/database/mariadb",
  }
}
