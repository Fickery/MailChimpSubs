export default {
  data: {
    subscription: [
      {
        id: "plan1",
        header: {
          title: "Premium",
          description:
            "Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.",
        },
        pricing: {
          freeTrial: null,
          title: "Starts at",
          price: "307.48",
          basedOn: "/month based on 10,000 contacts*",
        },
        features: [
          { support: "Phone & Priority Support", availability: true },
          { template: "Custom-Coded and Pre-built Email Templates", availability: true },
          { testing: "Multivariate and A/B Testing", availability: true },
          { journey: "Enhanced Automated Customer Journeys", availability: true },
          { onboarding: "Dedicated Personalized Onboarding", availability: true },
          { segment: "Predictive Segmentation", availability: true },
          { manager: "Campaign Manager", availability: true },
        ],
      },

      {
        id: "plan2",
        header: {
          title: "Standard",
          description:
            "Sell even more with personalization, optimization tools, and enhanced automations.",
        },
        pricing: {
          freeTrial: "Free for 1 month",
          title: "Then, starts at",
          price: "18.30 /month*",
          basedOn: null,
        },
        features: [
          { support: "24/7 Email & Chat Support", availability: true },
          { template: "Custom-Coded and Pre-built Email Templates", availability: true },
          { testing: "Multivariate and A/B Testing", availability: true },
          { journey: "Enhanced Automated Customer Journeys", availability: true },
          { onboarding: "Personalized Onboarding", availability: true },
          { segment: "Predictive Segmentation", availability: true },
          { manager: "Campaign Manager", availability: true },
        ],
      },

      {
        id: "plan3",
        header: {
          title: "Essentials",
          description:
            "Send the right content at the right time with testing and scheduling features.",
        },
        pricing: {
          freeTrial: "Free for 1 month",
          title: "Then, starts at",
          price: "10.98 /month*",
          basedOn: null,
        },
        features: [
          { support: "24/7 Email & Chat Support", availability: true },
          { template: "Pre-built Email Templates", availability: true },
          { testing: "A/B Testing", availability: true },
          { journey: "Basic Automated Customer Journeys", availability: true },
          { onboarding: "Personalized Onboarding", availability: true },
          { segment: "Predictive Segmentation", availability: false },
          { manager: "Campaign Manager", availability: false },
        ],
      },

      {
        id: "plan4",
        header: {
          title: "Free",
          description: "Easily create email campaigns and learn more about your customers.",
        },
        pricing: {
          freeTrial: null,
          title: true,
          price: "0",
          basedOn: "/month based on 500 contacts*",
        },
        features: [
          { support: "Email support for first 30 days", availability: true },
          { template: "Pre-built Email Templates", availability: true },
          { testing: "A/B Testing", availability: false },
          { journey: "Basic Automated Customer Journeys", availability: false },
          { onboarding: "Onboarding", availability: false },
          { segment: "Predictive Segmentation", availability: false },
          { manager: "Campaign Manager", availability: false },
        ],
      },
    ],
  },
};
