import { info } from "console"
import path from "path"

const file = "/Users/JHON/Downloads/File Project/contoh.txt"

info(path.dirname(file));
info(path.basename(file));
info(path.extname(file));