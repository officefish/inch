const api = require("../app")(3001)

/** Testing express auth api */
require('./schema/auth.schema')(api)





