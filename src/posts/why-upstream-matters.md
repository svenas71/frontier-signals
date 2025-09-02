---
layout: layouts/post.njk
title: "Why Upstream Matters"
date: 2025-09-01
type: post
tags: [genomics, strategy]
---

# Why Upstream Matters 

### Bioinformatics leads the Way


The project I am most proud of in my time in academia is sadly also the one that has been the least publicised. It *is* published - but alas only on [bioRxiv](https://www.biorxiv.org/content/10.1101/106344v2). I am not going to delve into the politics of what led up to this being the case - I'd much rather highlight the scientific and intellectual journey leading up to that paper, as well as the learnings one can draw from it.

I had made the decision to enter computational biology at the end of my first Postdoc. By that time, I had spent over a decade in the lab, first doing my masters research in Konstanz, then a PhD in the Biochemistry Department in Oxford, and then working in tissue culture at the Chemistry Department in Cambridge. This took me from looking at enzymes in bacteria during my masters, to transposases in *E.coli* for my PhD, and then cancer research and chemical biology for my postdoc. The list of experimental techniques I used is quite long, each and every one needing training, each technique having their own foibles, tricks to get them working, common caveats, literature to delve into in order to interpret the results etc. It was quite a journey.

It was also quite a hassle - to by fully honest. Lab work is not for the faint of heart. On top of that, running an S2 lab requires additional admin, safety training and paperwork, which was an additional to-do item on an already overflowing calendar. At one point, when another email flew in requesting some more forms to be filled from my side, I had the inclination to storm into the department secreteriat to announce: sure - I will gladly do *your admin* for you, if you in turn run *my gel* for me. Here: it is a sample of radioactively labeled RNA, that degrades if you look at it funny. Just carefully load it into this liquid here, run the gel at 2500V, make sure not to touch anything as you don't want that type of current going through your body. And - oh yes, I nearly forgot - the RNA is from HIV. Feel free, I'll fill in your form.

Snark aside, working in these institutions was a fantastic experience in which I learnt a tremendous amount. Lab work is the fundamental basis of the scientific endeavour in the life sciences, and it will never leave me how much sweat and toil goes into trying to understand and elucidate the causal mechanisms that make up all living things around us. To this day - this remains the focus of my intellectual endeavour and source of curiosity. 

I also learned that there are many ways to achieve this goal - to understand life and living systems. Lab work, increasingly, wasn't the only path. By the mid 2000s, data was accumulating fast and wide that needed analysis and interpretation. My generation of biologists had not been trained in bioinformatics. Yet the data piled in, creating a severe bottleneck on progress. Why not go to where the puck was headed, I asked myself. There was never going to be a time with *as little data* as there was now - it would only increase. 

So, in the last months of my Postdoc, I began teaching myself perl and R. 

It was then during a journal club at the LMB, where I went for my subsequent postdoctoral position, that we discussed a paper by Bas van Steensels group, from the National Cancer Institute of the Netherlands in Amsterdam. It was a groundbreaking paper. Rarely have I been so excited by a single scientific publication. It involved a lot of data, and combined that to a very concise and illuminating outcome - the determination of 'chromatin states' - a superset of functionalities determined by which collection of proteins bound to segments of DNA. It was clear, clean and elegant. It explained a lot of biology that made immediate sense to me. It was beautiful. 

The only downside - and some biologists will crucify me for this - was that the work was done in Drosophila - the fruit fly made famous by the pioneering genetics work done by Thomas Hunt Morgan in the early 20th Century at Columbia University. 

I know how important Drosophila is for biology. Morgans work was so influential that geneticists coined a unit of measurement after him - the centimorgan, describing how linked certain genetic features are, how closely or how frequently they are inherited together. In 1995, Christiane Nüsslein-Volhard had won the Nobel prize for *her* work on Drosophila - awarded jointly to her, Edward Lewis and Eric Wieschaus - adding yet another tally to Drosophila science on the medal counter, after Morgan was awarded his Nobel in 1933, and Hermann J. Muller his in 1946. 

Drosophila was a perfectly sensible and industrious model organism. It was just that I had never worked with the little creatures, and didn't intend to. I had been working with and on bacteria, a bit of cell culture, and most recently yeast. *Saccharomyces cerevisiae*, by it's correct latin name – bakers yeast, also used for brewing beer, hence the name '*cerevisiae*'.

What if - I thought to myself - one could show that this elegant concept of chromatin states was also valid in another organism ? What if *I myself* did it for yeast ? 

I researched the literature and spoke to leading bioinformaticians about the feasibility of my idea. I received hesitant nods of approval, which is the most you can ask for from cautious people who don't readily show enthusiasm, other than for their own ideas. 

A few career twists and turns later, in different surroundings, but still in Cambridge, we got the code to run. Guillaume Filion, the first author on the seminal Cell paper of 2010 had been kind enough to share with me his version of the code, that worked for the Drosophila data they had. Our data came from a different organism, a different lab, was structured differently and had a different scope. Guillaumes data was derived from 53 different proteins, the data we had access to came from 200 proteins. Drosophila has four chromosomes, the much much tinier organism *S.cerevisiae* has sixteen. We had to account for all these differences, while needing to get to grips with maths that had been developed for telecommunications in the mid to late 60s by Andrew Viterbi. The R package we used still uses that nomenclature. 

In the end, after trial, errors, and more of both, the data started to make sense. I remember to this day sitting at home in my office, manually assembling my particular visualisation of the occupancy plots that I had devised, when I started to see a new pattern arise. Something was different here. 

I need to step back and explain another key difference and advantage our experimental data had - and I also need to acknowledge the source of the data - for at that time, as you will remember, I was happy not to have to set foot in a lab ever again. The data came from a previous publication from the lab of Frank Pugh at Penn State University. His lab had done the Herculean work of 200 experiments, in duplicate, at two different temperatures, that we now used for our analysis.

As a side note - the cost of the consumables for these experiments alone was near prohibitive. A single run out of the 800 shown in the paper, could amount to several hundred dollars in reagents. Add to that the cost of the measurement devices, Affymetrix chips, which were around 500 $ per chip, and you were quickly in the million dollar range for such an experiment.

Back at my desk, looking at the image emerging infront of me, something struck me as unusual. We had always been taught that the most important proteins for gene regulation were a class of proteins called 'transcription factors'. From my undergraduate days, all eyes were on these factors. They determined - so was common understanding - what would happen next in a given cellular context. If cells encountered a particular sugar in their surrounding, say, lactose, otherwise known as milk sugar, bacteria would use CAP, or the Catabolite Activator Protein, to dislodge the Lac Repressor, and therefore activate the genes necessary for the use of Lactose. Similar functions exist in all other organisms, albeit with different names: Gal4 activates galactose metabolism in *S. cerevisiae*, ChREBP is the Carbohydrate Response Element Binding Protein found in mammals. Variations of this theme exist for different metabolites, be they fatty acids or other vital signals such as hormones or responses to diseases that activate the immune system. In each case and everywhere, transcription factors are the levers that set things in motion. 

It was on exactly the work on this type of proteins that won Nüsslein-Volhard, Lewis and Weischaus their Nobel Prize. Their questions weren't on metabolism. What they found were again a set of transcription factors that determined how the fly body plan is set up during embryonic development. Years later, John Gurdon's work, together with that of Shinya Yamanaka was again so central, that both were awarded a Nobel Prize in 2012 for their discovery how the transcription factors Oct4, Sox2, Klf4 and c-Myc can reset cell identity and turn normal cells into de-novo embryonic cells. 

In short, transcription factors was where it was at. They called the shots, they determined what cells did, how they reacted to sugars, to pathogens, how a body plan was followed or even served as fountains of youth, turning an aged cell back into an embryonic form. 

Yet, what I was seeing on my screen looked different. Yeast doesn't do development, there are no 'infant' or embryonic yeast cells. They don't have an immune system, they are just one single cell. They do, though, react to sugars, and, crucially, to heat. Normally, these cells prefer moderate temperatures of around 20 - 25°C at which they grow most efficiently. That is their preferred environment, and this temperature is what is used when fermenting beers, most specifically 'top fermenting beers', where temperatures between 15 and 24°C are used. 

For yeast, a temperature of 37°C is high - too high, so much so that in biological terms it is called a 'heat shock'. The cells inner behaviour changes dramatically, other genes get activated to counter the shock, different pathways get turned on. It is such a marked change, that a heat shock is often used in order to study cellular responses and genetic mechanisms. 

This is exactly the experiment Frank Pugh did, when he followed the fate of 200 proteins and how they would bind to DNA in the paper I mentioned above. This was the data we were using. 

Canonical genetic theory would tell you that transcription factors were key. I looked at the position of transcription factors in the data. They were there where they were supposed to be. That seemed in order: during normal conditions, 'normal' genes were active, and that is exactly where I saw the transcription factors to be bound: ahead of the normal, non-heat shock genes. All was good. 

What about during heat shock ? Again, the same, expected pattern was visible: heat shock genes were active, and heat shock transcription factors (or TFs, for short) were binding to these genes, in order for them to be active. The TFs were doing their job, telling the cell what to do and when. The data matched the conventional wisdom.

I was relieved, as this meant that all our number crunching, our calculations, algorithms and use of what is called 'Hidden Markov Models' seemed to be in order. Internal consistency is a key way to validate your own work. I was on a good path.

Another reason why the heat shock system is such an often used one is that there are basically only two states for the cell to be in - when it comes to these set of genes: either you are in heat shock, or you are not. It is nearly a perfect binary response. This is different to sugars - for which there are many different ones, if you look close enough: glucose is different from galactose, which is different from lactose, maltose, fructose, arabinose, etc. The list is long. There is not a central 'sugar - no sugar' switch, as there is for heat shock. Our data showed clear signs of this switch, again as expected, just as decades of work would have tell you.

What was completely unexpected, though, was that the cell seemed to 'pre-empt' the response. Not by TF's, they were 'in the hear and now'. During heat shock, the TF's bound to the heat shock genes, and during non-heat shock, they bound to the genes most active during normal conditions - mostly cell growth genes. 

A different set of proteins behaved in the exact opposite way, though. Some of these proteins where 'lesser known' ones. But they all belonged to one family of proteins. And - to my utmost astonishment, the main protein complex necessary for nearly *all gene function*, RNA polymerase II (RNA Pol II), behaved in the same strange, nearly adversarial way. This was totally unexpected and would have been thought to be completely against 'dogma' - or against conventional wisdom - to use less controversial phrasing. This is because the function of a TF is to 'tell' RNA Pol II where to bind, and thereby where to be active. The canonical causal chain was: signal (heat or sugar or ...) -> TF -> RNA Pol II.

Not so in the data I was looking at on my screen. RNA Pol II was exactly *not* there where the action was. During normal conditions, it was binding in front of the heat shock genes, and during heat shock, it was binding to the growth genes. This was not canon.

I had to double check my data. Triple check. I was a novice bioinformatician, having been trained in this field for less than two years, mostly self-taught, going through hundreds of lines of code. Surely, a mistake on my side was entirely possible. 

It turns out - there was no mistake. What my data showed was that a class of proteins called Chromatin Remodellers, were indeed poised, ready for action, *before* a signal came in. I had not expected this. I had never been taught this. This wasn't in textbooks, this wasn't in the literature, this was new. I sat at the screen and looked at it in wonderment. Here I was, in my little office at our home, cramped and cluttered as it was, seeing something that science hadn't seen before. I was stumped. Nearly irritated. Why had nobody seen this ? Why hadn't anyone told me this ? It was a paradoxical situation. I was elated at my discovery, and, quixotically, annoyed at it at the same time. We are taught so much that truth comes from others, that this moment didn't fit the mold. There was nobody to tell me this - because I had made the discovery ! Even for a 'lifelong' scientist - this moment was jarring. 

What ensued next was the normal politics of science. Discoveries are made every day, by hundreds of scientists, all vying for recognition, importance, influence, airtime and resources (read - money). My discovery was one of many. It was competing with 'much more important ones' - with more pressing ones, more meaningful ones. The weeks and months that followed did nothing to enhance my view of this side of science. The politics of publishing, of going either with or against canonical thinking, with or against the views of those who hold the reigns of human influence most strongly. My story is still there, in print, and has been downloaded over 1500 times according to the stats on biorxiv. Many peers though, especially the peer reviewers of our manuscript, weren't as thrilled or as convinced as I was. The paper was never accepted in a mainstream journal. Bigger rifts within the funding bodies that upheld our institute were at work, which led to our whole department being shuttered down, in the midst of us trying to find a journal that would publish our findings. Eventually, I ran out of patience, money and good will and had to find another job to keep my family afloat. Industry it was then. Science will survive without me. 

Years later, I attended a conference in Cambridge in which the star lecture was given by a young professor from Harvard. Her lab was centered around the new and highly important function of an as yet under-investigated class of proteins: they have roles in development, disease and even cancer: Chromatin Remodellers.

This opens up new mechanistic insights into disease, in turn giving the ability to identify new drug targets for intervention. It was a great presentation, one that struck a strong chord with me. Upstream is where it was at. This is where one could change the response of cells to signals, if one chose to. 

I smiled. What I had once seen alone in my home office now had centre stage. Perhaps it was fitting that I had glimpsed it ahead of its time. Upstream always matters.











