export interface TimelineSectionItem {
  title: string;
  story: string;
  research_topics: string[];
  highlight?: boolean;
  economic_context?: string;
  key_statistic?: string;
}

export interface TimelineSection {
  eyebrow: string;
  title: string;
  intro: string;
  outro: string;
  items: TimelineSectionItem[];
}

export const timeline: TimelineSection[] = [
  {
    eyebrow: `RELIGION`,
    title: `Jesus wasn't pro-business until 1941.`,
    intro: `<strong>Faith was supposed to guide people with compassion and justice.</strong> Instead, business interests hijacked Christianity to bless greed, break unions, and make inequality look holy. Yet believers have also reclaimed their traditions for liberation.`,
    items: [
      {
        title: `1935: Social Gospel challenges corporate power`,
        story: `Protestant leaders like Reinhold Niebuhr criticized capitalism's excesses, preaching that faith demanded economic justice for workers and the poor.`,
        research_topics: [
          `Social Gospel movement`,
          `Reinhold Niebuhr`,
          `Christianity and labor rights`
        ]
      },
      {
        title: `1941: Rev. James Fifield invents Corporate Christianity`,
        story: `With money from big business, Reverend Fifield preached that capitalism was God's will and regulation was sin. His "Spiritual Mobilization" directly countered the Social Gospel.`,
        research_topics: [
          `James Fifield Jr.`,
          `Spiritual Mobilization`,
          `Christian free market ideology`
        ],
        highlight: true,
        economic_context: `World War II government expansion alarmed business leaders`,
        key_statistic: `Fifield's organization received funding from over 400 major corporations`
      },
      {
        title: `1947: Taft-Hartley Act`,
        story: `Backed by business-friendly theology, Congress kneecapped unions, making striking harder and tilting power to bosses. Religious leaders split on whether this served Christian values.`,
        research_topics: [
          `Taft-Hartley Act 1947`,
          `US labor law`,
          `union power postwar America`
        ],
        key_statistic: `Union membership peaked at 35% in 1945, then began its long decline`
      },
      {
        title: `1950s: Billy Graham & Cold War Religion`,
        story: `Evangelists fused anti-communism with capitalism, making "God and free markets" sound like the same thing. Yet other Christians questioned whether this served the poor.`,
        research_topics: [
          `Billy Graham`,
          `Cold War religion`,
          `Christian anti-communism`
        ],
        economic_context: `Post-war economic boom made capitalism seem divinely blessed`
      },
      {
        title: `1960s: Black church and Civil Rights victories`,
        story: `Pastors and congregations powered the Civil Rights Movement, proving that faith could challenge—not bless—an unjust system. This showed Christianity's liberating potential.`,
        research_topics: [
          `Black church Civil Rights`,
          `Martin Luther King Jr.`,
          `religion and social justice`
        ],
        key_statistic: `Over 3,000 clergy participated in the 1965 Selma to Montgomery march`
      },
      {
        title: `1970s: Liberation Theology spreads`,
        story: `Catholic and Protestant theologians in Latin America and the US preached that faith required fighting poverty and oppression—directly challenging pro-business Christianity.`,
        research_topics: [
          `Liberation Theology`,
          `Gustavo Gutiérrez`,
          `progressive Christianity US`
        ]
      },
      {
        title: `1980s: Moral Majority & Culture Wars`,
        story: `Jerry Falwell and televangelists turned pulpits into political machines, rallying Christians against feminism and gay rights while defending corporate conservatism and tax cuts for the wealthy.`,
        research_topics: [
          `Moral Majority`,
          `Jerry Falwell`,
          `televangelism politics`
        ],
        economic_context: `Reaganomics needed religious justification for growing inequality`
      },
      {
        title: `2000s: Southern Baptist Convention & Political Power`,
        story: `The SBC forged close ties with Republican politicians, aligning sermons with party politics and creating a dependable voting bloc. Dissenting voices were marginalized.`,
        research_topics: [
          `Southern Baptist Convention politics`,
          `religion and GOP`,
          `Christian right US`
        ]
      },
      {
        title: `2008: Faith communities respond to financial crisis`,
        story: `While prosperity preachers blamed individual sin for foreclosures, progressive Christians organized mutual aid and questioned the morality of Wall Street bailouts.`,
        research_topics: [
          `2008 financial crisis religion`,
          `foreclosure crisis faith response`,
          `progressive Christianity`
        ],

        economic_context: `Subprime mortgage crisis exposed predatory lending in vulnerable communities`
      },
      {
        title: `Today: Prosperity Gospel & Megachurch Spectacle`,
        story: `Pastors fly in private jets, preaching that wealth is God's blessing while blaming poverty on personal failure. Yet many believers are reclaiming faith as a force for justice.`,
        research_topics: [
          `prosperity gospel`,
          `megachurches`,
          `Joel Osteen`,
          `Paula White`
        ],
        key_statistic: `The 10 richest televangelists have a combined net worth over $1 billion`
      }
    ],
    outro: `The teachings of Christ were twisted into a pro-business narrative. But history shows believers can reclaim faith as a force for justice—from the Social Gospel to Liberation Theology to today's progressive Christian movements.`
  },
  {
    eyebrow: `EDUCATION`,
    title: `Free education would make you harder to trick.`,
    intro: `<strong>America promised education to build free and capable citizens.</strong> Over time, public schools became battlegrounds where elites pushed debt, privatization, and control. But families, students, and teachers have also fought back to defend equal education.`,
    items: [
      {
        title: `1787: The Constitution's promise`,
        story: `"Promote the general Welfare" and "secure the Blessings of Liberty" set the purpose of education: strong citizens, not customers. The founders saw public education as democracy's foundation.`,
        research_topics: [
          `US Constitution`,
          `general welfare clause`,
          `posterity clause`
        ]
      },
      {
        title: `1862: Morrill Act creates land-grant universities`,
        story: `Public funding expands higher education for farmers and workers, strengthening democracy. These universities served the common good, not elite interests.`,
        research_topics: [
          `Morrill Act 1862`,
          `land-grant universities`,
          `public higher education`
        ],
        key_statistic: `69 land-grant universities were established, serving working-class students`
      },
      {
        title: `1944: GI Bill democratizes higher education`,
        story: `Veterans received free college tuition and living expenses, proving that public investment in education creates widespread prosperity and social mobility.`,
        research_topics: [
          `GI Bill 1944`,
          `veterans education benefits`,
          `post-war higher education`
        ],

        key_statistic: `7.8 million WWII veterans used GI Bill education benefits`
      },
      {
        title: `1954: Brown v. Board of Education`,
        story: `The Court ends legal school segregation, proving education is a civil right and a path to equal opportunity. This victory came from organized parent activism.`,
        research_topics: [
          `Brown v. Board of Education`,
          `school desegregation`,
          `civil rights education`
        ]
      },
      {
        title: `1965: Higher Education Act expands access`,
        story: `Federal grants and low-interest loans opened college doors to working-class students. Education was seen as a public good worth investing in.`,
        research_topics: [
          `Higher Education Act 1965`,
          `Pell Grants`,
          `federal education funding`
        ],
        economic_context: `Great Society programs aimed to reduce poverty through education`
      },
      {
        title: `1966–1974: Gov. Ronald Reagan ends free college in California`,
        story: `Cuts and new tuition at UC turned a public good into a personal bill. Reagan targeted student protesters, making them pay for their own repression.`,
        research_topics: [
          `Ronald Reagan California`,
          `University of California tuition`,
          `Free Speech Movement`
        ],
        key_statistic: `UC tuition went from $0 to $2,574 (2020 dollars) during Reagan's tenure`,
        highlight: true
      },
      {
        title: `1980s: Student debt era begins`,
        story: `Loans replaced grants and low tuition. Federal funding shifted from gift aid to debt, locking graduates into payments for decades while wages stalled.`,
        research_topics: [
          `student loans history`,
          `tuition inflation`,
          `education debt crisis`
        ],
        economic_context: `Reagan cuts federal education spending while military spending soars`
      },
      {
        title: `1983: A Nation at Risk report`,
        story: `The Reagan-era report claimed schools were "failing," fueling standardized testing and privatization pushes. Critics noted it ignored poverty's impact on learning.`,
        research_topics: [
          `A Nation at Risk 1983`,
          `education reform Reagan`,
          `testing movement`
        ]
      },
      {
        title: `1990: Milwaukee passes first voucher law`,
        story: `School choice moved from theory to practice. Religious-right groups, already mobilized in culture wars, quickly joined the push to redirect public funds to private schools.`,
        research_topics: [
          `Milwaukee Parental Choice Program`,
          `school vouchers history`,
          `religion and education`
        ]
      },
      {
        title: `1994: Students win against education cuts`,
        story: `California students organized mass protests against fee increases and course cuts, forcing some reversals and showing that organized resistance could protect public education.`,
        research_topics: [
          `California student protests 1990s`,
          `education funding activism`,
          `student organizing`
        ]
      },
      {
        title: `2001: No Child Left Behind`,
        story: `The law tied funding to high-stakes testing, narrowing curriculum and accelerating the charter school boom. Schools in poor areas faced the harshest penalties.`,
        research_topics: [
          `No Child Left Behind`,
          `standardized testing`,
          `charter schools`
        ],
        key_statistic: `Charter school enrollment grew from 340,000 to 3.3 million students (2000-2016)`
      },
      {
        title: `2008: Financial crisis devastates school funding`,
        story: `State budget cuts closed schools, fired teachers, and increased class sizes. Meanwhile, private schools serving elites remained well-funded.`,
        research_topics: [
          `2008 recession education cuts`,
          `teacher layoffs`,
          `school funding crisis`
        ],
        economic_context: `States cut $7.6 billion from education budgets (2008-2015)`,
        key_statistic: `300,000 education jobs were eliminated during the recession`
      },
      {
        title: `2010s: Corporate capture of curriculum`,
        story: `In states like Oklahoma, oil and gas companies funded classroom content that protected their interests instead of teaching critical thinking about climate change.`,
        research_topics: [
          `Oklahoma oil curriculum`,
          `corporate-funded curriculum`,
          `energy industry education`
        ]
      },
      {
        title: `2012: Chicago teachers strike for school conditions`,
        story: `Teachers struck for smaller class sizes, better resources, and less testing—showing that educators could fight for students' learning conditions, not just their own pay.`,
        research_topics: [
          `Chicago Teachers Union 2012`,
          `teacher strikes`,
          `education labor organizing`
        ]
      },
      {
        title: `2018: Red for Ed teacher walkouts`,
        story: `Teachers in Republican states won public support for school funding increases by connecting their working conditions to students' learning conditions.`,
        research_topics: [
          `Red for Ed movement`,
          `teacher walkouts 2018`,
          `Arizona Oklahoma teacher strikes`
        ],
        highlight: true,
        key_statistic: `Teachers in 6 states walked out, affecting 1.7 million students`
      },
      {
        title: `2020s: Book bans and censorship`,
        story: `Libraries were stripped and teachers silenced about racism and LGBTQ+ issues. Meanwhile, elites' children still accessed world-class schools with full curriculums.`,
        research_topics: [
          `book bans`,
          `curriculum censorship`,
          `anti-woke laws`
        ],
        key_statistic: `1,477 book bans in 2022-23 school year, up 33% from previous year`
      }
    ],
    outro: `Education should be a ladder, not a trap. Americans have defended schools before—from Brown v. Board to the GI Bill to Red for Ed. When organized, students, parents, and teachers can win again.`
  },
  {
    eyebrow: `ELECTIONS`,
    title: `Can't win? Cheat.`,
    intro: `<strong>When their ideas could not win a fair fight, elites changed how the fight was scored.</strong> They bought influence, rewrote rules, and bent maps so regular people would have less power. But voters have also pushed through reforms that restored fairness.`,
    items: [
      {
        title: `1965: Voting Rights Act passed`,
        story: `After decades of organizing and the Selma march, Congress guaranteed voting access for Black Americans. This showed that organized pressure could expand democracy.`,
        research_topics: [
          `Voting Rights Act 1965`,
          `Selma to Montgomery`,
          `civil rights voting`
        ],
        key_statistic: `Black voter registration in Mississippi jumped from 6.7% to 59.8% (1965-1967)`
      },
      {
        title: `1971: The Powell Memo`,
        story: `Corporate lawyer Lewis Powell urged business leaders to organize, fund media and think tanks, and take politics over from the inside. This blueprint shaped decades of elite strategy.`,
        research_topics: [
          `Powell Memo 1971`,
          `Lewis Powell`,
          `US Chamber of Commerce`
        ],
        highlight: true,
        economic_context: `Corporate profits under pressure from regulation and union power`
      },
      {
        title: `1973: Heritage Foundation and allies rise`,
        story: `Think tanks provided model bills and talking points that favored deregulation, tax cuts, and union-busting—and later pushed school choice and voting restrictions.`,
        research_topics: [
          `Heritage Foundation`,
          `ALEC model legislation`,
          `conservative think tanks`
        ],
        key_statistic: `Corporate funding for conservative think tanks grew 10x (1970s-1990s)`
      },
      {
        title: `1974: Campaign finance reforms after Watergate`,
        story: `Public outrage over Nixon's corruption led to contribution limits, disclosure requirements, and public financing for presidential campaigns—proving reform was possible.`,
        research_topics: [
          `Federal Election Campaign Act`,
          `post-Watergate reforms`,
          `public campaign financing`
        ]
      },
      {
        title: `1976: Buckley v. Valeo`,
        story: `The Supreme Court ruled that money equals speech, striking down spending limits while keeping contribution limits. This opened the door to unlimited independent expenditures.`,
        research_topics: [
          `Buckley v. Valeo`,
          `money as speech`,
          `campaign finance law`
        ]
      },
      {
        title: `1980: Reagan Revolution`,
        story: `Tax cuts for the wealthy, deregulation, and union busting moved the corporate agenda into national policy. Corporate-funded think tanks provided the intellectual framework.`,
        research_topics: [
          `Reaganomics`,
          `PATCO strike`,
          `supply-side economics`
        ],
        economic_context: `Stagflation crisis created opening for free-market solutions`
      },
      {
        title: `1993: Motor Voter Act expands registration`,
        story: `Congress required states to offer voter registration at DMVs and social service agencies, making it easier for working people to participate in democracy.`,
        research_topics: [
          `National Voter Registration Act`,
          `Motor Voter law`,
          `voter registration reform`
        ],
        key_statistic: `11 million new voters registered in the law's first year`
      },
      {
        title: `2000: Florida recount and Bush v. Gore`,
        story: `Voter purges targeting minorities and a halted recount handed the presidency to George W. Bush, damaging trust in elections and normalizing suppression tactics.`,
        research_topics: [`Bush v. Gore`, `Florida 2000`, `voter roll purges`],
        key_statistic: `57,700 mostly Black and Latino voters were incorrectly purged in Florida`
      },
      {
        title: `2002: Help America Vote Act`,
        story: `After Florida's chaos, Congress required voting machine upgrades and provisional ballots—but also allowed states to impose new ID requirements that would burden some voters.`,
        research_topics: [
          `Help America Vote Act`,
          `provisional ballots`,
          `voter ID requirements`
        ]
      },
      {
        title: `2008: Obama mobilizes new voters`,
        story: `Grassroots organizing and online fundraising showed how small-dollar donors and first-time voters could compete with corporate money and insider politics.`,
        research_topics: [
          `Obama 2008 campaign`,
          `small-dollar fundraising`,
          `voter mobilization`
        ],
        key_statistic: `3 million people donated to Obama's campaign for the first time`
      },
      {
        title: `2010: Citizens United`,
        story: `The Supreme Court allowed unlimited outside spending by corporations and unions. Billionaires and corporations gained oversized control of campaigns, drowning out ordinary voices.`,
        research_topics: [`Citizens United`, `Super PACs`, `campaign finance`],
        key_statistic: `Outside spending jumped from $338 million (2008) to $1.4 billion (2012)`
      },
      {
        title: `2010: Operation REDMAP`,
        story: `Data-driven gerrymanders locked in minority rule by diluting urban and minority votes. Republicans invested $30 million to flip state legislatures before redistricting.`,
        research_topics: [
          `Operation REDMAP`,
          `partisan gerrymandering`,
          `redistricting technology`
        ],
        key_statistic: `Republicans won 13 more House seats than vote share would predict (2012)`,
        highlight: true
      },
      {
        title: `2013: Shelby County v. Holder`,
        story: `The Court gutted Voting Rights Act preclearance, claiming discrimination was historical. States quickly passed new restrictions that made voting harder for minorities and young people.`,
        research_topics: [
          `Shelby County v. Holder`,
          `Voting Rights Act`,
          `voter suppression laws`
        ],
        key_statistic: `24 states passed voting restrictions in the decade after Shelby County`
      },
      {
        title: `2018: Michigan ends gerrymanders by ballot initiative`,
        story: `Grassroots organizers won a landslide to create an independent redistricting commission—a model for other states and proof that voters want fair maps.`,
        research_topics: [
          `Michigan Proposal 2 2018`,
          `independent redistricting`,
          `ballot initiatives voting reform`
        ],
        key_statistic: `Michigan voters approved reform by 61-39%, crossing party lines`
      },
      {
        title: `2019: HR1 For the People Act passes House`,
        story: `Democrats passed comprehensive democracy reforms including automatic registration, public campaign financing, and anti-corruption measures—showing a roadmap for federal action.`,
        research_topics: [
          `For the People Act`,
          `HR1 2019`,
          `democracy reform legislation`
        ]
      },
      {
        title: `2020: Record turnout despite restrictions`,
        story: `Organizers, especially in communities of color, overcame voter suppression to achieve the highest turnout in over a century, proving that mobilization can overcome barriers.`,
        research_topics: [
          `2020 election turnout`,
          `voter mobilization`,
          `Georgia organizing`
        ],
        key_statistic: `66.6% turnout—highest since 1900, with 22 million more votes than 2016`
      },
      {
        title: `2020s: Restrictive voting laws expand`,
        story: `New ID rules, fewer drop boxes, and aggressive purges targeted working people and students. But voters in red and blue states continued pushing back through ballot measures.`,
        research_topics: [
          `voter ID laws`,
          `drop box limits`,
          `voter roll purges 2020s`
        ],
        key_statistic: `19 states passed 34 laws restricting voting access (2021-2022)`
      }
    ],
    outro: `Rigging is not destiny. Citizens have fought back before—from the Voting Rights Act to Motor Voter to Michigan's redistricting victory. When organized, voters can still win fair elections and accountable government.`
  }
];
