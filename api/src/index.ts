import app from "./server";

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));
