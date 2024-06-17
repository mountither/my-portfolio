import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";

const measurementIds = ["G-9HM886EPQD"]; // ensure this is your actual GA4 Measurement ID

if (!measurementIds) {
  throw new Error("No GA Measurement ID defined");
}

const analytics = Analytics({
  app: "my-portfolio",
  plugins: [
    googleAnalytics({
      measurementIds, // this should be a valid tracking ID
    }),
  ],
});

export default analytics;
