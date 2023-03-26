import { Schema, model } from "mongoose";

const mobileSchema = new Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      trim: true, //elimina los espacios de más
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    releaseDate: {
        type: String,
        required: true,
    },
    ram: {
        type: String,
        required: true,
    },
    storage: {
        type: String,
        required: true,
    },
    numbCameras: {
        type: String,
        required: true,
    },
    option: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Mobile", mobileSchema);