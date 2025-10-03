import express,{Request, Response}  from "express";
const app = express();

const PORT = 8000;

app.get("/", (req: Request, res: Response)=>{
    res.send("CoDrow server is live")
})

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});