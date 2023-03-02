serverHttp = require("./app");
const { PORT } = require("./src/config/index");

// haciendo un commit para que los cambios en vercel surtan efecto

serverHttp.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})