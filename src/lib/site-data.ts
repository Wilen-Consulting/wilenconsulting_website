import customPortalsIcon from "@/assets/services/custom-portals.svg";
import integrationsIcon from "@/assets/services/integrations.svg";
import customSolutionsIcon from "@/assets/services/custom-solutions.svg";
import softwareSupportIcon from "@/assets/services/software-support.png";
import processMgmtIcon from "@/assets/services/process-management.png";
import workflowIcon from "@/assets/services/workflow.png";
import financialIcon from "@/assets/services/financial.png";
import humanResourcesIcon from "@/assets/services/human-resources.png";
import dataMgmtIcon from "@/assets/services/data-management.png";

import smallIT from "@/assets/service-pages/small-IT-svces.svg";
import processChart from "@/assets/service-pages/process-chart.svg";
import sol01 from "@/assets/service-pages/solution-01.svg";
import sol02 from "@/assets/service-pages/solution-02.svg";
import sol03 from "@/assets/service-pages/solution-03.svg";
import step1 from "@/assets/service-pages/1.svg";
import step2 from "@/assets/service-pages/2.svg";
import step3 from "@/assets/service-pages/3.svg";
import step4 from "@/assets/service-pages/4.svg";
import stepArrow from "@/assets/service-pages/step-arrow.png";
import badWorkflow from "@/assets/industries/warehouse.svg"; // Drive bad-workflow-chart

import medicalBillingImg from "@/assets/industries/medical-billing.svg";
import retailImg from "@/assets/industries/retail.svg";
import warehouseImg from "@/assets/industries/warehouse.svg";

import csForTech from "@/assets/case-studies/image-1.png";
import csForTechLogo from "@/assets/case-studies/for-tech-logo.png";
import csDentalLogo from "@/assets/case-studies/Dental-Wholesalers-Logo--scaled-e1607945927402-300x97.jpg";
import csProperty from "@/assets/case-studies/prop-managmeent-pic.jpg";
import csPropertyLogo from "@/assets/case-studies/propert-manage-logo.png";
import csHVAC from "@/assets/case-studies/HVAC-pic.jpg";
import csHVACLogo from "@/assets/case-studies/hvac-logo-300x300.jpg";
import csCelebrate from "@/assets/case-studies/Celebrate-case-studies.svg";
import csBulb from "@/assets/case-studies/white-light-bulb.svg";
import abaImg from "@/assets/industries/aba.svg";

import reachGoals from "@/assets/reach-goals.svg";
import mondayImg from "@/assets/monday.svg";

import devorahImg from "@/assets/testimonials/devorah.jpg";
import saraImg from "@/assets/testimonials/sara.png";
import lrImg from "@/assets/testimonials/lr-cohen.png";
import estherImg from "@/assets/testimonials/esther.png";
import borensonImg from "@/assets/testimonials/borenson-alt.jpg";
import ahuvaImg from "@/assets/testimonials/ahuva-alt.jpg";
import dentalImg from "@/assets/testimonials/dental-wholesalers.jpg";
import forscheimerImg from "@/assets/testimonials/forscheimer-alt.jpg";
import teethImg from "@/assets/case-studies/teeth.jpg";

export type ServiceContent = {
  problem?: { title?: string; paragraphs: string[]; image?: string };
  solution?: { title?: string; paragraphs: string[]; image?: string };
  results?: {
    title?: string;
    kind: "chart" | "steps" | "table";
    chartImage?: string;
    steps?: { icon: string; title: string; body: string }[];
    tables?: { rows: string[][] }[];
    caption?: string;
  };
};

export type Service = {
  slug: string;
  title: string;
  body: string;
  icon: string;
  heroImage?: string;
  content: ServiceContent;
};

