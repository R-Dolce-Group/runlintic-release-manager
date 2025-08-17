import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"
// Use the .env root as the global environment file for all apps and packages
export const env = createEnv({
  server: {
    GH_TOKEN: z.string().min(1),
    GH_URL: z.string().min(1),
    GH_SSH: z.string().min(1),
    DATABASE_TYPE: z.string().min(1),
    DATABASE_URI: z.string().min(1),
    NODE_ENV: z.string().min(1)
  },
  runtimeEnv: {
    GH_TOKEN: process.env.GH_TOKEN,
    GH_URL: process.env.GH_URL,
    GH_SSH: process.env.GH_SSH,
    DATABASE_TYPE: process.env.DATABASE_TYPE,
    DATABASE_URI: process.env.DATABASE_URI,
    NODE_ENV: process.env.NODE_ENV
  }
})
