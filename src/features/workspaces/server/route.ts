import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { ID } from "node-appwrite";
import { createWorkspaceSchema } from "../schemas";
import { sessionMiddleware } from "@/lib/session-middleware";
import { BUCKET_ID, DATABASE_ID, WORKSPACES_ID } from "@/config";

const app = new Hono();

app.post(
  "/",
  zValidator("form", createWorkspaceSchema),
  sessionMiddleware,
  async (c) => {
    const databases = c.get("databases");
    const storage = c.get("storage");
    const user = c.get("user");

    const { name, image } = c.req.valid("form");

    let uploadedImageUrl: string | undefined;

    // if (image instanceof File) {
    const file = await storage.createFile(BUCKET_ID, ID.unique(), image);

    const arrayBuffer = await storage.getFilePreview(BUCKET_ID, file.$id);

    // eslint-disable-next-line prefer-const
    uploadedImageUrl = `data:image/png;base64,${Buffer.from(
      arrayBuffer
    ).toString("base64")}`;
    // }

    const workspace = await databases.createDocument(
      DATABASE_ID,
      WORKSPACES_ID,
      ID.unique(),
      {
        name,
        userId: user.$id,
        imageUrl: uploadedImageUrl,
      }
    );

    return c.json({ data: workspace });
  }
);
export default app;