export const services: Service[] = [
  {
    slug: "custom-portals",
    title: "Custom Portals",
    body: "A web-based system built around exactly how your business runs, not the other way around.",
    icon: customPortalsIcon,
    heroImage: customPortalsIcon,
    content: {
      problem: {
        title: "The Problem",
        paragraphs: [
          "Off-the-shelf tools force your team to bend around them. Custom logins, dashboards, forms, and approvals become a mess of workarounds.",
          "You end up training every new hire on the workarounds, not the actual business.",
        ],
      },
      solution: {
        title: "The Solution",
        paragraphs: [
          "We design and build a custom portal that mirrors how your team actually works: the roles, the data, the approvals, the reports.",
          "One login, one system, everything you need in a single place your team already understands.",
        ],
        image: reachGoals,
      },
    },
  },
  {
    slug: "integrations",
    title: "Integrations",
    body: "Connect the systems you already use so data moves automatically instead of getting re-typed by hand.",
    icon: integrationsIcon,
    heroImage: integrationsIcon,
    content: {
      problem: {
        title: "The Problem",
        paragraphs: [
          "You have great tools. They just don't talk to each other. Data gets re-typed, exports get lost, and reports never quite match.",
        ],
      },
      solution: {
        title: "The Solution",
        paragraphs: [
          "We connect the systems you already own so information flows automatically between them.",
          "No more copy-paste, no more mismatched numbers, no more manual reconciliation.",
        ],
        image: sol02,
      },
    },
  },
  {
    slug: "custom-solutions",
    title: "Custom Solutions",
    body: "When nothing off-the-shelf fits, we build it: bespoke tools designed around your exact workflow.",
    icon: customSolutionsIcon,
    heroImage: customSolutionsIcon,
    content: {
      problem: {
        title: "The Problem",
        paragraphs: [
          "Sometimes there just isn't a product on the market that fits how your business runs. Every option is either too much, too little, or aimed at a different industry.",
        ],
      },
      solution: {
        title: "The Solution",
        paragraphs: [
          "We build the tool you actually need. Scoped to your workflow, sized to your team, and designed to grow with you.",
        ],
        image: sol01,
      },
    },
  },
  {
    slug: "software-support",
    title: "Software Support",
    body: "Get to know your software, your business's best friend, and make the most of what you already own.",
    icon: softwareSupportIcon,
    heroImage: smallIT,
    content: {
      problem: {
        title: "The Problem",
        paragraphs: [
          "Technology overwhelms you? Get to know your software, your business's best friend.",
          "The software packages you use, whether desktop or online applications, do all your background work.",
          "Are you making the most of it? Probably not!",
        ],
      },
      solution: {
        title: "The Solution",
        paragraphs: [
          "Let's show you how. As software experts, we know software inside out.",
          "Allow us to improve your software systems, saving you time and money, even if you are already using custom software.",
        ],
        image: sol03,
      },
    },
  },
  {
    slug: "process-management",
    title: "Process Management",
    body: "Automate and streamline your business processes so that work becomes more pleasurable and profitable.",
    icon: processMgmtIcon,
    heroImage: processMgmtIcon,
    content: {
      problem: {
        title: "The Problem",
        paragraphs: [
          "Do you view work processes as a necessary evil?",
          "Manual processes are, indeed, a huge drain of time, energy, and money.",
          "Want to work smarter and happier?",
        ],
      },
      solution: {
        title: "The Solution",
        paragraphs: [
          "We'll show you how to automate and streamline your business processes so that work will become more pleasurable and profitable.",
        ],
      },
      results: {
        title: "The Results",
        kind: "chart",
        chartImage: processChart,
      },
    },
  },
  {
    slug: "workflow-improvements",
    title: "Workflow Improvements",
    body: "Examine, suggest, and implement the software needed to manage your workflows from end to end.",
    icon: workflowIcon,
    heroImage: workflowIcon,
    content: {
      problem: {
        title: "The Process",
        paragraphs: [
          "Creating a workflow eliminates room for error, ensuring maximum productivity in all systems and processes. By making tasks automatic, you'll save a tremendous amount of time.",
          "Let's get the work flowing, and the cash streaming in.",
        ],
      },
      solution: {
        title: "How We Do It",
        paragraphs: [
          "Examination: first, we check out your systems and look for repetition in the way you do things.",
          "Suggestions: then, we help you determine which tasks can be put into workflows.",
          "Solutions: finally, we implement the most suitable software to help you manage your workflows and optimize existing software to oversee new processes.",
        ],
      },
      results: {
        title: "The Results",
        kind: "steps",
        caption: "You go from a tangled mess to a clean, automated flow:",
        chartImage: badWorkflow,
        steps: [
          {
            icon: step1,
            title: "Customer chooses package and platform completes intake",
            body: "System prompts customer for all information. This stage covers all the steps formerly taken by multiple people in multiple actions.",
          },
          {
            icon: step2,
            title: "Backstage system activates and validates info",
            body: "Checks if the customer is in the system, validates the customer information, and confirms resources are available.",
          },
          {
            icon: step3,
            title: "Customer sales rep approves order",
            body: "One-step approval of all info that had been gathered automatically.",
          },
          {
            icon: step4,
            title: "Backstage system completes order",
            body: "Automatically notifies the customer and pushes the order to fulfillment.",
          },
        ],
      },
    },
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    body: "Cut through the clutter of reporting, billing, and bookkeeping, so you can spend time making more money.",
    icon: financialIcon,
    heroImage: financialIcon,
    content: {
      problem: {
        title: "Spending too much time counting your money?",
        paragraphs: [
          "Whether it's reporting, payment / billing issues, bookkeeping, or sales processes, Wilen Consulting will find the key to cut through the clutter of your financial calculations.",
          "So you can spend your time making more money.",
        ],
      },
    },
  },
  {
    slug: "human-resources",
    title: "Human Resources",
    body: "Remove administrative overload: task management, customer communications, and employee tools.",
    icon: humanResourcesIcon,
    heroImage: humanResourcesIcon,
    content: {
      problem: {
        title: "The Problem",
        paragraphs: [
          "You can't do it all. If you're juggling the myriad aspects of running a business, chances are you're stunting its growth.",
        ],
      },
      solution: {
        title: "The Solution",
        paragraphs: [
          "Let us remove some of the administrative work, and give you some efficiency tips while we're at it.",
        ],
      },
      results: {
        title: "The Results",
        kind: "table",
        tables: [
          {
            rows: [
              ["Task and Project Management"],
              ["Customer Communications", "Customer Relationship Management (CRM)", "Performance Management"],
            ],
          },
          {
            rows: [
              ["Employee Management"],
              ["Employee Training", "Employee Supervision"],
            ],
          },
        ],
      },
    },
  },
  {
    slug: "data-management",
    title: "Data Management",
    body: "Expedite imports, build custom reports, and transform raw data into something you can actually use.",
    icon: dataMgmtIcon,
    heroImage: dataMgmtIcon,
    content: {
      problem: {
        title: "The Problem",
        paragraphs: [
          "Do you need your import processes expedited? Custom reports created? Raw data transformed? Systems revamped?",
        ],
        image: reachGoals,
      },
      solution: {
        title: "The Solution",
        paragraphs: [
          "Hand it over to the pros and relieve yourself of a headache. We deal with format compatibility and offer many other services to manage your data efficiently.",
          "Do it right the first time and save money long-term.",
        ],
      },
    },
  },
];

