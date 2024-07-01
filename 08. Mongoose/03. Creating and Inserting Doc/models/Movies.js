import mongoose from "mongoose";

//define schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// creating model
const movieModel = mongoose.model("Movie", movieSchema);
// const createDoc = async () => {
//   try {
//     //creating new doc
//     const m1 = new movieModel({
//       name: "Spider man 2",
//       ratings: 4,
//       money: 100,
//       genre: ["action", "sci-fi"],
//       isActive: true,
//       comments: [{ value: "Good movie" }],
//     });

//     const result = await m1.save();
//     console.log(result)
//   } catch (error) {
//     console.log(error);
//   }
// };

const insertManyDoc = async () => {
  try {
    //creating new doc
    const m1 = new movieModel({
      name: "Spider-Man 2",
      ratings: 4,
      money: 100,
      genre: ["action", "sci-fi"],
      isActive: true,
      comments: [{ value: "Good movie" }],
    });

    const m2 = new movieModel({
      name: "John Wick: Chapter 4",
      ratings: 5,
      money: 120,
      genre: ["action"],
      isActive: true,
      comments: [{ value: "Great action scenes" }],
    });

    const m3 = new movieModel({
      name: "Inception",
      ratings: 5,
      money: 200,
      genre: ["sci-fi", "thriller"],
      isActive: true,
      comments: [{ value: "Mind-bending" }],
    });

    const m4 = new movieModel({
      name: "The Dark Knight",
      ratings: 5,
      money: 150,
      genre: ["action", "drama"],
      isActive: true,
      comments: [{ value: "Masterpiece" }],
    });

    const m5 = new movieModel({
      name: "Interstellar",
      ratings: 4.5,
      money: 180,
      genre: ["sci-fi", "drama"],
      isActive: true,
      comments: [{ value: "Amazing visuals" }],
    });

    const result = await movieModel.insertMany([m1, m2, m3, m4, m5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { insertManyDoc };
