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
        story: `Protestant leaders like Reinhold Niebuhr criticized capitalism's excesses, preaching that faith demanded economic justice for workers and the poor. The Social Gospel movement argued that Christians had a duty to address social problems like poverty, inequality, and unsafe working conditions. These theologians saw the New Deal's labor protections and social programs as expressions of Christian values, directly challenging the idea that unregulated capitalism was divinely ordained.`,
        research_topics: [
          `Social Gospel movement`,
          `Reinhold Niebuhr`,
          `Christianity and labor rights`,
          `New Deal religious support`,
          `Christian social justice 1930s`
        ]
      },
      {
        title: `1941: Rev. James Fifield invents Corporate Christianity`,
        story: `With money from big business, Reverend Fifield preached that capitalism was God's will and regulation was sin. His "Spiritual Mobilization" directly countered the Social Gospel, arguing that government interference in the economy violated divine law. Fifield's slick operation distributed millions of pamphlets, sponsored radio shows, and trained thousands of pastors to preach free-market theology. This wasn't grassroots faith—it was a coordinated campaign funded by corporate America to sanctify their interests.`,
        research_topics: [
          `James Fifield Jr.`,
          `Spiritual Mobilization`,
          `Christian free market ideology`,
          `New Deal economic policies`,
          `World War II government expansion`,
          `corporate funding of religious movements`
        ],
        highlight: true,
        economic_context: `World War II government expansion alarmed business leaders`,
        key_statistic: `Fifield's organization received funding from over 400 major corporations`
      },
      {
        title: `1947: Taft-Hartley Act`,
        story: `Backed by business-friendly theology that portrayed unions as un-American, Congress kneecapped labor organizing with the Taft-Hartley Act. The law made it harder to strike, banned solidarity actions, and allowed states to pass "right-to-work" laws that weakened union finances. Religious leaders split dramatically—while corporate-funded pastors blessed the legislation as protecting individual freedom, Social Gospel advocates argued it violated Christian principles of worker dignity and collective action.`,
        research_topics: [
          `Taft-Hartley Act 1947`,
          `US labor law`,
          `union power postwar America`,
          `right-to-work laws`,
          `religious responses to labor legislation`
        ],
        key_statistic: `Union membership peaked at 35% in 1945, then began its long decline`
      },
      {
        title: `1950s: Billy Graham & Cold War Religion`,
        story: `Evangelists like Billy Graham fused anti-communism with capitalism, making "God and free markets" sound like the same thing. Graham's crusades, attended by millions, portrayed socialism as satanic and capitalism as Christian. Corporate sponsors funded these massive events, ensuring the message reached every corner of America. Yet other Christians, particularly in Black churches and among progressive denominations, questioned whether this prosperity theology truly served the poor and marginalized that Jesus championed.`,
        research_topics: [
          `Billy Graham`,
          `Cold War religion`,
          `Christian anti-communism`,
          `evangelical capitalism`,
          `post-war economic boom`
        ],
        economic_context: `Post-war economic boom made capitalism seem divinely blessed`
      },
      {
        title: `1960s: Black church and Civil Rights victories`,
        story: `Pastors and congregations powered the Civil Rights Movement, proving that faith could challenge—not bless—an unjust system. Ministers like Martin Luther King Jr. drew on liberation traditions within Christianity, arguing that racial segregation and economic exploitation violated God's vision of justice. Churches became organizing centers, providing meeting spaces, funding, and moral authority for the movement. This showed Christianity's liberating potential when divorced from corporate interests.`,
        research_topics: [
          `Black church Civil Rights`,
          `Martin Luther King Jr.`,
          `religion and social justice`,
          `clergy civil rights participation`,
          `Christian liberation theology roots`
        ],
        key_statistic: `Over 3,000 clergy participated in the 1965 Selma to Montgomery march`
      },
      {
        title: `1970s: Liberation Theology spreads`,
        story: `Catholic and Protestant theologians in Latin America and the US preached that faith required fighting poverty and oppression—directly challenging pro-business Christianity. Liberation theologians like Gustavo Gutiérrez argued that God had a "preferential option for the poor" and that systemic inequality was sinful. This movement spread to progressive American churches, creating an alternative to both prosperity gospel and corporate Christianity that emphasized collective action for economic justice.`,
        research_topics: [
          `Liberation Theology`,
          `Gustavo Gutiérrez`,
          `progressive Christianity US`,
          `preferential option for the poor`,
          `Christian socialism`
        ]
      },
      {
        title: `1980s: Moral Majority & Culture Wars`,
        story: `Jerry Falwell and televangelists turned pulpits into political machines, rallying Christians against feminism and gay rights while defending corporate conservatism and tax cuts for the wealthy. The Moral Majority mobilized evangelical voters around cultural issues, but consistently supported economic policies that benefited the rich. This coalition used religious language to justify Reagan's cuts to social programs, arguing that government aid enabled sin while private charity expressed Christian virtue.`,
        research_topics: [
          `Moral Majority`,
          `Jerry Falwell`,
          `televangelism politics`,
          `Reagan evangelical support`,
          `culture wars economics`
        ],
        economic_context: `Reaganomics needed religious justification for growing inequality`
      },
      {
        title: `2000s: Southern Baptist Convention & Political Power`,
        story: `The nation's largest Protestant denomination forged increasingly close ties with Republican politicians, aligning sermons with party politics and creating a dependable voting bloc. Southern Baptist leaders endorsed tax cuts for the wealthy while opposing minimum wage increases, healthcare expansion, and environmental protection. The convention's political apparatus ensured that dissenting voices within congregations were marginalized, creating an echo chamber that reinforced conservative economic orthodoxy.`,
        research_topics: [
          `Southern Baptist Convention politics`,
          `religion and GOP`,
          `Christian right US`,
          `evangelical political organizing`,
          `religious conservative economics`
        ]
      },
      {
        title: `2008: Faith communities respond to financial crisis`,
        story: `While prosperity preachers blamed individual sin for foreclosures and job losses, progressive Christians organized mutual aid networks and questioned the morality of Wall Street bailouts. Churches across denominations provided food banks, housing assistance, and debt counseling as families lost homes to predatory lending. The crisis exposed the bankruptcy of prosperity theology—if wealth truly reflected God's favor, why were so many faithful families suffering while banks got rescued?`,
        research_topics: [
          `2008 financial crisis religion`,
          `foreclosure crisis faith response`,
          `progressive Christianity`,
          `prosperity gospel critique`,
          `faith-based mutual aid`,
          `subprime mortgage crisis`,
          `Wall Street bailouts`
        ],
        economic_context: `Subprime mortgage crisis exposed predatory lending in vulnerable communities`
      },
      {
        title: `Today: Prosperity Gospel & Megachurch Spectacle`,
        story: `Pastors fly in private jets while preaching that wealth is God's blessing and poverty reflects personal failure. Televangelists like Joel Osteen and Paula White promise financial miracles to viewers who send donations, creating a feedback loop where the poor fund the rich in hopes of divine rewards. Meanwhile, many believers are reclaiming faith as a force for justice, organizing around issues like immigration, climate change, and economic inequality—showing that the corporate capture of Christianity is not complete.`,
        research_topics: [
          `prosperity gospel`,
          `megachurches`,
          `Joel Osteen`,
          `Paula White`,
          `televangelism wealth`,
          `progressive Christian movements`
        ],
        key_statistic: `The 10 richest televangelists have a combined net worth over $1 billion`
      }
    ],
    outro: `The teachings of Christ were twisted into a pro-business narrative. At the same time, education was under attack.`
  },
  {
    eyebrow: `EDUCATION`,
    title: `Free education makes you harder to trick.`,
    intro: `<strong>America promised education to build free and capable citizens.</strong> Over time, public schools became battlegrounds where elites pushed debt, privatization, and control. But families, students, and teachers have also fought back to defend equal education.`,
    items: [
      {
        title: `1787: The Constitution's promise`,
        story: `The Constitution's mandate to "promote the general Welfare" and "secure the Blessings of Liberty to ourselves and our Posterity" established education as democracy's foundation. The founders understood that self-governance required informed citizens capable of critical thinking and civic engagement. Public education wasn't just about individual advancement—it was about creating a population that couldn't be easily manipulated by demagogues or dominated by aristocrats.`,
        research_topics: [
          `US Constitution`,
          `general welfare clause`,
          `posterity clause`,
          `founders and education`,
          `democratic education theory`
        ]
      },
      {
        title: `1862: Morrill Act creates land-grant universities`,
        story: `The Morrill Act democratized higher education by establishing universities focused on agriculture, engineering, and practical skills for working people. Unlike elite colleges that trained gentleman scholars, these land-grant institutions served farmers, mechanics, and immigrants seeking upward mobility. Federal land grants funded construction and operations, proving that public investment could expand opportunity and strengthen democracy by educating citizens from all backgrounds.`,
        research_topics: [
          `Morrill Act 1862`,
          `land-grant universities`,
          `public higher education`,
          `agricultural education`,
          `practical education movement`
        ],
        key_statistic: `69 land-grant universities were established, serving working-class students`
      },
      {
        title: `1944: GI Bill democratizes higher education`,
        story: `The GI Bill shattered higher education's class barriers by providing free tuition, books, and living expenses to returning veterans. Colleges that once served only the wealthy suddenly welcomed truck drivers, factory workers, and farmers' sons. This massive public investment created the educated middle class that drove America's post-war prosperity, proving that when education is treated as a public good rather than a private commodity, everyone benefits.`,
        research_topics: [
          `GI Bill 1944`,
          `veterans education benefits`,
          `post-war higher education`,
          `middle class creation`,
          `public investment education`
        ],
        key_statistic: `7.8 million WWII veterans used GI Bill education benefits`
      },
      {
        title: `1954: Brown v. Board of Education`,
        story: `The Supreme Court's Brown decision ended legal school segregation after decades of organizing by Black parents and civil rights lawyers. The ruling recognized that "separate educational facilities are inherently unequal" and that education is fundamental to citizenship and opportunity. This victory came not from elite charity but from grassroots activism by families who demanded their children receive the same quality education as white children.`,
        research_topics: [
          `Brown v. Board of Education`,
          `school desegregation`,
          `civil rights education`,
          `NAACP legal strategy`,
          `educational equality`
        ]
      },
      {
        title: `1965: Higher Education Act expands access`,
        story: `President Johnson's Higher Education Act created federal grants and low-interest loans that opened college doors to working-class students of all races. The law established what would become Pell Grants, treating higher education as a public good worth investing in rather than a privilege for the wealthy. This Great Society program recognized that expanding educational opportunity was essential for reducing poverty and strengthening democracy.`,
        research_topics: [
          `Higher Education Act 1965`,
          `Pell Grants`,
          `federal education funding`,
          `Great Society programs`,
          `anti-poverty education policy`
        ],
        economic_context: `Great Society programs aimed to reduce poverty through education`
      },
      {
        title: `1966–1974: Gov. Ronald Reagan ends free college in California`,
        story: `Governor Reagan transformed the University of California from a free public good into a fee-for-service commodity, imposing tuition charges that reached $2,574 in 2020 dollars by the end of his tenure. Reagan explicitly targeted student protesters, arguing they should pay for their own education if they were going to use campuses for political organizing. This marked a turning point where public institutions began serving market logic rather than democratic values, making students into customers rather than citizens.`,
        research_topics: [
          `Ronald Reagan California`,
          `University of California tuition`,
          `Free Speech Movement`,
          `student protests 1960s`,
          `public university privatization`
        ],
        key_statistic: `UC tuition went from $0 to $2,574 (2020 dollars) during Reagan's tenure`,
        highlight: true
      },
      {
        title: `1980s: Student debt era begins`,
        story: `The Reagan administration shifted federal policy from grants to loans, forcing students to mortgage their futures for education their parents had received nearly free. As federal spending on education declined, colleges raised tuition faster than inflation, creating a vicious cycle where students borrowed more to pay higher prices. This debt trap tied graduates to employers and banks for decades, making them less likely to take career risks, start businesses, or challenge authority.`,
        research_topics: [
          `student loans history`,
          `tuition inflation`,
          `education debt crisis`,
          `Reagan education cuts`,
          `grant-to-loan shift`
        ],
        economic_context: `Reagan cuts federal education spending while military spending soars`
      },
      {
        title: `1983: A Nation at Risk report`,
        story: `The Reagan-era report claimed American schools were "failing" in international competition, fueling demands for standardized testing, teacher accountability, and market-based reforms. Critics noted the report ignored how poverty affected learning outcomes and used selective data to justify privatization policies. The manufactured crisis provided cover for cuts to public education while channeling taxpayer money toward private schools and testing companies.`,
        research_topics: [
          `A Nation at Risk 1983`,
          `education reform Reagan`,
          `testing movement`,
          `manufactured education crisis`,
          `poverty and education outcomes`
        ]
      },
      {
        title: `1990: Milwaukee passes first voucher law`,
        story: `Wisconsin's school choice program allowed public funds to follow students to private schools, beginning the systematic diversion of taxpayer money from public to private education. Religious-right groups, already mobilized by culture wars, quickly supported voucher expansion as a way to fund faith-based schools. What started as a small program for low-income students became a template for draining resources from public schools while subsidizing private institutions that could exclude students and avoid accountability.`,
        research_topics: [
          `Milwaukee Parental Choice Program`,
          `school vouchers history`,
          `religion and education`,
          `private school subsidies`,
          `school choice movement`
        ]
      },
      {
        title: `1994: Students win against education cuts`,
        story: `California students organized mass protests, walkouts, and occupations against fee increases and course cuts, forcing some reversals and showing that organized resistance could protect public education. Students linked arms across campus quads, disrupted regents meetings, and built coalitions with faculty and community members. Their success proved that when education is under attack, students themselves can be the most effective defenders of accessible, quality public schooling.`,
        research_topics: [
          `California student protests 1990s`,
          `education funding activism`,
          `student organizing`,
          `tuition increase protests`,
          `grassroots education defense`
        ]
      },
      {
        title: `2001: No Child Left Behind`,
        story: `Bush's bipartisan education law tied federal funding to high-stakes standardized test scores, narrowing curriculum to test prep and accelerating the charter school boom. Schools in poor communities faced the harshest penalties—budget cuts, closures, or conversion to private management—while wealthy districts continued offering art, music, and advanced classes. The law created a two-tiered system where zip code determined educational opportunity.`,
        research_topics: [
          `No Child Left Behind`,
          `standardized testing`,
          `charter schools`,
          `high-stakes testing`,
          `educational inequality`
        ],
        key_statistic: `Charter school enrollment grew from 340,000 to 3.3 million students (2000-2016)`
      },
      {
        title: `2008: Financial crisis devastates school funding`,
        story: `State budget crises triggered massive education cuts that closed schools, fired teachers, and increased class sizes to levels that made quality instruction impossible. Public schools serving working-class families bore the brunt of austerity while private schools serving elites remained well-funded through tuition and endowments. The recession created a tale of two education systems: resource-starved public schools and well-equipped private institutions.`,
        research_topics: [
          `2008 recession education cuts`,
          `teacher layoffs`,
          `school funding crisis`,
          `state budget cuts education`,
          `education inequality recession`
        ],
        economic_context: `States cut $7.6 billion from education budgets (2008-2015)`,
        key_statistic: `300,000 education jobs were eliminated during the recession`
      },
      {
        title: `2010s: Corporate capture of curriculum`,
        story: `Oil and gas companies flush with fracking profits funded classroom materials that promoted fossil fuels while downplaying climate change. In Oklahoma and other energy states, corporations literally wrote textbook chapters and lesson plans that protected their business interests rather than teaching students critical thinking about environmental science. This corporate curriculum capture showed how economic power translates into educational influence, shaping what the next generation learns about the world.`,
        research_topics: [
          `Oklahoma oil curriculum`,
          `corporate-funded curriculum`,
          `energy industry education`,
          `fracking boom profits`,
          `climate change education`,
          `corporate education influence`
        ],
        economic_context: `Fracking boom generated billions for energy companies to spend on influence`
      },
      {
        title: `2012: Chicago teachers strike for school conditions`,
        story: `Chicago teachers launched the first major urban teacher strike in decades, demanding smaller class sizes, better resources, and less standardized testing. Unlike traditional labor disputes focused solely on wages, teachers connected their working conditions to students' learning conditions, winning broad community support. The strike showed that educators could fight for the resources and respect that public education deserves.`,
        research_topics: [
          `Chicago Teachers Union 2012`,
          `teacher strikes`,
          `education labor organizing`,
          `community-supported strikes`,
          `education working conditions`
        ]
      },
      {
        title: `2018: Red for Ed teacher walkouts`,
        story: `Teachers in underfunded Republican states organized massive walkouts that shut down schools and forced legislatures to increase education spending. The movement spread from West Virginia to Oklahoma to Arizona as teachers wore red shirts and demanded respect for their profession and resources for their students. These educators proved that even in conservative states, the public supports investing in education when teachers make the case clearly and powerfully.`,
        research_topics: [
          `Red for Ed movement`,
          `teacher walkouts 2018`,
          `Arizona Oklahoma teacher strikes`,
          `West Virginia teacher strike`,
          `education funding advocacy`
        ],
        key_statistic: `Teachers in 6 states walked out, affecting 1.7 million students`
      },
      {
        title: `2020s: Book bans and censorship`,
        story: `School libraries were stripped of books about racism, LGBTQ+ issues, and other topics that made some parents uncomfortable, while teachers faced firing for discussing historical realities. Meanwhile, children of elites continued attending private schools with comprehensive libraries and curricula that included diverse perspectives. The book banning campaigns created an educational apartheid where working-class kids received sanitized, incomplete educations while wealthy families maintained access to world-class schooling.`,
        research_topics: [
          `book bans`,
          `curriculum censorship`,
          `anti-woke laws`,
          `library censorship`,
          `educational content restrictions`,
          `school board culture wars`
        ],
        key_statistic: `1,477 book bans in 2022-23 school year, up 33% from previous year`
      }
    ],
    outro: `Education should be a ladder to a better life. With religion and education both subverted by elites, the only thing left was democracy itself.`
  },
  {
    eyebrow: `ELECTIONS`,
    title: `Can't win? Cheat.`,
    intro: `<strong>When their ideas couldn’t win a fair fight, elites changed how the fight was scored.</strong> They bought influence, rewrote rules, and bent maps so regular people would have less power. But voters have also pushed through reforms that restored fairness.`,
    items: [
      {
        title: `1965: Voting Rights Act passed`,
        story: `After decades of organizing, protests, and the brutal images from Selma's Bloody Sunday, Congress passed the Voting Rights Act to guarantee voting access for Black Americans. The law required federal oversight of elections in states with histories of discrimination and banned literacy tests and other barriers designed to prevent minority participation. This landmark legislation proved that sustained organizing and moral pressure could expand democracy and break down exclusionary systems.`,
        research_topics: [
          `Voting Rights Act 1965`,
          `Selma to Montgomery`,
          `civil rights voting`,
          `Bloody Sunday`,
          `federal election oversight`,
          `literacy tests voting`
        ],
        key_statistic: `Black voter registration in Mississippi jumped from 6.7% to 59.8% (1965-1967)`
      },
      {
        title: `1971: The Powell Memo`,
        story: `Corporate lawyer Lewis Powell wrote a confidential memo urging the U.S. Chamber of Commerce to mobilize business interests against what he saw as anti-corporate sentiment in universities, media, and government. Powell's blueprint called for coordinated funding of think tanks, academic centers, and political candidates who would advance pro-business policies. This strategic document became the playbook for decades of corporate political organizing that transformed American politics from the inside.`,
        research_topics: [
          `Powell Memo 1971`,
          `Lewis Powell`,
          `US Chamber of Commerce`,
          `corporate political organizing`,
          `business political strategy`
        ],
        highlight: true,
        economic_context: `Corporate profits under pressure from regulation and union power`
      },
      {
        title: `1973: Heritage Foundation and allies rise`,
        story: `Conservative think tanks like Heritage Foundation began producing model legislation, policy papers, and talking points that advanced deregulation, tax cuts, and union-busting. These well-funded institutions provided intellectual cover for policies that benefited wealthy donors while training a generation of political operatives. The American Legislative Exchange Council (ALEC) later perfected this approach, writing cookie-cutter bills that state legislators could introduce verbatim.`,
        research_topics: [
          `Heritage Foundation`,
          `ALEC model legislation`,
          `conservative think tanks`,
          `corporate think tank funding`,
          `policy network development`
        ],
        key_statistic: `Corporate funding for conservative think tanks grew 10x (1970s-1990s)`
      },
      {
        title: `1974: Campaign finance reforms after Watergate`,
        story: `Public outrage over Nixon's corruption and illegal campaign contributions led to comprehensive reforms including contribution limits, disclosure requirements, and public financing for presidential campaigns. The Federal Election Campaign Act created the framework for modern campaign finance law and established that democracy required transparency and limits on big money influence. These reforms proved that scandals could create opportunities for meaningful change when citizens demanded accountability.`,
        research_topics: [
          `Federal Election Campaign Act`,
          `post-Watergate reforms`,
          `public campaign financing`,
          `campaign contribution limits`,
          `campaign finance disclosure`
        ]
      },
      {
        title: `1976: Buckley v. Valeo`,
        story: `The Supreme Court's Buckley decision created the legal foundation for unlimited money in politics by ruling that spending money on campaigns was a form of protected speech. While the Court upheld contribution limits to prevent corruption, it struck down spending limits, arguing that restricting expenditures violated the First Amendment. This decision opened the door to independent expenditures that would eventually dwarf direct contributions to candidates.`,
        research_topics: [
          `Buckley v. Valeo`,
          `money as speech`,
          `campaign finance law`,
          `independent expenditures`,
          `First Amendment campaign finance`
        ]
      },
      {
        title: `1980: Reagan Revolution`,
        story: `Ronald Reagan's presidency implemented the corporate agenda developed by think tanks throughout the 1970s: massive tax cuts for the wealthy, deregulation of industries, and union-busting that began with firing air traffic controllers. These policies, marketed as economic freedom, actually concentrated wealth and power while weakening the institutions that gave working people political voice. Corporate-funded intellectuals provided the theoretical justification for what was essentially a transfer of resources from the many to the few.`,
        research_topics: [
          `Reaganomics`,
          `PATCO strike`,
          `supply-side economics`,
          `deregulation 1980s`,
          `union busting Reagan`
        ],
        economic_context: `Stagflation crisis created opening for free-market solutions`
      },
      {
        title: `1993: Motor Voter Act expands registration`,
        story: `The National Voter Registration Act required states to offer voter registration at Department of Motor Vehicles offices, social service agencies, and military recruitment centers, making it easier for working people to participate in democracy. The law recognized that registration barriers were keeping eligible citizens from voting and that government had a responsibility to facilitate democratic participation. This reform showed that federal action could expand voting rights even when some states resisted.`,
        research_topics: [
          `National Voter Registration Act`,
          `Motor Voter law`,
          `voter registration reform`,
          `voting access expansion`,
          `federal voting rights`
        ],
        key_statistic: `11 million new voters registered in the law's first year`
      },
      {
        title: `2000: Florida recount and Bush v. Gore`,
        story: `Florida's election meltdown exposed how voter purges, inadequate equipment, and partisan election administration could determine presidential outcomes. Secretaries of state removed thousands of eligible voters from rolls, targeting minorities with flawed databases, while wealthy precincts had modern voting machines and poor areas used error-prone punch cards. The Supreme Court's decision to halt the recount normalized election manipulation and eroded faith in democratic institutions.`,
        research_topics: [
          `Bush v. Gore`,
          `Florida 2000`,
          `voter roll purges`,
          `hanging chads`,
          `election administration partisan`,
          `voting machine disparities`
        ],
        key_statistic: `57,700 mostly Black and Latino voters were incorrectly purged in Florida`
      },
      {
        title: `2002: Help America Vote Act`,
        story: `Congress responded to Florida's chaos by funding voting machine upgrades and requiring provisional ballots for disputed voters, but the law also allowed states to impose new identification requirements that would burden some voters more than others. While some provisions expanded access, others created new barriers that particularly affected elderly, disabled, and low-income citizens who were less likely to have required documents.`,
        research_topics: [
          `Help America Vote Act`,
          `provisional ballots`,
          `voter ID requirements`,
          `voting machine standards`,
          `election modernization`
        ]
      },
      {
        title: `2008: Obama mobilizes new voters`,
        story: `Barack Obama's presidential campaign proved that grassroots organizing and small-dollar fundraising could compete with corporate money and insider politics. The campaign registered millions of first-time voters, particularly young people and minorities, while raising record amounts from online donations averaging less than $100. This success showed that when campaigns focus on expanding the electorate rather than just persuading existing voters, democratic participation increases and different outcomes become possible.`,
        research_topics: [
          `Obama 2008 campaign`,
          `small-dollar fundraising`,
          `voter mobilization`,
          `grassroots organizing`,
          `online political fundraising`,
          `voter registration drives`
        ],
        key_statistic: `3 million people donated to Obama's campaign for the first time`
      },
      {
        title: `2010: Citizens United`,
        story: `The Supreme Court's Citizens United decision allowed unlimited independent spending by corporations and unions in federal elections, arguing that these expenditures could not corrupt candidates as long as they weren't coordinated with campaigns. The ruling opened floodgates for Super PACs and dark money groups that could raise and spend unlimited amounts while obscuring their funding sources. Billionaires and corporations gained megaphones that drowned out ordinary citizens' voices in democratic debates.`,
        research_topics: [
          `Citizens United`,
          `Super PACs`,
          `campaign finance`,
          `independent expenditures`,
          `dark money groups`,
          `corporate political spending`
        ],
        key_statistic: `Outside spending jumped from $338 million (2008) to $1.4 billion (2012)`
      },
      {
        title: `2010: Operation REDMAP`,
        story: `Republicans invested $30 million in a data-driven strategy to flip state legislatures before 2010 redistricting, then used sophisticated mapping software to create districts that locked in partisan advantages for a decade. The gerrymandered maps diluted urban and minority votes while concentrating Republican voters efficiently, allowing the party to win legislative majorities even when receiving fewer total votes. This systematic manipulation showed how technical expertise could be weaponized against democratic representation.`,
        research_topics: [
          `Operation REDMAP`,
          `partisan gerrymandering`,
          `redistricting technology`,
          `state legislature targeting`,
          `vote dilution`,
          `gerrymandering software`
        ],
        key_statistic: `Republicans won 13 more House seats than vote share would predict (2012)`
      },
      {
        title: `2013: Shelby County v. Holder`,
        story: `The Supreme Court gutted the Voting Rights Act's preclearance requirement, arguing that federal oversight was no longer needed because discrimination was historical rather than contemporary. Chief Justice Roberts claimed that voting discrimination was largely solved, ignoring extensive evidence of ongoing suppression efforts. Within hours of the decision, previously covered states began implementing new restrictions on voting access, proving that federal oversight had been essential for protecting democratic participation.`,
        research_topics: [
          `Shelby County v. Holder`,
          `Voting Rights Act`,
          `voter suppression laws`,
          `preclearance requirement`,
          `voting discrimination history`,
          `federal election oversight`
        ],
        key_statistic: `24 states passed voting restrictions in the decade after Shelby County`
      },
      {
        title: `2018: Michigan ends gerrymanders by ballot initiative`,
        story: `Grassroots organizers collected signatures and won a landslide victory to create an independent redistricting commission, removing map-drawing power from partisan legislators. The citizen-led campaign built a broad coalition that transcended party lines, arguing that voters should choose their politicians rather than politicians choosing their voters. Michigan's success provided a model for other states and proved that direct democracy could overcome legislative resistance to fair representation.`,
        research_topics: [
          `Michigan Proposal 2 2018`,
          `independent redistricting`,
          `ballot initiatives voting reform`,
          `citizen redistricting commissions`,
          `anti-gerrymandering campaigns`
        ],
        key_statistic: `Michigan voters approved reform by 61-39%, crossing party lines`
      },
      {
        title: `2019: HR1 For the People Act passes House`,
        story: `House Democrats passed comprehensive democracy reforms including automatic voter registration, public campaign financing, redistricting commissions, and anti-corruption measures. The bill represented the most ambitious democracy reform package in decades, addressing voter suppression, dark money, and gerrymandering in one comprehensive approach. While the Senate blocked passage, HR1 provided a detailed roadmap for federal action to expand democratic participation and reduce corruption.`,
        research_topics: [
          `For the People Act`,
          `HR1 2019`,
          `democracy reform legislation`,
          `automatic voter registration`,
          `public campaign financing`,
          `redistricting reform`
        ]
      },
      {
        title: `2020: Record turnout despite restrictions`,
        story: `Organizers, especially in communities of color, overcame voter suppression efforts to achieve the highest voter turnout in over a century. Groups like Fair Fight in Georgia and similar organizations nationwide registered millions of new voters, provided voter education, and helped people navigate complex registration and voting procedures. The massive turnout despite pandemic restrictions and legal challenges proved that sustained organizing and voter education could overcome barriers to democratic participation.`,
        research_topics: [
          `2020 election turnout`,
          `voter mobilization`,
          `Georgia organizing`,
          `Fair Fight Georgia`,
          `pandemic voting`,
          `voter education campaigns`
        ],
        key_statistic: `66.6% turnout—highest since 1900, with 22 million more votes than 2016`
      },
      {
        title: `2020s: Restrictive voting laws expand`,
        story: `Following 2020's high turnout, Republican-controlled states passed waves of new restrictions including stricter ID requirements, fewer ballot drop boxes, shortened early voting periods, and aggressive voter roll purges. These laws disproportionately affected working people, students, elderly citizens, and communities of color—the same groups that had driven record participation. Yet voters in both red and blue states continued pushing back through ballot measures, court challenges, and grassroots organizing that defended voting rights at the local level.`,
        research_topics: [
          `voter ID laws`,
          `drop box limits`,
          `voter roll purges 2020s`,
          `early voting restrictions`,
          `voting law challenges`,
          `ballot measure democracy reforms`
        ],
        key_statistic: `19 states passed 34 laws restricting voting access (2021-2022)`
      }
    ],
    outro: `Rigged democracy isn’t our destiny. We’ve fought back before to defend freedom of religion, equal access to education, and fair elections — and we have to do it again.`
  }
];
