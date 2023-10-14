const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  reviewCount: {
    type: Number,
    required: true,
  },
  taskComplexity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  deliveryTime: {
    type: String,
    required: true,
  },
  testimonial: {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  about: {
    from: {
      type: String,
      required: true,
    },
    partnerSince: {
      type: String,
      required: true,
    },
    averageResponseTime: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  services: {
    type: [String],
    required: true,
  },
  benefits: {
    type: [String],
    required: true,
  },
});

const figmas = mongoose.model('figmas', mySchema);

module.exports = figmas;
