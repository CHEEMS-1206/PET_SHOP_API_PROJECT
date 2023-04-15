import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const dogSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: function () {
      return new ObjectId().toString();
    },
  },
  petName: {
    type: String,
    required: true,
  },
  petNickName: {
    type: String,
    required: false,
    default: "-",
  },
  petAge: {
    type: Number,
    required: true,
  },
  petGender: {
    type: String,
    requyired: true,
  },
  petImage: {
    type: String,
    required: false,
    default: "",
  },
  petPrice: {
    type: Number,
    required: true,
  },
  petId: {
    type: Number,
    required: true,
  },
  petBio: {
    type: String,
    required: true,
  },
  petBreed: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
  petPrevOwner: {
    type: String,
    default: "None",
  },
});
const dogModel = mongoose.model("dogModel", dogSchema);
export default dogModel;
