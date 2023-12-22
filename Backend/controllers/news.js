const user = require('../models/news')
const newsModel = require('../models/news')


module.exports.addNews = async (req, res) => {
    try {
        const title = req.body.title
        const image = req.file.path
        const content = req.body.content

        if (!title || !image || !content) {
            return res.send({ code: 400, message: 'Bad Request' })
        }
        const newNews = new newsModel({ title, image, content, })
        const response = await newNews.save()
        if (response) {
            return res.send({ code: 200, message: 'News Added Success' })
        }
    } catch (err) {
        return res.send({ code: 500, message: 'Server Error' })
    }
}

module.exports.getNews = async (req, res) => {
    try {
        const _newsId = req.params.id
        const _data = await newsModel.findOne({ _id: _newsId })
        res.send({ code: 200, message: 'Find Success', data: _data })
    } catch (err) {
        res.send({ code: 500, message: 'Server Error' })
    }
}

module.exports.getAllNews = async (req, res) => {
    try {
        const _data = await newsModel.find({})
        res.send({ code: 200, message: 'Find Success', data: _data })
    } catch (err) {
        res.send({ code: 500, message: 'Server Error' })
    }
}

module.exports.editNews = async (req, res) => {
    try {
        const id = req.params.id
        console.log(req.body, req.file, id, "45")
        let _data = {}
        if (req.body.title) {
            _data["title"] = req.body.title
        }
        if (req.body.content) {
            _data["content"] = req.body.content
        }
        if (req.file && req.file.path) {
            _data["image"] = req.file.path
        }
        
        console.log(_data, "57")
        const response = await newsModel.findByIdAndUpdate(id, _data, { new: true })
        if (response) {
            res.send({ code: 200, message: 'Edit news success', data: response })
        }
    } catch (err) {
        console.log(err)
        res.send({ code: 500, message: 'Server Error' })
    }
}
module.exports.deleteNews = async (req, res) => {
    try {
        const id = req.params.id
        const response = await newsModel.deleteOne({ _id: id })
        if (response) {
            res.send({ code: 200, message: 'Delete news Success' })
        }
    } catch (err) {
        res.send({ code: 500, message: 'Server Error' })
    }
}