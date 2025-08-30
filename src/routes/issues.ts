export interface HomepageIssue {
  title: string;
  agree: number;
  story: string;
  poll: string;
}

export const issues: HomepageIssue[] = [
  {
    title: `Democracy and Voting Rights`,
    agree: 55,
    story: `Most Americans oppose partisan redistricting and are concerned about threats to democracy. Fair maps and accessible voting ensure every vote counts equally.`,
    poll: `https://www.reuters.com/world/us/americans-worry-democracy-danger-amid-gerrymandering-fights-reutersipsos-poll-2025-08-21/`
  },
  {
    title: `Background Checks for Gun Purchases`,
    agree: 72,
    story: `A large majority supports universal background checks—if you must pass a test to drive, you should at least pass a check to buy a gun. This policy could help prevent firearms from reaching dangerous individuals.`,
    poll: `https://publichealth.jhu.edu/2024/whos-driving-gun-policy`
  },
  {
    title: `Lower Prescription Drug Prices`,
    agree: 86,
    story: `Overwhelmingly, Americans support letting Medicare negotiate drug prices and capping them to what other wealthy nations pay. This would make essential medicines far more affordable.`,
    poll: `https://www.arnoldventures.org/newsroom/new-poll-majority-of-americans-support-lower-drug-prices-demand-congress-act`
  },
  {
    title: `Term Limits for Members of Congress`,
    agree: 83,
    story: `Voters across the political spectrum support term limits to reduce careerism, insulate Congress from special interest capture, and make it more accountable to the people.`,
    poll: `https://www.termlimits.com/new-poll-83-of-americans-support-term-limits-for-congress/`
  },
  {
    title: `Campaign Finance Reform`,
    agree: 72,
    story: `Most Americans agree there should be limits on money in politics. Stronger campaign finance rules would help democracy by ensuring representatives answer to voters—not just big donors.`,
    poll: `https://www.pewresearch.org/short-reads/2023/10/23/7-facts-about-americans-views-of-money-in-politics/`
  },
  {
    title: `Infrastructure and Clean Energy Investment`,
    agree: 87,
    story: `There's massive public support for federal incentives to build clean energy infrastructure—modernizing our grid and investing in sustainability boosts jobs, saves money, and strengthens resilience.`,
    poll: `https://www.seia.org/news/new-poll-reveals-overwhelming-support-for-federal-clean-energy-incentives/`
  },
  {
    title: `Immigration Reform and Pathway to Citizenship`,
    agree: 78,
    story: `A strong majority of Americans—including growing numbers of Republicans—support granting a pathway to citizenship for undocumented immigrants who meet certain conditions, helping bring stability and fairness to millions.`,
    poll: `https://www.washingtonpost.com/politics/2025/07/11/immigration-poll-gallup-trump-deportations/`
  },
  {
    title: `Protecting Social Security and Medicare`,
    agree: 85,
    story: `Most Americans oppose cuts to Social Security and Medicare—even if it means raising taxes on the wealthy. Strengthening these programs is essential for retirement security and fairness across generations.`,
    poll: `https://navigatorresearch.org/a-majority-of-americans-oppose-cuts-to-medicaid-medicare-and-social-security/`
  }
];
