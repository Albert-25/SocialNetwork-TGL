const express = require("express");
const router = express.Router();
const path = require("path")

const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDocs = YAML.load(path.join(__dirname, "./api.yaml"))

const userRouter = require("./userRouter");
const postsRouter = require("./postsRouter")
const commentsRouter = require("./commentsRouter");
const friendsRouter = require("./friendsRouter");
const favoritesRouter = require("./favoritesRouter");
const conversationsRouter = require("./conversationsRouter")
const messagesRouter = require("./messagesRouter")

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              alias:
 *                  type:string
 *                  description: user alias
 *              name:
 *                  type:string
 *                  description: user name
 *              email:
 *                  type:string
 *                  description: user email
 *              phone:
 *                  type:string
 *                  description: user phone
 *              password:
 *                  type:string
 *                  description: user password
 *              required:
 *              - alias
 *              - name
 *              - email
 *              - phone
 *              - password       
 *              example:
 *                  alias: Albert-25
 *                  name: Albert Smith
 *                  email: albert.smith@email.com
 *                  phone: 0123456789
 *                  password: password
 */


router.use("/user", userRouter)
router.use("/posts", postsRouter)
router.use("/comments", commentsRouter)
router.use("/friends", friendsRouter)
router.use("/favorites", favoritesRouter)
router.use("/conversations", conversationsRouter)
router.use("/messages", messagesRouter)
router.use("/", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))

module.exports = router