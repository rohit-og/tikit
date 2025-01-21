export const routes = {
  hotels: {
    path: "/hotels/hotel-listing",
    protected: true,
  },
  profile: {
    path: "/profile",
    protected: true,
  },
  auth: {
    path: "/user/auth",
    protected: false,
  },
};
