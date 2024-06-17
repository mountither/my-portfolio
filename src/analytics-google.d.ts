// types/analytics-google-analytics.d.ts
declare module "@analytics/google-analytics" {
  import { AnalyticsPlugin } from "analytics";

  interface GoogleAnalyticsPluginOptions {
    measurementIds: Array<string>;
  }

  export default function googleAnalytics(
    options: GoogleAnalyticsPluginOptions
  ): AnalyticsPlugin;
}
