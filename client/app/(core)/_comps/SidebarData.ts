import { AppPages } from "@/app/lib";





export type ISection = {
  title: string
  group: {
    name: string
    link: string
  }[]
}
export const data: ISection[] = [
  {
    title: "Frontend",
    group: [
      {
        name: "Storybook",
        link: AppPages.backend.test,
      },
      {
        name: "Cypress",
        link: AppPages.backend.test,
      },
      {
        name: "Vitest",
        link: AppPages.backend.test,
      },
      {
        name: "Github Actions",
        link: AppPages.backend.test,
      },
      {
        name: "Graphql",
        link: AppPages.backend.test,
      },
      {
        name: "Sentry",
        link: AppPages.backend.test,
      },
      {
        name: "Rest Api",
        link: AppPages.backend.test,
      },
    ],
  },

  {
    title: "Backend",
    group: [
      {
        name: "Jest",
        link: AppPages.backend.test,
      },
      {
        name: "Graphql",
        link: AppPages.backend.graphql,
      },
      {
        name: "Providers",
        link: AppPages.backend.providers,
      },
      {
        name: "Sentry",
        link: AppPages.backend.sentry,
      },
    ],
  },
  {
    title: "Databases",
    group: [
      {
        name: "Postgres",
        link: AppPages.database.postgres,
      },
      {
        name: "Mysql",
        link: AppPages.database.mysql,
      },
      {
        name: "MongoDb",
        link: AppPages.database.mongodb,
      },
      {
        name: "MariaDb",
        link: AppPages.database.mariadb,
      },
    ],
  },
  {
    title: "Others",
    group: [
      {
        name: "Repositories",
        link: AppPages.repositories,
      },
      {
        name: "Integrations",
        link: AppPages.integrations,
      },
    ],
  },
]