export const routes = {
  hotels: {
    path: "/hotels/hotel-listing",
    protected: true,
  },
  profile: {
    path: "/user/profile",
    protected: true,
  },
  manageProfile: {
    path: "/user/profile/manage-profile",
    protected: true,
  },
  yourBooking: {
    path: "/user/profile/your-bookings",
    protected: true,
  },
  auth: {
    path: "/user/auth",
    protected: false,
  },
};
