async function routes(fastify, options) {
  const Post = fastify.mongo.db.collection("post");

  const postJsonSchema = {
    type: "object",
    required: ["title", "body"],
    properties: {
      title: { type: "string" },
      body: { type: "string" },
      tag: { type: "string" },
      createdDate: { type: "string" },
      updatedDate: { type: "string" },
    },
  };

  const schema = {
    body: postJsonSchema,
  };

  fastify.get("/post", async (request, reply) => {
    const posts = await Post.find().toArray();

    return posts;
  });

  fastify.get("/post/:id", async (request, reply) => {
    const id = new fastify.mongo.ObjectId(request.params.id);
    const post = await Post.findOne({ _id: id });
    if (!post) {
      return reply.code(400).send("No post with the given Id");
    }

    return post;
  });

  fastify.post("/post/create", { schema }, async (request, reply) => {
    const { title, body, tag } = request.body;
    const post = await Post.insertOne({
      title,
      body,
      tag,
      createdDate: new Date(),
      updatedDate: new Date(),
    });
    return post;
  });

  fastify.put("/post/edit/:id", async (request, reply) => {
    const id = new fastify.mongo.ObjectId(request.params.id);
    const checkPost = await Post.findOne({ _id: id });
    if (!checkPost) {
      return reply.code(400).send("No post with the given Id");
    }
    const title = request.body.title ? request.body.title : checkPost.title;
    const body = request.body.body ? request.body.body : checkPost.body;
    const tag = request.body.tag ? request.body.tag : checkPost.tag;
    const post = await Post.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          body: body,
          title,
          tag,
          updatedDate: new Date(),
        },
      }
    ).catch((err) => {
      throw new Error(err.message);
    });

    return post;
  });

  fastify.delete("/post/delete/:id", async (request, reply) => {
    const id = new fastify.mongo.ObjectId(request.params.id);
    const checkPost = await Post.findOne({ _id: id });
    if (!checkPost) {
      return reply.code(400).send("No post with the given Id");
    }

    const post = await Post.deleteOne({ _id: id });

    return post;
  });
}

module.exports = routes;
