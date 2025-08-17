import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

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
    NODE_ENV: process.env.NODE_ENV
  },
})
