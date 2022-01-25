const fs = require('fs')
const path = require('path')

const generateNews = () => fs.writeFile(path.resolve(__dirname, "data.json"), JSON.stringify({ id: 0, title: "Заголовок для статьи", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dolores dolorem minus eveniet minima accusantium quisquam quam vel cupiditate harum?", datetime: new Date() }, null, 2), (err, data) => console.log(1))
generateNews()