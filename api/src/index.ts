import { config } from "./config";
import app from "./server";

const PORT = config.port;

app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));
