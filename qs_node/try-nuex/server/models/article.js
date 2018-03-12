import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ActicleSchema = new Schema ({
    title: String,
    content: String,
    publish: {
        type: Boolean,
        default: false
    },
    views: {
        type:Number,
        default: 0
    },
    flag: {
        type: Number,
        default: 1
    },
    like: {
        type: Array,
        default: []
    },
    comments: {
        type: Array,
        default: []
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

ActicleSchema.options.toJSON = {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
    }
}

mongoose.model('Article', ActicleSchema);