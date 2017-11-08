---
layout: journal
categories: journal notes
tags: 
 - notes
 - cognitive computational neuroscience
title: ccn conference notes
---

josh tenenbaum - the cognitive science perspective: reverse engineering the mind

reverse-engineering approaches: the Marr levels of explanation
1. computational theory
2. algorithmic
3. implementation

cognitive science moves bottom down
neuroscience moves top down
neural networks moving middle out

AI technologies - none of them are real AI
- most salient reason: they don’t get to us to the most fundamental type of intelligence
- our minds are not specially engineered - only programmed by evolution and us
- much success in deep learning in neural networks
    - toolkit best at pattern recognition 
    - intelligence is about more than pattern recognition
    - idea of intelligence as model building
    - the brain has to be a model engine
- intelligence is not just about pattern recognition - it is about modelling the world
building machines learning things to think like people

bridging the gap - far from understanding model-building in the brain and mind as well as we understand pattern recognition, but we are starting to understand some fundamental principles and computations
common sense scene understanding - how can wee see a world of physical objects, their interactions and our own possibilities to act and interact with others - not simply classify patterns in pixels 
rapid model-based learning - how can we learn new concepts from so little experience - often just a single example?

how can we integrate the best ideas for how to think about intelligence computationally?
- probabilistic generative models (and other graphical models)
- symbol-processing architectures (programming languages)
- neural networks (deep convolutional nets, recurrent nets)
 all these tools are coming together

probabilistic programs - probabilistic AI Nature 2015
probmods.org 

“causal texture of the world”

game engines: 
these tools are recapitulated what evolution might build into our brains
the “game engine in your head”
the intuitive physics engine (taglia, hamrick, tenenbaum, PNAS 2013)
battaglia et al, PNAS 2013; Hamrick et al., Cognition 2016

 - gets at this general purpose intelligence
- will this stack of blocks fall? how far? which way? what if one is heavier? what if you bump the table

game physics engine - prediction by simulation

Fischer, Michael, tenenbaum, kantischer, PNAS, 2016; schwettman, et al in progress

overlap with action planning and tool-use networks

physics engines are both event driven and object based

intuitive physics in neural networks
can we treat intuitive physics as a pattern recognition task? PhysNet (Facebook AI; Lerer et al 2016) 
- skeptical about generalization 
physics engine in neural circuits? 
recurrent temporal restricted boltzmann machine (Sutskever & Hinton, 2008)
a recent object-based approach is more promising (Michael Chang et al., 2017 “neural physics engine”, battaglia et al., 2016, “interaction networks”)

the intuitive psychology engine
baker et al, nature, human behaviour 2017; jara-ettinger et al., TiCS 2016
integrating physics and psychology for human action understanding
(tao gato, tibia zhao, chris baker et al)

social interaction: helping and hindering

rapid model-based learning - one-shot learning of simple visual concepts 

conclusions: the computational cognitive science contribution to CCN computational level: beyond pattern recognition to intelligence as model building

algorithmic level: principles of how the mind builds models
- probability inference over symbolic representations
- compositional models of causal processes
- learning at multiple levels of abstraction and learning to learn
- representations based on objects, their relations and interactions

- engineering tools from probabilistic programs and game engines, in addition to probabislitc graphical models and neural networks let us capture these


Nicole Rust - computationally inspired neuroscience

Have you seen this before? 
comparison between memory & visual representation
where & how are those comparisons happening in our brains?

how is image content signaled?

how is visual memory singled?

repetition suppression / adaption = visual memory

fMRI: Turk-Browne et al, 2011: War, Chun & Kuhl (2013)

hypothesis: by changes in IT population spike numbers


Yann LeCun - how does the brain learn so much so quickly?
- the brain learns with an efficiency that none of our machine learning methods can match
- “all of these AI systems we see, none of them is ‘real’ - lol josh
- what is missing? learning paradigms that build (predictive) models of the world through observation and action

supervised learning - with enough power and training samples, it will recognizes instances it has never seen before
deep learning: multiple trained models
multi layer neural nets
convolutional network architecture (LeCun et al. NiPS 1989)

Hubel & Wiesel 

deep conversations nets for object recognition
AlexNet, OverFeat 
it’s deep if it has more than one stage of non-linear feature transformation
Mask R-CNN Results on COCO test set

how many learning algorithms does the brain implement?
how much prior structure does animal learning require?
 - old nature/nurture debate
all of our learning algorithms minimize some sort of objective function
    does the brain minimize an objective function
if it minimizes a function does it do it by evaluating the gradient
if it evaluates a gradient, how does it do it?
how does the brain handle uncertainty in prediction?

“i’m perfectly ready to throw probability theory under the bus”

Obstacles to AI
learning models of the world
learning to reason and plan


