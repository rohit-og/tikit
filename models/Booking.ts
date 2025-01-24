import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  hotel_id: {
    type: String,
    required: true,
  },
  check_in_date: {
    type: Date,
    required: true,
  },
  check_out_date: {
    type: Date,
    required: true,
  },
  ticket_number: {
    type: String,
    required: true,
    unique: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  booking_properties: {
    type: Object,
    required: true,
    default: {
      rooms: 1,
      adults: 2,
      children: 0,
    },
  }
}, {
  timestamps: true
});

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
