export interface TimelineSectionItem {
  title: string;
  story: string;
  research_topics: string[];
  highlight?: boolean;
}

export interface TimelineSection {
  dates: string;
  title: string;
  intro: string;
  outro: string;
  items: TimelineSectionItem[];
}

export const timeline: TimelineSection[] = [
  {
    dates: `1930s–1940s`,
    title: `The New Deal & Elite Backlash`,
    intro: `The Great Depression spurred sweeping New Deal reforms that stabilized finance, empowered labor, and created the social safety net. While millions benefited, elites resisted through plots, propaganda, and alignment with authoritarian movements.`,
    items: [
      {
        title: `The New Deal`,
        story: `FDR expanded federal power to regulate finance, secure labor rights, and build the social safety net—lifting millions out of poverty and redefining the role of government.`,
        research_topics: [
          `Franklin D. Roosevelt New Deal`,
          `Social Security Act 1935`,
          `Wagner Act labor rights`
        ]
      },
      {
        title: `Golden Age of Capitalism`,
        story: `High taxes on the wealthy, corporate regulation, and union power fueled broad prosperity, proving the value of shared growth under public oversight.`,
        research_topics: [
          `Golden Age of Capitalism`,
          `postwar economic boom`,
          `US labor unions 1940s`
        ]
      },
      {
        title: `The Business Plot (1933)`,
        story: `Corporate leaders conspired to overthrow FDR and install an authoritarian. The plan failed, but it revealed elite willingness to subvert democracy.`,
        research_topics: [
          `Business Plot 1933`,
          `Smedley Butler`,
          `coup against FDR`
        ]
      },
      {
        title: `James Fifield Jr. & Spiritual Mobilization`,
        story: `Backed by corporate money, Reverend Fifield promoted a theology linking capitalism with Christianity, portraying regulation as ungodly.`,
        research_topics: [
          `James Fifield Jr.`,
          `Spiritual Mobilization`,
          `Christian free market ideology`
        ],
        highlight: true
      },
      {
        title: `German American Bund & Nazi Sympathizers`,
        story: `The Bund openly celebrated Hitler and sought to spread fascism in the U.S., showing ideological overlap between American elites and authoritarianism abroad.`,
        research_topics: [
          `German American Bund`,
          `Nazi rallies in America`,
          `American fascism 1930s`
        ]
      },
      {
        title: `Corporate Ties to Nazi Germany`,
        story: `Firms like Ford, IBM, and Standard Oil continued business with Nazi Germany, prioritizing profits despite global instability.`,
        research_topics: [
          `Ford Nazi Germany`,
          `IBM and the Holocaust`,
          `Standard Oil WWII`
        ]
      },
      {
        title: `Republican 1946 Midterm Sweep`,
        story: `Republican victories ended Democratic dominance in Congress, empowering business-friendly lawmakers to roll back New Deal gains.`,
        research_topics: [
          `1946 US midterm elections`,
          `postwar Republican Congress`,
          `rollback of New Deal`
        ]
      },
      {
        title: `Taft-Hartley Act (1947)`,
        story: `The law restricted strikes and union tactics, tilting power toward employers and weakening organized labor for generations.`,
        research_topics: [
          `Taft-Hartley Act 1947`,
          `US labor law restrictions`,
          `union power postwar America`
        ]
      }
    ],
    outro: `The New Deal proved government could deliver broad prosperity, but elite backlash planted seeds of resistance that would grow into organized conservatism.`
  },
  {
    dates: `1950s–1960s`,
    title: `Movement Conservatism’s Roots`,
    intro: `Postwar America saw both prosperity and reform—civil rights expanded, higher education grew, and the middle class thrived. Yet conservatives regrouped, opposing labor, resisting equality, and forging a coalition of business, religious, and political interests.`,
    items: [
      {
        title: `William F. Buckley Jr. & National Review`,
        story: `Buckley’s magazine gave conservatism intellectual legitimacy, uniting business elites, traditionalists, and segregationists into a national movement.`,
        research_topics: [
          `William F. Buckley Jr.`,
          `National Review magazine`,
          `modern conservatism origins`
        ]
      },
      {
        title: `Barry Goldwater’s 1964 Campaign`,
        story: `Goldwater’s defeat mainstreamed far-right ideology, energizing activists and shaping the future conservative agenda.`,
        research_topics: [
          `Barry Goldwater 1964`,
          `conservative movement 1960s`,
          `far right politics US`
        ]
      },
      {
        title: `Ronald Reagan’s California Politics`,
        story: `As governor, Reagan cut higher education funding and cracked down on student movements, spurring tuition hikes that spread nationwide.`,
        research_topics: [
          `Ronald Reagan governor California`,
          `University of California tuition 1960s`,
          `Free Speech Movement Berkeley`
        ]
      },
      {
        title: `Civil Rights Backlash`,
        story: `Opponents of civil rights reframed their resistance as “states’ rights,” embedding racial appeals into conservative politics.`,
        research_topics: [
          `Civil Rights Movement opposition`,
          `states’ rights segregation`,
          `Southern Strategy`
        ]
      },
      {
        title: `Seeds of Movement Conservatism`,
        story: `By the 1960s, business leaders, segregationists, and religious traditionalists had coalesced into what became the modern conservative movement.`,
        research_topics: [
          `Movement Conservatism`,
          `conservative coalition 1960s`,
          `religion and politics US`
        ],
        highlight: true
      }
    ],
    outro: `The prosperity of the era was real, but so was the backlash—conservatives built an enduring coalition that linked business interests to resistance against civil rights and social reform.`
  },
  {
    dates: `1970s–1980s`,
    title: `Neoliberal Revolution`,
    intro: `As economic turbulence hit—stagflation, oil shocks, and global competition—elites seized the moment to dismantle New Deal protections. Through new think tanks, policy shifts, and cultural appeals, they rewrote economic rules in favor of wealth and corporate power.`,
    items: [
      {
        title: `The Powell Memo (1971)`,
        story: `Lewis Powell urged businesses to organize politically, fund think tanks, and shape public opinion—laying the groundwork for corporate dominance.`,
        research_topics: [
          `Powell Memo 1971`,
          `Lewis Powell corporate influence`,
          `US Chamber of Commerce history`
        ],
        highlight: true
      },
      {
        title: `End of Bretton Woods`,
        story: `Nixon ended the gold standard, triggering financial speculation and fueling Wall Street’s global rise.`,
        research_topics: [
          `Bretton Woods system`,
          `Nixon gold standard 1971`,
          `US dollar reserve currency`
        ]
      },
      {
        title: `Productivity vs. Wage Divergence`,
        story: `From the 1970s onward, productivity rose while wages stagnated, breaking the historic link between growth and worker prosperity.`,
        research_topics: [
          `wages vs productivity US`,
          `income stagnation 1970s`,
          `economic inequality trends`
        ]
      },
      {
        title: `Heritage Foundation & Conservative Think Tanks`,
        story: `Corporate-funded groups promoted deregulation, tax cuts, and welfare rollbacks, reshaping U.S. politics.`,
        research_topics: [
          `Heritage Foundation history`,
          `conservative think tanks US`,
          `policy lobbying 1980s`
        ]
      },
      {
        title: `The Reagan Revolution`,
        story: `Reagan slashed taxes and deregulated industries, weakening unions and widening inequality, while coded racial appeals consolidated support.`,
        research_topics: [
          `Ronald Reagan presidency`,
          `Reaganomics`,
          `PATCO strike 1981`
        ]
      },
      {
        title: `Rise of Neo-Nazi Groups`,
        story: `Organizations like the National Alliance grew, connecting economic discontent to resurgent white supremacy.`,
        research_topics: [
          `Neo-Nazi groups US 1980s`,
          `National Alliance`,
          `white supremacist movements`
        ]
      },
      {
        title: `Civil Rights Retrenchment`,
        story: `“Tough on crime” laws and the War on Drugs disproportionately targeted Black and brown communities, fueling mass incarceration.`,
        research_topics: [
          `War on Drugs US`,
          `mass incarceration`,
          `tough on crime policies`
        ]
      },
      {
        title: `Tax Cuts & Rising Debt`,
        story: `Reagan’s tax cuts enriched the wealthy while military spending tripled the federal debt, limiting investment in social programs.`,
        research_topics: [
          `Reagan tax cuts`,
          `US federal debt 1980s`,
          `military spending Cold War`
        ]
      }
    ],
    outro: `The neoliberal turn dismantled protections that had supported shared prosperity, replacing them with policies that privileged wealth, corporate influence, and cultural division.`
  },
  {
    dates: `1990s–2000s`,
    title: `Globalization & Culture Wars`,
    intro: `Globalization and technological change created new opportunities but also deepened inequality. Political polarization sharpened, while deregulation and culture wars reshaped U.S. politics and institutions.`,
    items: [
      {
        title: `Newt Gingrich’s “Contract with America”`,
        story: `Gingrich drove partisan confrontation, purging moderates and embedding hyper-partisanship as the new norm in Congress.`,
        research_topics: [
          `Newt Gingrich Contract with America`,
          `1994 Republican Revolution`,
          `partisan politics 1990s`
        ]
      },
      {
        title: `Fox News & Conservative Media`,
        story: `Launched in 1996, Fox News amplified conservative messaging, deepening polarization and reshaping public debate.`,
        research_topics: [
          `Fox News history`,
          `Rupert Murdoch US media`,
          `conservative media ecosystem`
        ]
      },
      {
        title: `NAFTA & Globalization`,
        story: `NAFTA accelerated outsourcing and deindustrialization, eroding middle-class jobs and fueling economic insecurity.`,
        research_topics: [
          `NAFTA 1994`,
          `US job outsourcing`,
          `globalization and inequality`
        ]
      },
      {
        title: `Florida 2000 Election`,
        story: `Voter purges and a Supreme Court ruling halting recounts gave George W. Bush the presidency, undermining trust in elections.`,
        research_topics: [
          `Florida 2000 election`,
          `Bush v. Gore Supreme Court`,
          `voter purges Florida`
        ],
        highlight: true
      },
      {
        title: `Bush Era & the Iraq War`,
        story: `The Iraq War expanded executive power and enriched defense contractors, leaving instability abroad and debt at home.`,
        research_topics: [
          `Iraq War 2003`,
          `Halliburton contracts`,
          `Bush administration foreign policy`
        ]
      },
      {
        title: `Repeal of Glass–Steagall & 2008 Crash`,
        story: `Financial deregulation encouraged speculation, inflating housing bubbles that collapsed in the 2008 crisis.`,
        research_topics: [
          `Glass-Steagall repeal 1999`,
          `2008 financial crisis causes`,
          `housing bubble US`
        ]
      },
      {
        title: `Rise of Private Equity`,
        story: `Private equity firms consolidated industries, cutting jobs and concentrating ownership while extracting wealth.`,
        research_topics: [
          `private equity firms US`,
          `leveraged buyouts`,
          `industry consolidation`
        ]
      },
      {
        title: `Growing Inequality`,
        story: `While corporate profits soared, wages stagnated and the racial wealth gap widened, concentrating gains among elites.`,
        research_topics: [
          `income inequality US`,
          `racial wealth gap`,
          `wage stagnation 2000s`
        ]
      }
    ],
    outro: `The era of globalization brought growth but also fragility—deregulation, culture wars, and inequality set the stage for the populist and authoritarian turn of the next decade.`
  },
  {
    dates: `2010s–2020s`,
    title: `Authoritarian Capture & Postcapitalism`,
    intro: `As democratic safeguards weakened, corporate power fused with new technologies and rising nationalism. Inequality grew, politics polarized, and authoritarian currents reshaped American life.`,
    items: [
      {
        title: `Citizens United (2010)`,
        story: `The Supreme Court allowed unlimited corporate spending in politics, giving wealthy donors outsized influence in elections.`,
        research_topics: [
          `Citizens United case`,
          `corporate money in politics`,
          `campaign finance US`
        ],
        highlight: true
      },
      {
        title: `Operation REDMAP (2010)`,
        story: `Republicans redrew districts using advanced data models, entrenching power by diluting urban and minority votes.`,
        research_topics: [
          `Operation REDMAP`,
          `gerrymandering 2010`,
          `partisan redistricting US`
        ]
      },
      {
        title: `Voting Rights Act Gutted (2013)`,
        story: `The <em>Shelby</em> ruling ended federal oversight of state election laws, enabling a wave of new voter restrictions.`,
        research_topics: [
          `Shelby County v. Holder`,
          `Voting Rights Act 1965`,
          `voter suppression laws US`
        ]
      },
      {
        title: `The Weaponization of Big Data`,
        story: `Social media platforms and firms like Cambridge Analytica mined personal data to micro-target voters—boosting corporate profits while fueling polarization and eroding trust in democracy.`,
        research_topics: [
          `Cambridge Analytica scandal`,
          `Facebook election influence`,
          `big data politics`
        ]
      },
      {
        title: `The Trump Era`,
        story: `Trump’s 2016 victory drew on racial and gender resentment; after losing in 2020, he attempted to overturn the election through disinformation and violence.`,
        research_topics: [
          `Donald Trump 2016 election`,
          `Trump 2020 election challenge`,
          `January 6 Capitol attack`
        ]
      },
      {
        title: `Police Violence & Protest`,
        story: `The murder of George Floyd sparked nationwide protests, exposing how state violence reinforces racial inequality.`,
        research_topics: [
          `George Floyd protests`,
          `Black Lives Matter movement`,
          `police violence US`
        ]
      },
      {
        title: `State-Backed Corporate Deals`,
        story: `The administration pressured companies into U.S. equity stakes, merging nationalism with corporate interests.`,
        research_topics: [
          `Trump Intel stake`,
          `US industrial policy 2020s`,
          `state capitalism US`
        ]
      },
      {
        title: `Christian Nationalism & MAGA`,
        story: `White evangelicalism fused with right-wing politics, reshaping the GOP and fueling culture war extremism.`,
        research_topics: [
          `Christian nationalism US`,
          `MAGA movement`,
          `religion and politics`
        ]
      },
      {
        title: `COVID Relief & Corporate Gains`,
        story: `Pandemic relief enriched corporations and asset markets more than workers, accelerating a shift toward rent-based, platform-driven capitalism.`,
        research_topics: [
          `COVID relief US`,
          `PPP loans misuse`,
          `economic inequality pandemic`
        ]
      },
      {
        title: `Gig Economy Expansion`,
        story: `By the 2020s, gig work covered much of the workforce, shifting risks from employers to workers and eroding traditional protections.`,
        research_topics: [
          `gig economy US`,
          `Uber labor rights`,
          `independent contractors law`
        ]
      },
      {
        title: `Private Equity Consolidation`,
        story: `Private equity firms expanded control across housing, healthcare, and retail, raising costs and reducing accountability.`,
        research_topics: [
          `private equity housing`,
          `healthcare consolidation`,
          `retail buyouts`
        ]
      },
      {
        title: `The Rise of Big Tech Oligarchs`,
        story: `Figures like Elon Musk, Peter Thiel, and Curtis Yarvin shaped ideology and politics, positioning tech leaders as new power brokers.`,
        research_topics: [
          `Elon Musk politics`,
          `Peter Thiel influence`,
          `Curtis Yarvin ideology`
        ]
      }
    ],
    outro: `In the 2010s and 2020s, democratic institutions weakened under the weight of inequality, technology-driven manipulation, and rising authoritarian politics—bringing the U.S. into a new and uncertain era.`
  }
];