export type IndustryDetail = {
  slug: string;
  title: string;
  tagline: string;
  body: string;
  image: string;
  keyChallenges: string[];
  ourApproach: string[];
  features: { title: string; body: string }[];
  outcomes?: string[];
};

export const industries: IndustryDetail[] = [
  {
    slug: "medical-billing",
    title: "Medical Billing",
    tagline: "HIPAA-compliant medical billing, automated end to end.",
    body: "Claims tracking, payment reconciliation, and paperwork, so your practice can focus on patients instead of chasing payers.",
    image: medicalBillingImg,
    keyChallenges: [
      "Denied claims sit in a spreadsheet no one owns",
      "Payments arrive without a clear match to the claim",
      "Compliance and audit paperwork consumes admin hours",
      "Reporting for owners and payers lives in five places",
    ],
    ourApproach: [
      "Map every claim's lifecycle from submission to reconciliation",
      "Automate payer submissions, denials, and follow-ups",
      "Build HIPAA-compliant document workflows around your existing tools",
      "Give leadership a single dashboard for revenue, aging, and denial reasons",
    ],
    features: [
      { title: "Claims tracking", body: "Every claim moves through a defined status with owner, aging, and next action visible at a glance." },
      { title: "Payment reconciliation", body: "Match ERAs and payments to the right claim automatically, flag exceptions for review." },
      { title: "HIPAA-safe documents", body: "Intake, consents, and PHI stored and shared with role-based access." },
      { title: "Owner reporting", body: "Real-time revenue, denial-rate, and AR-aging reports without a manual export." },
    ],
    outcomes: [
      "Fewer claims lost in follow-up",
      "Faster time to payment",
      "One source of truth for revenue and AR",
    ],
  },
  {
    slug: "retail-ecommerce",
    title: "Retail / E-Commerce",
    tagline: "Storefront, back office, and warehouse, finally in sync.",
    body: "Accounting integrations, inventory reconciliation, and order processing built for how you actually sell online and in store.",
    image: retailImg,
    keyChallenges: [
      "Storefront orders and accounting drift out of sync",
      "Inventory counts are wrong by the end of the week",
      "Refunds and adjustments require manual double-entry",
      "New channels (marketplaces, POS) create yet another data silo",
    ],
    ourApproach: [
      "Integrate storefront, POS, accounting, and shipping into one flow",
      "Automate import of orders, refunds, and fees into the books",
      "Reconcile inventory across channels on a schedule you can trust",
      "Add reporting your merchandiser and CFO both actually use",
    ],
    features: [
      { title: "Order to cash", body: "Every online and in-store order lands in the books automatically." },
      { title: "Inventory sync", body: "Stock updates from every channel keep counts accurate without spreadsheets." },
      { title: "Refund automation", body: "Refunds, partial returns, and fees flow through to accounting without re-entry." },
      { title: "Channel reporting", body: "See margin, sell-through, and stock health by SKU and channel in one view." },
    ],
    outcomes: [
      "Books match the storefront every day",
      "Fewer stockouts and less overstock",
      "Faster month-end close",
    ],
  },
  {
    slug: "warehouse-management",
    title: "Warehouse Management",
    tagline: "Software built for warehouse and logistics operations.",
    body: "Keep stock, receiving, picks, and fulfillment in lock-step with a warehouse system designed around your floor, not a template.",
    image: warehouseImg,
    keyChallenges: [
      "Receiving, put-away, and picks live in different systems",
      "Cycle counts never quite match the ERP",
      "Fulfillment errors get caught by the customer, not by ops",
      "Growing SKU counts overwhelm your existing tools",
    ],
    ourApproach: [
      "Map the physical floor and the software touchpoints alongside your team",
      "Design mobile-friendly workflows for receiving, put-away, picks, and packs",
      "Reconcile counts continuously between the WMS and the ERP",
      "Add exception alerts so ops catches problems before customers do",
    ],
    features: [
      { title: "Guided receiving", body: "Scan-based receiving that puts stock in the right bin the first time." },
      { title: "Wave picking", body: "Batch and prioritize picks by carrier cutoff, priority, and dock." },
      { title: "Cycle count automation", body: "Rolling counts that keep the ERP and floor in agreement." },
      { title: "Ops dashboards", body: "Backlog, on-time ship, and error rates visible in real time." },
    ],
    outcomes: [
      "Higher pick and pack accuracy",
      "Less overtime chasing count problems",
      "Cleaner handoff to shipping and accounting",
    ],
  },
  {
    slug: "aba",
    title: "ABA",
    tagline: "Software built for ABA therapy practices.",
    body: "From intake and scheduling to session documentation and payer billing, tools built for how ABA practices actually operate.",
    image: abaImg,
    keyChallenges: [
      "Scheduling changes ripple through payroll and billing",
      "Session notes, auth units, and billing rarely line up",
      "Parent and payer communication lives across email and paper",
      "Compliance requirements evolve faster than the software",
    ],
    ourApproach: [
      "Design the schedule, auth, and note workflow around clinicians and BCBAs",
      "Automate unit tracking against payer authorizations",
      "Centralize parent communication with a private, HIPAA-safe portal",
      "Build billing exports tailored to each payer's requirements",
    ],
    features: [
      { title: "Auth and unit tracking", body: "Live view of remaining units against every authorization, per client." },
      { title: "Session notes", body: "Structured, exportable session notes that stay in step with billing." },
      { title: "Scheduling", body: "Reschedules that update payroll, billing, and parent notifications in one action." },
      { title: "Parent portal", body: "A private, compliant space for updates, consents, and scheduling requests." },
    ],
    outcomes: [
      "Fewer billing errors and denied units",
      "Cleaner audit and compliance paperwork",
      "More clinician time with clients, less on admin",
    ],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  body: string;
  intro: string;
  image?: string;
  logo?: string;
  celebrateImage?: string;
  bulbImage?: string;
  before: {
    heading: string;
    paragraphs: string[];
    metricLabel?: string;
    metricValue?: string;
  };
  solution: {
    heading: string;
    paragraphs: string[];
  };
  benefits: {
    heading: string;
    items: string[];
    paragraphs?: string[];
  };
  after: {
    heading: string;
    paragraphs: string[];
    metricLabel?: string;
    metricValue?: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "for-tech-electric",
    title: "For-Tech Electric",
    industry: "Field Services",
    summary: "A Lakewood-based company that provides standby electric power solutions for local residents.",
    body: "A Lakewood-based company that provides standby electric power solutions for local residents.",
    intro: "For-Tech Electric is a Lakewood-based company that provides standby electric power solutions for local residents.",
    image: csForTech,
    logo: csForTechLogo,
    celebrateImage: csCelebrate,
    bulbImage: csBulb,
    before: {
      heading: "Before",
      paragraphs: [
        "Even though For-Tech Electric had an influx of leads and an excellent conversion rate, they were losing potential clients.",
        "Why? They had an overwhelming office workload. Too much time was spent on client communication, lead follow up and project tracking.",
      ],
      metricLabel: "Average monthly sales",
      metricValue: "15",
    },
    solution: {
      heading: "Our Solution",
      paragraphs: [
        "Within Salesforce, their CRM, we created a custom-design automation to streamline the appointment scheduling and communication.",
      ],
    },
    benefits: {
      heading: "What that does for the client",
      items: [
        "More efficient lead conversion",
        "Higher customer satisfaction",
        "Improved staff productivity",
      ],
      paragraphs: [
        "Leads schedule their own estimates, receive reminders, and are followed up automatically.",
        "Clients are consistently communicated with on the status of their project.",
        "Automated checks installed to identify clients who have fallen through the cracks ensuring timely project progress.",
      ],
    },
    after: {
      heading: "After",
      paragraphs: [
        "Shortly after implementation, a hurricane quadrupled their number of leads, and they successfully handled this increased demand due to the automation system in place.",
      ],
      metricLabel: "Average monthly sales",
      metricValue: "100",
    },
  },
  {
    slug: "property-management",
    title: "Property Management",
    industry: "Real Estate",
    summary: "A Maryland property management company.",
    body: "A Maryland property management company.",
    intro: "A Maryland property management company.",
    image: csProperty,
    logo: csPropertyLogo,
    celebrateImage: csCelebrate,
    bulbImage: csBulb,
    before: {
      heading: "Before",
      paragraphs: [
        "In order to convert scanned records that needed to be converted into editable form, they spent an inordinate amount of time manually entering the data into a live system.",
      ],
      metricLabel: "Data entry time",
      metricValue: "1.5 hours",
    },
    solution: {
      heading: "Our Solution",
      paragraphs: [
        "Using our technical background, we manipulated different systems to convert the original data into a spreadsheet that could be used to import information as needed.",
      ],
    },
    benefits: {
      heading: "What that does for the client",
      items: [
        "System-wide digitalization of records",
        "Smooth, easy conversion process",
        "Searchable, editable data",
      ],
      paragraphs: [
        "With this new system in place, the company digitalized the information. It was a smooth, easy process.",
      ],
    },
    after: {
      heading: "After",
      paragraphs: [
        "They could now search and manipulate all the data as necessary without putting extensive resources into the conversion.",
      ],
      metricLabel: "Data entry time",
      metricValue: "4 min",
    },
  },
  {
    slug: "dental-wholesalers",
    title: "Dental Wholesalers",
    industry: "Retail / E-Commerce",
    summary: "Dental Wholesalers sell a few products with many variations, resulting in more than 600 types of each product.",
    body: "Dental Wholesalers sell a few products with many variations, resulting in more than 600 types of each product.",
    intro: "Dental Wholesalers sell a few products with many variations, resulting in more than 600 types of each product.",
    image: teethImg,
    logo: csDentalLogo,
    celebrateImage: csCelebrate,
    bulbImage: csBulb,
    before: {
      heading: "Before",
      paragraphs: [
        "Entering all specifications manually into their inventory system was extremely time-consuming.",
        "Why? It required entering all specifications of each product from each order into the inventory system. This task had to be repeated for each order that came in, 100s of times each month!",
      ],
      metricLabel: "Average order entry time",
      metricValue: "30 minutes",
    },
    solution: {
      heading: "Our Solution",
      paragraphs: [
        "This company needed an inventory tracking system that allowed for a two-dimensional form.",
        "Because this software does not exist (yet), we created a low-cost custom inventory tracking system.",
      ],
    },
    benefits: {
      heading: "What that does for the client",
      items: [
        "System can be accessed from anywhere",
        "System pulls up a customized pre-populated order form",
        "Form can be used both for fulfillment as well as inventory tracking",
      ],
    },
    after: {
      heading: "After",
      paragraphs: [
        "Besides for making the inventory entry easy, they now enjoy added features allowing them to:",
        "• Submit multiple orders at a time.",
        "• Get alerted in real time if any items in the order form are on back-order.",
        "• Track inventory of each product.",
        "• Optionally integrate with their existing inventory system.",
      ],
      metricLabel: "Average order entry time",
      metricValue: "3 minutes",
    },
  },
  {
    slug: "environmental-controls",
    title: "Environmental Controls",
    industry: "Industrial / HVAC",
    summary: "HVAC team (heating, ventilation, air conditioning) at an environmental controls company in Maryland.",
    body: "HVAC team (heating, ventilation, air conditioning) at an environmental controls company in Maryland.",
    intro: "HVAC team (heating, ventilation, air conditioning) at an environmental controls company in Maryland.",
    image: csHVAC,
    logo: csHVACLogo,
    celebrateImage: csCelebrate,
    bulbImage: csBulb,
    before: {
      heading: "Before",
      paragraphs: [
        "Many tickets were neglected or mishandled, a disaster for customer service.",
        "Why? There was a complex approval process that each ticket had to go through.",
      ],
      metricLabel: "Mishandling rate",
      metricValue: "18%",
    },
    solution: {
      heading: "Our Solution",
      paragraphs: [
        "After reviewing all the company requirements, we created a management system using SharePoint and workflow software.",
      ],
    },
    benefits: {
      heading: "What that does for the client",
      items: [
        "Records the status of each ticket",
        "Updates the responsible parties at each status point",
      ],
    },
    after: {
      heading: "After",
      paragraphs: [
        "The professional, smooth, automated workflow ensured that:",
        "• All tickets were followed.",
        "• Change orders were taken care of in a timely, efficient manner.",
        "• Customers were satisfied by the prompt, efficient service.",
      ],
      metricLabel: "Mishandling rate",
      metricValue: "1%",
    },
  },
];

export type Testimonial = { quote: string; body: string; name: string; role: string; image?: string };

export const testimonials: Testimonial[] = [
  {
    quote: "They have saved us thousands of dollars",
    body: "We have been very pleased with the services provided by Wilen Consulting and continue to use their services. They have simplified our bookkeeping procedures, corrected our books, and saved us thousands of dollars in accounting costs.",
    name: "Dr. Henry Borenson, President",
    role: "Borenson and Associates",
    image: borensonImg,
  },
  {
    quote: "An amazing resource!",
    body: "I came to Wilen Consulting as an expert in the software I use, and wondering if there was a way I could work more efficiently. Aviva is an amazing resource for my business! She understands software and knows exactly what to tell me even if she never saw the software before! Her ideas just keep coming, and she encourages me to make changes that will save me more time. I highly recommend Wilen Consulting if you want to spend more time doing what you enjoy.",
    name: "Ahuva Indik",
    role: "CPA",
    image: ahuvaImg,
  },
  {
    quote: "Aviva is an expert at everything",
    body: "Our e-commerce import processes had issues that we spent an enormous amount of time trying to fix. In just a few hours, Aviva streamlined them in a way that saved tons of time! Not only that, but she provided us with a setup that taught us how to do it on our own in the future! She patiently explained what to do in a very clear way. Wilen Consulting is a great resource for us because Aviva is an expert at everything!",
    name: "Esther O.",
    role: "Bike Ahead",
    image: estherImg,
  },
  {
    quote: "Aviva was very versatile and resourceful",
    body: "Aviva was a pleasure to work with. She helped us simplify our website and create a more user-friendly interface. Aviva was very versatile and resourceful. She was always easily accessible and easy to communicate with.",
    name: "LR Cohen",
    role: "LiveRight with LR",
    image: lrImg,
  },
  {
    quote: "Great customer service",
    body: "We had a great experience working with Wilen Consulting. The personalized service helped us achieve the results we needed. Great customer service.",
    name: "Batsheva D.",
    role: "Dental Wholesalers",
    image: dentalImg,
  },
  {
    quote: "Our sales increased significantly!",
    body: "Aviva automated many of our processes and created systems to simplify and organize our business. Since then we've had time to focus on the actual business, our sales have increased in a significant way, and our business is continuously growing. Our customer satisfaction has gone through the roof. Our new systems for reporting give us accurate information in real-time which guides our business decisions. And with significantly reduced pressure, our staff is happier than ever. We will continue to use Wilen Consulting and give our fullest recommendation to any business.",
    name: "Yaakov Forscheimer, CEO",
    role: "For-Tech Electric",
    image: forscheimerImg,
  },
  {
    quote: "Our workflows are so much more efficient!",
    body: "Our candidate processing workflow had issues that required manual corrections. Aviva immediately figured out and explained efficient adjustments that solved our problem! Now, our workflows are so much more efficient! I highly recommend Wilen Consulting if you want to save yourself time and aggravation.",
    name: "Devorah G.",
    role: "Global Teletherapy",
    image: devorahImg,
  },
  {
    quote: "The changes they have implemented have saved us actual time and money!",
    body: "Wilen Consulting has improved the efficiency of my business tremendously! The changes they have implemented have saved us actual time and money! Aviva's attention to detail and professionalism make it a gift to work with her!",
    name: "Sara G.",
    role: "Ginsberg Associates",
    image: saraImg,
  },
  {
    quote: "Wilen Consulting has been a game changer in our Netsuite experience.",
    body: "They have helped us maximize functionality, scope projects and understand processes in an educated way. They have created multiple scripts/workflows that have made our operations more efficient including setting up external integrations from scratch.",
    name: "Yoel Gras",
    role: "Jool Baby",
  },
];

// Shared assets exported for pages that want them
export const shared = { mondayImg, stepArrow, reachGoals };