Common sense is the ability to fill in the blanks
- predicting any part of the past, present, for future percepts from whatever information is available
- that’s what predictive learning is
- that’s what many people mean by unsupervised learning (does not like that phrase)

unsupervised learning is the “Dark matter” of AI
we build a model of the world through predictive unsupervised learning
this predictive model gives us “common sense”
unsupervised learning discovers regularities in the world

early concept acquisition (after Emmanuel Dupoux)
- babies are so cute
- babies are so cool
- object permanence after 2 months

predict everything you observe - geoff hinton

Rich Sutton: Dyna: an integrated architecture for learning, planning, and reacting


learning predictive models of the world
how to train the world simulator - hardest problem right now
how to form models of the world?

PhysNet - Lerer, Gross, Fergus - convent produces object masks that predict the trajectories of falling blocks
Henaff, Whitney, LeCun 2017 billiards 

dialog through prediction weston et al 2016

predictive models with uncertainty adversarial training
the hard part : prediction under uncertainty


q - how do we design objective functions?
a- we learn them.

aligning the objective with human behaviour
hardwired immutable safeguard object
trainable object that estimates the value function of its human trainer
teach them good from evil


let’s be inspired by nature but not too much
we figured our flapping and wings weren’t necessary
what is the equivalent of aerodynamics thermodynamics for understanding intelligence?
underlying principles behind artificial and natural intelligence

science drives technology but technology 

one key problem in all enterprises is figuring out what’s the piece we’re going to study and what should its scope be
lots of ways to define pieces of mind or intelligence
concern - those methods are much too weak to understand systems in humans
maybe epiphenomena maybe doesn’t represent behaviour
what are we going to do about these profoundly human and unique things
- music, language
- can’t fall back on animal models
take a thought and turn it into a string out of words coming out of your mouth
how do you even make a model of that? 
no idea how to approach that




need: richer set of theoretical frameworks
neural network model based on very old model
we’ve learned a lot since then
neurons are much richer structures

learn a lot from simpler animals

when people say they want to work together - usually there’s some shared goal
what would success even look like?
are we even after the same thing here ???

analogy - invention of steam engine essentially caused the appearance of thermodynamics as an area of physics - it helped us understand a lot of things - design of airplanes caused the emergence of aerodynamics as a field and the principle that underly flight for birds is the same - how he feels when he talks to some neuroscientists
changing the hardware doesn’t change the nature of it

success for neuroscience means characterizing the system i na way that’s reproducible and solid
making a coherent story 
putting out solid pieces of data and offering it to other fields
fairly loose interactions

important to distinguish short-term & long-term success
long-term - understand human intelligence - not just clinical applications but also who we are and how we work
bridging all these things
engineering description that we could build that convinces us that we understand how our minds work
short term success might look very different

models - could there be more convergence?
building models is a way we define our fields’ understanding
what would success look like in a concrete way? we want to build a model of x? 

model interpretability
models whose components need to understanding
not just models that works but we don’t know how it works is not as useful - nicole rust
models that account for less variance but work very well

models that work than models that are explanatory - yann
very important for models to do something useful models
for AI whatever model you build it needs to do something useful and work - to some extent one of the measures of success - convolutional nets is a success for the interaction between between neuroscience and deep learning

“i have no interest in vision. 
i care how you run vision.”
“i don’t actually care as long as it works” - yann


modern model building & data collection in some domain

read a lot about animal behaviour learn lots of math

pick up on biotech evolution & interpreting some of those experiments will require huge computational effort

computation is your friend
learn more math but learn more computer science
don’t think that what seems like the current fashion is going to be the only kind of computation you’re going to need to learn
learn as much computer science

definitely learn a lot of compsci

study and read about human behaviour
introspect for God’s sake
invent better methods for human cognitive neuroscience

try not to get lost in the details
abstract the principles in everything you learn
follow your curiosity
research is intrinsically motivated
ultimately we can think best about stuff we like that resonates with us


A reverse correlation test of computational models of lightness perception - richard murray, minding kim, jason m gold
- how we see shades of grey ?
- greyness of a surface & amount of light

Keynote 1: Mike Shadlen

knowledge as intentional framework rather than representational

knowledge as provisional affordance
knowledge about space is not the representation of where things are it’s about what we might do with that knowledge
replace “where” with “how”
whole brain is a “how” pathway
questions about will I eat this will I explore this further will I come back if I explore this path
point is to how to provide provisional affordance
structured as interrogation
persistence, temporal thickness 

summary
- persistent activity is a substrate for neural computations
- interpretation of neural activity relies on knowledge of the animal’s strategy
- decision model as a model for cognition iff it involves updates over time
- persistent activity is propositional, intentional, not representation
- - organized as provisional affordance
- this structure distinguishes biological from artificial intelligence

