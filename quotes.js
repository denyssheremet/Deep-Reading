

var quotes = [

]

function stringToList(st) {
    let result = st.split("\n").slice(1, -1);
    for (let i = 0; i < result.length; i++) {
        let res = result[i].replace('•', '').trim();
        result[i] = res;
    }

    let i = result.length;
    while (i--) {
        if (result[i] === "") {
            result.splice(result.indexOf(""), 1);
        }
    }


    return result;
}

function prepareText(text) {
    text = stringToList(text);
    let j = 0;
    while (j < text.length) {
        text[j] = text[j]
            .replaceAll("’", "'")
            .replaceAll("”", '"')
            .replaceAll("“", '"')
            .replaceAll("¢", 'ct')
            .replaceAll("—", '-')
            .replaceAll("?", '?')
            .replaceAll("(", '')
            .replaceAll(")", '')
            .replaceAll("  ", ' ')
            .replaceAll("…", '...')
            .replaceAll("‘", "'")
            .replaceAll("–", '-')
        j++;
    }
    j = 0
    while (j < text.length) {
        while (text[j][text[j].length - 1].match(/[a-z]/i) && j + 1 < text.length) {
            letter = text[j][text[j].length - 1]
            text[j] = text[j] + " " + text[j + 1];
            text.splice(j + 1, 1);
        }
        // // repeat each word 3 times
        // t = text[j].split(" ");
        // let k = 0;
        // let w = [];
        // while (k < t.length) {
        //     w.push(t[k]);
        //     w.push(t[k]);
        //     w.push(t[k]);
        //     k++
        // }
        // text[j] = w.join(" ")
        //     .replace(/[^A-Za-z ]/g, ''); // remove all interpunction

        j++;
    }
    return text;
}


var speeches = [
    [
        `
        I am honored to be with you today at your commencement from one of the finest universities in the world. I never graduated from college. Truth be told, this is the closest I’ve ever gotten to a college graduation. Today I want to tell you three stories from my life. That’s it. No big deal. Just three stories.

I dropped out of Reed College after the first 6 months, but then stayed around as a drop-in for another 18 months or so before I really quit. So why did I drop out?

It started before I was born. My biological mother was a young, unwed college graduate student, and she decided to put me up for adoption. She felt very strongly that I should be adopted by college graduates, so everything was all set for me to be adopted at birth by a lawyer and his wife. 

Except that when I popped out they decided at the last minute that they really wanted a girl. So my parents, who were on a waiting list, got a call in the middle of the night asking: “We have an unexpected baby boy; do you want him?” They said: “Of course.” My biological mother later found out that my mother had never graduated from college and that my father had never graduated from high school. She refused to sign the final adoption papers. She only relented a few months later when my parents promised that I would someday go to college.

And 17 years later I did go to college. But I naively chose a college that was almost as expensive as Stanford, and all of my working-class parents’ savings were being spent on my college tuition. After six months, I couldn’t see the value in it. I had no idea what I wanted to do with my life and no idea how college was going to help me figure it out. And here I was spending all of the money my parents had saved their entire life. So I decided to drop out and trust that it would all work out OK. It was pretty scary at the time, but looking back it was one of the best decisions I ever made. The minute I dropped out I could stop taking the required classes that didn’t interest me, and begin dropping in on the ones that looked interesting.

It wasn’t all romantic. I didn’t have a dorm room, so I slept on the floor in friends’ rooms, I returned Coke bottles for the 5¢ deposits to buy food with, and I would walk the 7 miles across town every Sunday night to get one good meal a week at the Hare Krishna temple. I loved it. And much of what I stumbled into by following my curiosity and intuition turned out to be priceless later on. Let me give you one example:

Reed College at that time offered perhaps the best calligraphy instruction in the country. Throughout the campus every poster, every label on every drawer, was beautifully hand calligraphed. Because I had dropped out and didn’t have to take the normal classes, I decided to take a calligraphy class to learn how to do this. I learned about serif and sans serif typefaces, about varying the amount of space between different letter combinations, about what makes great typography great. It was beautiful, historical, artistically subtle in a way that science can’t capture, and I found it fascinating.

None of this had even a hope of any practical application in my life. But 10 years later, when we were designing the first Macintosh computer, it all came back to me. And we designed it all into the Mac. It was the first computer with beautiful typography. If I had never dropped in on that single course in college, the Mac would have never had multiple typefaces or proportionally spaced fonts. And since Windows just copied the Mac, it’s likely that no personal computer would have them. If I had never dropped out, I would have never dropped in on this calligraphy class, and personal computers might not have the wonderful typography that they do. Of course it was impossible to connect the dots looking forward when I was in college. But it was very, very clear looking backward 10 years later.

Again, you can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.

My second story is about love and loss.

I was lucky — I found what I loved to do early in life. Woz and I started Apple in my parents’ garage when I was 20. We worked hard, and in 10 years Apple had grown from just the two of us in a garage into a $2 billion company with over 4,000 employees. We had just released our finest creation — the Macintosh — a year earlier, and I had just turned 30. And then I got fired. How can you get fired from a company you started? Well, as Apple grew we hired someone who I thought was very talented to run the company with me, and for the first year or so things went well. But then our visions of the future began to diverge and eventually we had a falling out. When we did, our Board of Directors sided with him. So at 30 I was out. And very publicly out. What had been the focus of my entire adult life was gone, and it was devastating.

I really didn’t know what to do for a few months. I felt that I had let the previous generation of entrepreneurs down — that I had dropped the baton as it was being passed to me. I met with David Packard and Bob Noyce and tried to apologize for screwing up so badly. I was a very public failure, and I even thought about running away from the valley. But something slowly began to dawn on me — I still loved what I did. The turn of events at Apple had not changed that one bit. I had been rejected, but I was still in love. And so I decided to start over.

I didn’t see it then, but it turned out that getting fired from Apple was the best thing that could have ever happened to me. The heaviness of being successful was replaced by the lightness of being a beginner again, less sure about everything. It freed me to enter one of the most creative periods of my life.

During the next five years, I started a company named NeXT, another company named Pixar, and fell in love with an amazing woman who would become my wife. Pixar went on to create the world’s first computer animated feature film, Toy Story, and is now the most successful animation studio in the world. In a remarkable turn of events, Apple bought NeXT, I returned to Apple, and the technology we developed at NeXT is at the heart of Apple’s current renaissance. And Laurene and I have a wonderful family together.

I’m pretty sure none of this would have happened if I hadn’t been fired from Apple. It was awful tasting medicine, but I guess the patient needed it. Sometimes life hits you in the head with a brick. Don’t lose faith. I’m convinced that the only thing that kept me going was that I loved what I did. You’ve got to find what you love. And that is as true for your work as it is for your lovers. Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it. And, like any great relationship, it just gets better and better as the years roll on. So keep looking until you find it. Don’t settle.

My third story is about death.

When I was 17, I read a quote that went something like: “If you live each day as if it was your last, someday you’ll most certainly be right.” It made an impression on me, and since then, for the past 33 years, I have looked in the mirror every morning and asked myself: “If today were the last day of my life, would I want to do what I am about to do today?” And whenever the answer has been “No” for too many days in a row, I know I need to change something.

Remembering that I’ll be dead soon is the most important tool I’ve ever encountered to help me make the big choices in life. Because almost everything — all external expectations, all pride, all fear of embarrassment or failure — these things just fall away in the face of death, leaving only what is truly important. Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.

About a year ago I was diagnosed with cancer. I had a scan at 7:30 in the morning, and it clearly showed a tumor on my pancreas. I didn’t even know what a pancreas was. The doctors told me this was almost certainly a type of cancer that is incurable, and that I should expect to live no longer than three to six months. My doctor advised me to go home and get my affairs in order, which is doctor’s code for prepare to die. It means to try to tell your kids everything you thought you’d have the next 10 years to tell them in just a few months. It means to make sure everything is buttoned up so that it will be as easy as possible for your family. It means to say your goodbyes.

I lived with that diagnosis all day. Later that evening I had a biopsy, where they stuck an endoscope down my throat, through my stomach and into my intestines, put a needle into my pancreas and got a few cells from the tumor. I was sedated, but my wife, who was there, told me that when they viewed the cells under a microscope the doctors started crying because it turned out to be a very rare form of pancreatic cancer that is curable with surgery. I had the surgery and I’m fine now.

This was the closest I’ve been to facing death, and I hope it’s the closest I get for a few more decades. Having lived through it, I can now say this to you with a bit more certainty than when death was a useful but purely intellectual concept:

No one wants to die. Even people who want to go to heaven don’t want to die to get there. And yet death is the destination we all share. No one has ever escaped it. And that is as it should be, because Death is very likely the single best invention of Life. It is Life’s change agent. It clears out the old to make way for the new. Right now the new is you, but someday not too long from now, you will gradually become the old and be cleared away. Sorry to be so dramatic, but it is quite true.

Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma — which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.

When I was young, there was an amazing publication called The Whole Earth Catalog, which was one of the bibles of my generation. It was created by a fellow named Stewart Brand not far from here in Menlo Park, and he brought it to life with his poetic touch. This was in the late 1960s, before personal computers and desktop publishing, so it was all made with typewriters, scissors and Polaroid cameras. It was sort of like Google in paperback form, 35 years before Google came along: It was idealistic, and overflowing with neat tools and great notions.

Stewart and his team put out several issues of The Whole Earth Catalog, and then when it had run its course, they put out a final issue. It was the mid-1970s, and I was your age. On the back cover of their final issue was a photograph of an early morning country road, the kind you might find yourself hitchhiking on if you were so adventurous. Beneath it were the words: “Stay Hungry. Stay Foolish.” It was their farewell message as they signed off. Stay Hungry. Stay Foolish. And I have always wished that for myself. And now, as you graduate to begin anew, I wish that for you.

Stay Hungry. Stay Foolish.

Thank you all very much.
        `
        , "Steve Jobs, Stanford Commencement Address, 2005"
    ],
    [
        `
    What are you sitting down for? I was going to milk that for a while. You guys can stretch that out
in the post, make that longer in the edit. Thank you all.
I brought one of my paintings, I hope... It’s not one of my bigger pieces, so you might want to
move up front to get a good look at it.
Faculty, friends...grad class of 2014 and all the dead baseball players coming out of the corn to
be with us today. After the harvest there is no place for them to hide, the fields are empty. There
is no cover there.
I’m here to plant a seed today, a seed that will inspire you to move forward in life with
enthusiastic hearts and a clear sense of wholeness. The question is will that seed have a
chance to take root? Or will I be sued by Monsanto and be forced to use their seed, which may
not be totally ayurvedic.
Excuse me if I seem a little bit low energy tonight, today, whatever this is? I slept with my head
to the North last night. Oh man, oh man, you know how that is, right kids? Yeah, woke up right in
the middle of pitta, couldn’t get back to sleep until vata rode around? Crazy, oh, woo, whooo...
But I didn’t freak out. I used that time to eat a large meal, connect with someone special on
Tinder.
Because life doesn’t happen to you, it happens for you. How do I know this? I don’t, but I’m
making sound and that’s the important thing. That’s what I’m here to do.
Sometimes I think, that’s the only thing that is important, you know. It’s just letting each other
know that we’re here, reminding each other that we’re part of a larger self.
I used to think that Jim Carrey was all that I was, just a flickering light, a dancing shadow.
The great nothing masquerading as something you can name, seeking shelter in caves and
foxholes dug out hastily.
An archer searching for his target in the mirror, wounded only by my own arrows, begging to be
enslaved, pleading for my chains, blinded by longing and tripping over paradise.
You didn’t think I could be serious, did ya? I don’t think you understand who you’re dealing with.
I have no limits. I cannot be contained because I’m the container. You can’t contain the
container, man. You can’t contain the container.

I used to believe that whoever I was ended at the edge of my skin, that I’d been given this little
vehicle called the body from which to experience creation, as though I couldn’t have asked for a
sportier model. It was after all a loaner and would have to be returned.
Then I learned that everything outside the vehicle was part of me, too. And now I drive a
convertible. Yeah, man, top down, wind in my hair, woo.
I am elated and truly, truly, truly excited to be present and fully connected to you at this
important moment in your journey. I hope you’re ready to open the roof and take it all in?
Okay, 4 more years then? They’re obviously not ready.
I want to thank the trustees, the adminstrators, the faculty of MUM for creating an institution
worthy of Maharishi’s ideals of education. A place that teaches knowledge and experience, the
knowledge and experience necessary to be productive in life as well as enabling the students
through transcendental meditation and ancient Vedic knowledge to slack off twice a day for an
hour and a half.
Don’t think you’re fooling me, but I guess it has some benefits. It does allow you to separate
what you truly are and what’s real from the stories that run through your head.
You have given them the ability to walk behind the mind’s elaborate set decoration and to see,
that there is a huge difference between a dog that is going to eat you in your mind and an actual
dog that is going to eat you.
That may sound like no big deal, but many don’t learn that distinction, and they spend a great
deal of their lives living in fight or flight response.
I’d like to acknowledge all of you wonderful parents. Way to go, what a fantastic job you have
done for your tireless dedication, your love, your support. Most of all for the attention that you
paid to your children.
I have a saying: Beware of the unloved, because they will eventually hurt themselves or me.
But when I look at this group here, I feel really safe, l do. I’m just going to say it: My room is not
locked, my room is not locked.
No doubt some of you will turn out to be crooks, but white collar stuff, Wall Street, you know,
that type of thing. You know crimes committed by people with self-esteem. Stuff parents can still
be proud of in a weird way.
And to the graduating class of 2017 minus 3...you didn’t let me finish, congratulations. Yes, give
yourself a round of applause, please. You are the vanguard of knowledge and consciousness, a
new wave in a vast ocean of possibilities.
On the other side of that door, there is a world starving for new ideas, new leadership.
I’ve been out there for 30 years. She’s a wild cat, oh, she’ll rub up against your leg and purr until
you pick her up and start petting her, and then out of nowhere she’ll swat you in the face. It can
be rough out there, but that’s okay, because there’s soft serve ice cream with sprinkles. I guess
that’s what I’m really trying to say here today. Sometimes it’s okay to eat your feelings.

Now fear is going to be a player in your life, but you get to decide how much.
You could spend your whole life imagining ghosts, worrying about the pathway to the future, but
all there will ever be is what’s happening here, and the decisions we make in this moment,
which are based in either love or fear.
So many of us choose our path out of fear disguised as practicality.
What we really want seems impossibly out of reach and ridiculous to expect, so we never dare
to ask the universe for it.
I’m saying: I’m the proof, that you can ask the universe for it - please - and if it doesn’t happen
for you right away, it’s only because the universe is so busy fulfilling my order...party size!
My father could have been a great comedian, but he didn’t believe that that was possible for
him. So he made a conservative choice instead. He got a safe job as an accountant. And when I
was 12 years old, he was let go from that safe job, and our family had to do whatever we could
to survive.
I learned many great lessons from my father, not the least of which was that you can fail at what
you don’t want, so you might as well take a chance on doing what you love.
It’s not the only thing he taught me though, you know. I watched the effect of my father’s love
and humor and how it altered the world around me and I thought: That’s something to do, that’s
something worth my time.
It wasn’t long until I started acting up. You know poeple would come over to the house and
they’d be greeted by a 7 year old throwing himself down a large flight of stairs.
They’d say: What happened, and I’d say: I don’t know, let’s check the replay. I’d go back to the
top of the stairs and come back down in slow motion. It was a very strange household. My
father used to brag that I wasn’t a ham, I was the whole pig.
He treated my talent as if it was his second chance. When I was about 28 after a decade as a
professional comedian, I realized one night in LA that the purpose of my life had always been to
free people from concern, just like my dad.
And when I realized this, I dubbed my new devotion “The Church of Freedom From Concern” -
the Church of FFC. And I dedicated myself to that ministry.
What’s yours? How will you serve the world? What did they need that your talent could provide?
That’s all you have to figure out.
As someone who’s done what you’re about to go and do, I can tell you from experience, the
effect you have on others is the most valuable currency there is, because everything you gain in
life will rot and fall apart, and all that is left of you is what was in your heart.

My choosing to free people from concern got me from to top of the mountain. Look where I am,
look what I get to do everywhere I go. I’m going to get emotional, because when I tap into this, it
really is extraordinary to me.
I did something that made people present their best selves to me wherever I go. I am at the top
of the mountain. And I was. And the only one I hadn’t freed was myself, and that’s where my
search for identity deepened.
I wondered who I’d be without my fame? Who would I be if I said things that people didn’t want
to hear? Or if I defied their expectations of me? What if I showed up to the party without my
Mardi Gras bat mask and refused to flash my breasts for a handful of beads? I’ll give you a
moment to wipe that image out of your mind.
But you guys are so ahead of the game. You already know who you are.
And that peace, that peace that we’re after lies somewhere beyond personality, beyond the
perception of others, beyond invention and disguise, even beyond effort itself.
You can join the game, fight the wars, play with the form all you want, but to find real peace, you
have to let the armor go.
Your need for acceptance can make you invisible in this world.
Don’t let anything stand in the way of the light that shines through this form. Risk being seen in
all of your glory.
(Painting unveiled.) It’s not big enough. This painting is big for a reason. It’s called “High
Visibility.” It’s about picking up the light and daring to be seen.
Here is the tricky part, everyone is attracted to the light.
The Party Host, up at the top, who thinks unconsciousness is bliss, and is always offering to
drink from the bottles that empty you.
Misery, below her, despises the light, can’t stand when you’re doing well, wishes you nothing
but the worst.
The Queen of Diamonds, under him, needs a King to build her house of cards.
And the Hollow One, down bottom there, will cling to your leg and say: Please don’t leave me
behind for I have abandoned myself.
Even those who are closest to you and most in love with you, the people you love most in the
world will find clarity confronting you at times.
This painting took me thousands of hours to complete, and when I was finished (applause)
thank you. That’s thousands of hours. Yes, I’ll never get them back, I’ll never get them back.

I worked on this so long. It was weeks and weeks. Like a madman, I was alone on a scaffolding.
And when I was finished, one of my friends said: This would be a cool black lit painting, so I
started over - wooo. Welcome to Burning Man.
Some pretty crazy characters up there, but better up there than in here (points to head).
You know, painting is one of the ways I free myself from concern. It’s a way to stop the world
through total mental, physical and spiritual involvement.
But even with that comes a feeling of divine dissatisfaction.
Because ultimately, we’re not the avatars we create. We’re not the pictures on the film stock.
We’re the light that shines through. All else is just smoke and mirrors, distracting but not truly
compelling.
I’ve often said that I wish people would realize all their dreams, wealth and fame, so that they
could see, that it’s not where you’re going to find your sense of completion.
Like many of you, I was concerned about going out into the world and doing something bigger
than myself until someone smarter than myself made me realize, that there is nothing bigger
than myself.
My soul is not contained within the limits of my body. My body is contained within the
limitlessness of my soul. One unified field.
One unified field dancing for no particular reason, except maybe to comfort and entertain itself.
As that shift happens in you, you’ll be feeling the world, you’ll be felt by it, you’ll be embraced by
it.
Now I’m always at the beginning, I have a reset button, and I ride that button constantly.
Once that button is functioning in your life, there is no story that the mind can create that will be
as compelling. The imagination is always manufacturing scenarios, both good and bad, and the
ego tries to keep you trapped in the multiplex of the mind.
Our eyes are not viewers, they’re also projectors that are running a second story over the
picture, that we see in front of us all the time.
Fear is writing that script and the working title is “I’ll never be enough.”
Now you’re going to look at a person like me and say: How could we ever hope to reach those
kind of heights, Jim? How can we make a painting that’s too big for our home? How do you fly
so high without a special breathing apparatus?
This is the voice of the ego, and if you listen to it, there will always be someone who is doing
better than you.
No matter what you gain, ego will not let you rest. It will tell you that you cannot stop until you’ve
left an indelible mark on the earth, until you’ve achieved immortality.

How tricky is this ego, that it would tempt us with something that we already possess?
So I just want you to relax, you know, that’s my job. Relax and dream up a good life.
I had a substitute teacher from Ireland in second grade, that told my class during morning
prayer that when she wanted something, anything at all, she prays for it and promises
something in return and she always gets what she wants.
Well, I’m sitting at the back of the classroom, you know, thinking my family can’t afford a bike.
So I went home and I prayed for one, and I promised I would recite the rosary every night in
exchange - broke it, broke that promise.
But two weeks I got home from school to find a brand new Mustang bike with a banana seat and
Easy rider handlebars, yeah! From fool to cool.
My family informed me that I’d won the bike in a raffle that a friend of mine had entered my
name in without my knowledge, whatsoever, so that type of thing has been happening to me
ever since.
As far as I can tell, it’s just about letting the universe know what you want and working toward it,
while letting go of how it comes to pass.
Your job is not to figure out how it’s going to happen for you, but to open the door in your head.
And when the door opens in real life, just walk through it.
And don’t worry if you miss your cue, because there’s always door opening. They keep opening.
And when I say: Life doesn’t happen to you, it happens for you. I really don’t know if that is true.
I’m just making a conscious choice to perceive challenges as something beneficial that I can
deal with anything in a productive way. You’ll come up with your own style. That’s part of the fun.
Oh, and why not take a chance on faith as well? Take a chance on faith. Not religion, but faith.
Not hope, but faith.
I don’t believe in hope. Hope is a beggar. Hope walks through the fire, and faith leaps over it.
You are ready and able to do beautiful things in this world, and after you walk through those
doors today, you will only ever have two choices: love or fear.
Choose love, and don’t ever let fear turn you against your playful heart.
Thank you so much. I’m so honored. I love you.
    `
        , "Jim Carrey, Commencement Speech at Maharishi University of Management, 2014"
    ],

    [
        `
My neighbor introduced me to The Office back in 2005. Since then, I’ve watched every episode of both the British and American versions. I’ve watched the show obsessively because I’ve been unable to figure out what makes it so devastatingly effective, and elevates it so far above the likes of Dilbert and Office Space.

Until now, that is. Now, after four years, I’ve finally figured the show out.  The Office is not a random series of cynical gags aimed at momentarily alleviating the existential despair of low-level grunts. It is a fully realized theory of management that falsifies 83.8% of the business section of the bookstore.  The theory begins with Hugh MacLeod’s well-known cartoon, Company Hierarchy (below), and its cornerstone is something I will call The Gervais Principle, which supersedes both the Peter Principle and its successor, The Dilbert Principle. Outside of the comic aisle, the only major and significant works consistent with the Gervais Principle are The Organization Man and Images of Organization.

I’ll need to lay just a little bit of groundwork (lest you think this whole post is a riff based on cartoons) before I can get to the principle and my interpretation of The Office. I’ll be basing this entire article on the American version of the show, which is more fully developed than the original British version, though the original is perhaps more satisfyingly bleak. Keep in mind that this is an interpretation of The Office as management science; the truth in the art.  Literary/artistic critics don’t really seem to get it. I’ll have some passing comments to offer on the comedy and art of it all, but this is primarily about the truths revealed by the show, pursued with Dwight-like earnestness.

From The Whyte School to The Gervais Principle

Hugh MacLeod’s cartoon is a pitch-perfect symbol of an unorthodox school of management  based on the axiom that organizations don’t suffer pathologies; they are intrinsically pathological constructs.  Idealized organizations are not perfect. They are perfectly pathological.  So while most management literature is about striving relentlessly towards an ideal by executing organization theories completely, this school, which I’ll call the Whyte school, would recommend that you do the bare minimum organizing to prevent chaos, and then stop. Let a natural, if declawed, individualist Darwinism operate beyond that point. The result is the MacLeod hierarchy. It may be horrible, but like democracy, it is the best you can do.

The Sociopath (capitalized) layer comprises the Darwinian/Protestant Ethic will-to-power types who drive an organization to function despite itself. The Clueless layer is what Whyte called the “Organization Man,” but the archetype inhabiting the middle has evolved a good deal since Whyte wrote his book (in the fifties).  The Losers  are not social losers (as in the opposite of “cool”), but people who have struck bad bargains economically – giving up capitalist striving for steady paychecks. I am not making this connection up. Consider this passage from OM:

Of all organization men, the true executive is the one who remains most suspicious of The Organization. If there is one thing that characterizes him, it is a fierce desire to control his own destiny and, deep down, he resents yielding that control to The Organization, no matter how velvety its grip… he wants to dominate, not be dominated…Many people from the great reaches of middle management can become true believers in The Organization…But the most able are not vouchsafed this solace.

Back then, Whyte was extremely pessimistic. He saw signs that in the struggle for dominance between the Sociopaths (whom he admired as the ones actually making the organization effective despite itself) and the middle-management Organization Man, the latter was winning. He was wrong, but not in the way you’d think. The Sociopaths defeated the Organization Men and turned them into The Clueless not by reforming the organization, but by creating a meta-culture of Darwinism in the economy: one based on job-hopping, mergers, acquisitions, layoffs, cataclysmic reorganizations, outsourcing, unforgiving start-up ecosystems, and brutal corporate raiding. In this terrifying meta-world of the Titans, the Organization Man became the Clueless Man. Today, any time an organization grows too brittle, bureaucratic and disconnected from reality, it is simply killed, torn apart and cannibalized, rather than reformed. The result is the modern creative-destructive life cycle of the firm, which I’ll call the MacLeod Life Cycle.

A Sociopath with an idea recruits just enough Losers to kick off the cycle. As it grows it requires a Clueless layer to turn it into a controlled reaction rather than a runaway explosion. Eventually, as value hits diminishing returns, both the Sociopaths and Losers make their exits, and the Clueless start to dominate. Finally, the hollow brittle shell collapses on itself and anything of value is recycled by the sociopaths according to meta-firm logic.

MacLeod’s Loser layer had me puzzled for a long time, because I was interpreting it in cultural terms: the kind of person you call a “loser.” While some may be losers in that sense too, they are primarily losers in the economic sense: those who have, for various reasons, made (or been forced to make) a bad economic bargain. They’ve given up some potential for long-term economic liberty (as capitalists) for short-term economic stability. Traded freedom for a paycheck in short. They actually produce, but are not compensated in proportion to the value they create (since their compensation is set by Sociopaths operating under conditions of serious moral hazard). They mortgage their lives away, and hope to die before their money runs out. The good news is that Losers have two ways out, which we’ll get to later: turning Sociopath or turning into bare-minimum performers. The Losers destined for cluelessness do not have a choice.

Based on the MacLeod lifecycle, we can also separate the three layers based on the timing of their entry and exit into organizations. The Sociopaths enter and exit organizations at will, at any stage, and do whatever it takes to come out on top. The contribute creativity in early stages of a organization’s life, neurotic leadership in the middle stages, and cold-bloodedness in the later stages,  where they drive decisions like mergers, acquisitions and layoffs that others are too scared or too compassionate to drive. They are also the ones capable of equally impersonally exploiting a young idea for growth in the beginning, killing one good idea to concentrate resources on another at maturity, and milking an end-of-life  idea through harvest-and-exit market strategies.

The Losers like to feel good about their lives. They are the happiness seekers, rather than will-to-power players, and enter and exit reactively, in response to the meta-Darwinian trends in the economy. But they have no more loyalty to the firm than the Sociopaths. They do have a loyalty to individual people, and a commitment to finding fulfillment through work when they can, and coasting when they cannot.

The Clueless are the ones who lack the competence to circulate freely through the economy (unlike Sociopaths and Losers), and build up a perverse sense of loyalty to the firm, even when events make it abundantly clear that the firm is not loyal to them. To sustain themselves, they must be capable of fashioning elaborate delusions based on idealized notions of the firm — the perfectly pathological entities we mentioned. Unless squeezed out by forces they cannot resist, they hang on as long as possible, long after both Sociopaths and Losers have left (in Douglas Adams’ vicious history of our planet, humanity was founded by a spaceship full of the Clueless, sent here by scheming Sociopaths). When cast adrift in the open ocean, they are the ones most likely to be utterly destroyed.

Which brings us to our main idea. How both the pyramid and its lifecycle are animated. The dynamics are governed by the Newton’s Law of organizations: the Gervais Principle.

The Gervais Principle and Its Consequences

The Gervais Principle is this:

Sociopaths, in their own best interests, knowingly promote over-performing losers into middle-management, groom under-performing losers into sociopaths, and leave the average bare-minimum-effort losers to fend for themselves.

The Gervais principle differs from the Peter Principle, which it superficially resembles. The Peter Principle states that all people are promoted to the level of their incompetence. It is based on the assumption that future promotions are based on past performance. The Peter Principle is wrong for the simple reason that executives aren’t that stupid, and because there isn’t that much room in an upward-narrowing pyramid. They know what it takes for a promotion candidate to perform at the to level. So if they are promoting people beyond their competence anyway, under conditions of opportunity scarcity, there must be a good reason.

Scott Adams, seeing a different flaw in the Peter Principle, proposed the Dilbert Principle: that companies tend to systematically promote their least-competent employees to middle management to limit the damage they can do. This again is untrue. The Gervais principle predicts the exact opposite: that the most competent ones will be promoted to middle management. Michael Scott was a star salesman before he become a Clueless middle manager. The least competent employees (but not all of them — only certain enlightened incompetents) will be promoted not to middle management, but fast-tracked through to senior management. To the Sociopath level.

And in case you are wondering, the unenlightened under-performers get fired.

Let me illustrate the logic and implications of the principle with examples from the show.

The Career of the Clueless

In Season Three, the Dunder-Mifflin executives decide to merge the Stamford and Scranton branches, laying off much of the latter, including Michael Scott.  His counterpart, the Sociopath Stamford branch manager, whose promotion is the premise of the re-org, opportunistically leverages his impending promotion into an executive position at a competitor, leaving the c0mpany in disarray. The Dunder-Mifflin executives, forced to deal with the fallout, cynically play out the now-illogical re-org anyway, shutting down Stamford and leaving Michael with the merged branch instead. The executives (David Wallace and Jan Levinson-Gould) are completely aware of Michael’s utter incompetence. Their calculations are obvious:  giving Michael the expanded branch allows them to claim short-term success and buy time to maneuver out of having to personally suffer longer-term consequences.

Jim’s remark on the drama is revealing. Comparing Michael to his exiting sociopath peer he says: “Whatever you say about Michael, he would never have done something like this,” a testament to Michael’s determinedly deluded loyalty to the company that will never be loyal to him.  We can safely assume that Michael’s previous promotion to regional manager occurred under similar circumstances of callous short-term calculations by sociopaths.

So why is promoting over-performing Losers logical? The simple reason is that if you over-perform at the Loser level, it is clear that you are an idiot. You’ve already made a bad bargain, and now you’re delivering more value than you need to, making your bargain even worse.  Unless you very quickly demonstrate that you know your own value by successfully negotiating more money and/or power, you are marked out as an exploitable clueless Loser. At one point, Darryl, angling for a raise, learns to his astonishment that the raise he is asking for would make his salary higher than Michael’s. Michael hasn’t negotiated a better deal in 14 years. Darryl — a minimum-effort Loser with strains of Sociopath — doesn’t miss a step. He convinces and coaches Michael into asking for his own raise, so he can get his.

A Loser who can be suckered into bad bargains is set to become one of the Clueless. That’s why they are promoted: they are worth even more as Clueless pawns in the middle than as direct producers at the bottom, where the average, rationally-disengaged Loser will do. At the bottom, the overperformers can merely add a predictable amount of value. In the middle they can be used by the Sociopaths to escape the consequences of high-risk machinations like re-orgs.

The Career of the Sociopath

The example of the “fast-track the under-performing” part of the principle is Ryan, the intern. He tests himself quickly and rapidly learns and accepts that he is incompetent as a salesman. But he is a born pragmatist with the drive, ambition, daring and lack of principles to make it to the top.  So rather than waste time trying to get good at sales, he slips into a wait-watch-grab opportunist mode. But he isn’t checked out; he is engaged, but in an experimental way, probing for his opening. The difference between him and the average checked-out Loser is illustrated in one brilliant scene early in his career. He suggests, during a group stacking effort in the warehouse, that they form a bucket brigade to work more efficiently. The minimum-effort Loser Stanley tells him coldly, “this here is a run-out-the-clock situation.” The line could apply to Stanley’s entire life.

Stanley’s response shows both his intelligence and clear-eyed self-awareness of his Loser bargain with the company. He therefore acts according to a mix of self-preservation and minimum-effort coasting instincts. The same is true of everybody else in the Loser layer with the exception of the over-performers: Dwight and Andy (and in his earlier incarnation as a salesperson, Michael).

The future Sociopath must be an under-performer at the bottom. Like the average Loser, he recognizes that the bargain is a really bad one. Unlike the risk-averse loser though, he does not try to make the best of a bad situation by doing enough to get by. He has no intention of just getting by. He very quickly figures out — through experiments and fast failures — that the Loser game is not worth becoming good at. He then severely under-performs in order to free up energy to concentrate on maneuvering an upward exit.  He knows his under-performance is not sustainable, but he has no intention of becoming a lifetime-Loser employee anyway. He takes the calculated risk that he’ll find a way up before he is fired for incompetence.

Ryan’s character displays this path brilliantly. When Michael’s boss and dominatrix-lover Jan suffers a psychotic meltdown, her boss, the uber-sociopath David Wallace, has no great hopes of a good outcome. Setting up yet another band-aid move, he calls up Michael for an interview to take up Jan’s spot. But when the rest of the office learns of Michael’s impending interview (during Michael’s farcical attempts at using a Survivor style contest to choose his successor, which predictably, only Dwight takes seriously), the true Sociopaths act. Jim and his Sociopath girlfriend Karen instantly call up David and announce their candidacies for the same position. Unknown to them, Ryan, the intern-turned-rookie, has also spotted the opportunity. The outcome is spectacular: Ryan gets the job, Michael loses, Karen is promoted to manager of the Utica branch, and Jim — who still has not yet completely embraced his inner Sociopath — returns to Scranton.  We learn later — as the Gervais principle would predict — that David Wallace never seriously considered Michael more than a temporary last resort. Much later, in a deposition during Jan’s lawsuit against the company, he reveals that Michael was never a serious candidate.

The Career of the Loser

The career of the Loser is the easiest to understand. Having made a bad bargain, and not marked for either Clueless or Sociopath trajectories, he or she must make the best of a bad situation.  The most rational thing to do is slack off and do the minimum necessary. Doing more would be a Clueless thing to do. Doing less would take the high-energy machinations of the Sociopath, since it sets up self-imposed up-or-out time pressure. So the Loser — really not a loser at all if you think about it — pays his dues, does not ask for much, and finds meaning in his life elsewhere. For Stanley it is crossword puzzles. For Angela it is a colorless Martha-Stewartish religious life. For Kevin, it is his rock band. For Kelly, it is mindless airhead pop-culture distractions. Pam has her painting ambitions. Meredith is an alcoholic slut. Oscar, the ironic-token gay character, has his intellectual posturing. Creed, a walking freak-show, marches to the beat of his own obscure different drum (he is the most rationally checked-out of all the losers).

If you leave out the clear marked-for-Clueless characters, Dwight and Andy, you are left with the two most interesting characters in the show: the will-he-won’t-he Sociopath-in-the-making, Jim, and the strange Toby. Toby is a curious case — intellectually a Sociopath, but without the energy or ambition to be an active sociopath. More about these two later.

The Emergence of the MacLeod Hierarchy

Dastardly as all this sounds, it is actually pretty efficient, given the inevitability of the MacLeod hierarchy and life cycle. The Sociopaths know that the only way to make an organization capable of survival is to buffer the intense chemistry between the producer-Losers and the leader-Sociopaths with enough Clueless padding in the middle to mitigate the risks of business. Without it, the company would explode like a nuclear bomb, rather than generate power steadily like a reactor. On the other hand, the business wouldn’t survive very long without enough people actually thinking in cold, calculating ways. The average-performing , mostly-disengaged Losers  can create diminishing-margins profitability, but not sustainable performance or growth.  You need a steady supply of Sociopaths for that, and you cannot waste time moving them slowly up the ranks, especially since the standard promotion/development path is primarily designed to maneuver the Clueless into position wherever they are needed. The Sociopaths must be freed up as much as possible to actually run the business, with or without official titles.

So Ryan floats directly to the top, where he does what is expected of him — lead a bold strategic gamble by building an online sales channel operation. As with any big strategic move, the operation has its risks, and fails. And here we find that Ryan is still not quite experienced enough as a sociopath. He foolishly goes the Enron route,  attempting to cook the books to avoid failure, and is found out and arrested. A true master Sociopath like David Wallace would instead have spotted the impending failure, promoted a Michael to take over (who would obviously be so gratified at being given a new white-elephant title that he would not have seen disaster looming), and have him take the blame for the inevitable failure. Completely legal and efficient.

The Organization as Psychic Prison

Which brings us to the other major management book that is consistent with the Gervais Principle, Images of Organization, Gareth Morgan’s magisterial study of the metaphors through which we understand organizations. Of the eight systemic metaphors in the book, the one that is most relevant here is the metaphor of an organization as a psychic prison. The image is derived from Plato’s allegory of the cave, which I won’t get into here. Suffice it to say that it divides people into those who get how the world really works (the Sociopaths and the self-aware slacker Losers) and those who don’t (the over-performer Losers and the Clueless in the middle).

This is where Gervais has broken new ground, primarily because as an artist, he is interested in the subjective experience of being Clueless (most sitcoms are about Losers). For your everyday Sociopath, it is sufficient to label someone clueless and manipulate them. What Gervais managed to create is a very compelling portrait of the Clueless, a work of art with real business value.

Here is the ultimate explanation of Michael Scott’s (and David Brent’s) careers: they are put into a position of having to explain their own apparent, unexpected and unexamined success. It is easy to explain failure. Random success is harder. Remember, they are promoted primarily as passive pawns to either allow the Sociopaths to escape the risks of their actions, or to make way for the Sociopaths to move up faster. They are presented with an interesting bit of cognitive dissonance: being nominally given greater power, but in reality being safely shunted away from the pathways of power. They must choose to either construct false narratives or decline apparent opportunities.

The Clueless resolve this dissonance by choosing to believe in the reality of the organization. Not everybody is capable of this level of suspension of disbelief. Both Ricky Gervais (David Brent) and Steve Carrel (Michael Scott) play the brilliantly drawn characters perfectly. The most visible sign of their capacity for self-delusion is their complete inability to generate an original thought. They quote movie lines, lyrics and perform terrible impersonations (at one point Michael goes, “You talking to me?” a line he attributes, in a masterful display of confusion, to “Al Pacino, Raging Bull“). For much of what he needs to say, he gropes for empty business phrases, deploying them with staggering incompetence. When Michael talks, he is attempting, like a child, to copy the flawless Powertalk spoken by sociopaths like Jan and David Wallace. He is oblivious to the fact that the Sociopaths use Powertalk as a coded language with which to simultaneously sustain the (necessary) delusions of the Clueless and communicate with each other.

It is not just the Sociopaths who conspire to sustain Michael’s delusions. So do the checked-out Losers, sometimes out of kindness, and sometimes out of self-interest. In one particularly perfect summing up, Oscar describes the impending “Dundies” award ceremony (a veritable monument to the consensual enablement of Michael’s delusions) as “The Dundies are kind of like a kid’s birthday party. And you go, and there’s really nothing for you to do there, but the kid’s having a really good time, so you… You’re kind of there. That’s… That’s kind of what it’s like.”

But Michael isn’t entirely a puppet. Buried under layers of denial is a clear understanding of his own, hopeless, powerless life, which makes him marginally more clued-in than say, Dwight. His response is  frenetic and desperate manipulation of the drama of false validation that has been set up for his benefit.  Some of this is with the knowing consent of his enablers.  Like experienced improv-comics, within limits, the rest of the office follows the rule of agreement in the Theater of Michael (in a brilliant piece of meta-commentary, in one episode we get to see Michael at his own impossibly bad worst in his real improv class, where he ruins every single sketch).

But Michael’s grand narrative requires constant, exhausting work to keep up. He must amplify and rope in even the most minor piece of validation into the service of his script. When, in a moment of weakness, Jim shares a genuine confidence with him, Michael is so thrilled that he turns the moment into a deep imaginary friendship, practically becoming a stalker, even mimicking Jim’s hairstyle.  At the other end, he over-represses even the slightest potential dent to his self-image. His is a thin-skinnedness gone crazy. Reality is sealed away with  psychotic urgency, but to do so, he must first scout it out with equal urgency. And so, when Jim (in the first true Sociopath move of his career) engineers a private meeting with the visiting David Wallace to carve out a promotion, Michael tries to crash the meeting. When politely turned away, he instantly switches scripts and pretends he is too busy and that he is the one who can’t attend. And then he sneaks into the meeting room anyway, first with various excuses, and finally by hiding in a Trojan-Horse cheese cart.

This sort of ability to work hard to sustain the theater of his own delusions, half-aware that he is doing so, is what makes Michael a genuine candidate for promotion to the ranks of the Clueless. Dwight is interesting precisely because he lacks Michael’s capacity for this pathological meta-cognition, and the ability to offer semi-believable scripts that others can at least help bolster. Dwight is not talented enough at Cluelessness to ever be promoted.

Is There More?

You bet. We haven’t even scratched the surface. Dwight, Jim, and Toby each deserve an entire essay. Michael and Ryan probably deserve one each as well, in addition to my quick sketches here. And there are other principles, lemmas and sundry theoretical constructs. But I’ll hold off. Maybe there aren’t as many Office watchers among this blog’s readers as I imagine.  You guys tell me if you want more.

I’ll conclude with one thought: Gervais deserves Nobel prizes in both literature and economics.
    `
        , "Vanketesh Rao, The Gervais Principle pt. 1"
    ],

    [
        `
        Dear Hume,

You ask advice: ah, what a very human and very dangerous thing to do! For to give advice to a man who asks what to do with his life implies something very close to egomania. To presume to point a man to the right and ultimate goal— to point with a trembling finger in the RIGHT direction is something only a fool would take upon himself.

I am not a fool, but I respect your sincerity in asking my advice. I ask you though, in listening to what I say, to remember that all advice can only be a product of the man who gives it. What is truth to one may be disaster to another. I do not see life through your eyes, nor you through mine. If I were to attempt to give you specific advice, it would be too much like the blind leading the blind.

“To be, or not to be: that is the question: Whether ’tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles … ” (Shakespeare)

And indeed, that IS the question: whether to float with the tide, or to swim for a goal. It is a choice we must all make consciously or unconsciously at one time in our lives. So few people understand this! Think of any decision you’ve ever made which had a bearing on your future: I may be wrong, but I don’t see how it could have been anything but a choice however indirect— between the two things I’ve mentioned: the floating or the swimming.

But why not float if you have no goal? That is another question. It is unquestionably better to enjoy the floating than to swim in uncertainty. So how does a man find a goal? Not a castle in the stars, but a real and tangible thing. How can a man be sure he’s not after the “big rock candy mountain,” the enticing sugar-candy goal that has little taste and no substance?

The answer— and, in a sense, the tragedy of life— is that we seek to understand the goal and not the man. We set up a goal which demands of us certain things: and we do these things. We adjust to the demands of a concept which CANNOT be valid. When you were young, let us say that you wanted to be a fireman. I feel reasonably safe in saying that you no longer want to be a fireman. Why? Because your perspective has changed. It’s not the fireman who has changed, but you. Every man is the sum total of his reactions to experience. As your experiences differ and multiply, you become a different man, and hence your perspective changes. This goes on and on. Every reaction is a learning process; every significant experience alters your perspective.

So it would seem foolish, would it not, to adjust our lives to the demands of a goal we see from a different angle every day? How could we ever hope to accomplish anything other than galloping neurosis?

The answer, then, must not deal with goals at all, or not with tangible goals, anyway. It would take reams of paper to develop this subject to fulfillment. God only knows how many books have been written on “the meaning of man” and that sort of thing, and god only knows how many people have pondered the subject. (I use the term “god only knows” purely as an expression.) There’s very little sense in my trying to give it up to you in the proverbial nutshell, because I’m the first to admit my absolute lack of qualifications for reducing the meaning of life to one or two paragraphs.

I’m going to steer clear of the word “existentialism,” but you might keep it in mind as a key of sorts. You might also try something called Being and Nothingness by Jean-Paul Sartre, and another little thing called Existentialism: From Dostoyevsky to Sartre. These are merely suggestions. If you’re genuinely satisfied with what you are and what you’re doing, then give those books a wide berth. (Let sleeping dogs lie.) But back to the answer. As I said, to put our faith in tangible goals would seem to be, at best, unwise. So we do not strive to be firemen, we do not strive to be bankers, nor policemen, nor doctors. WE STRIVE TO BE OURSELVES.

But don’t misunderstand me. I don’t mean that we can’t BE firemen, bankers, or doctors— but that we must make the goal conform to the individual, rather than make the individual conform to the goal. In every man, heredity and environment have combined to produce a creature of certain abilities and desires— including a deeply ingrained need to function in such a way that his life will be MEANINGFUL. A man has to BE something; he has to matter.

As I see it then, the formula runs something like this: a man must choose a path which will let his ABILITIES function at maximum efficiency toward the gratification of his DESIRES. In doing this, he is fulfilling a need (giving himself identity by functioning in a set pattern toward a set goal), he avoids frustrating his potential (choosing a path which puts no limit on his self-development), and he avoids the terror of seeing his goal wilt or lose its charm as he draws closer to it (rather than bending himself to meet the demands of that which he seeks, he has bent his goal to conform to his own abilities and desires).

In short, he has not dedicated his life to reaching a pre-defined goal, but he has rather chosen a way of life he KNOWS he will enjoy. The goal is absolutely secondary: it is the functioning toward the goal which is important. And it seems almost ridiculous to say that a man MUST function in a pattern of his own choosing; for to let another man define your own goals is to give up one of the most meaningful aspects of life— the definitive act of will which makes a man an individual.

Let’s assume that you think you have a choice of eight paths to follow (all pre-defined paths, of course). And let’s assume that you can’t see any real purpose in any of the eight. THEN— and here is the essence of all I’ve said— you MUST FIND A NINTH PATH.

Naturally, it isn’t as easy as it sounds. You’ve lived a relatively narrow life, a vertical rather than a horizontal existence. So it isn’t any too difficult to understand why you seem to feel the way you do. But a man who procrastinates in his CHOOSING will inevitably have his choice made for him by circumstance.

So if you now number yourself among the disenchanted, then you have no choice but to accept things as they are, or to seriously seek something else. But beware of looking for goals: look for a way of life. Decide how you want to live and then see what you can do to make a living WITHIN that way of life. But you say, “I don’t know where to look; I don’t know what to look for.”

And there’s the crux. Is it worth giving up what I have to look for something better? I don’t know— is it? Who can make that decision but you? But even by DECIDING TO LOOK, you go a long way toward making the choice.

If I don’t call this to a halt, I’m going to find myself writing a book. I hope it’s not as confusing as it looks at first glance. Keep in mind, of course, that this is MY WAY of looking at things. I happen to think that it’s pretty generally applicable, but you may not. Each of us has to create our own credo— this merely happens to be mine.

If any part of it doesn’t seem to make sense, by all means call it to my attention. I’m not trying to send you out “on the road” in search of Valhalla, but merely pointing out that it is not necessary to accept the choices handed down to you by life as you know it. There is more to it than that— no one HAS to do something he doesn’t want to do for the rest of his life. But then again, if that’s what you wind up doing, by all means convince yourself that you HAD to do it. You’ll have lots of company.

And that’s it for now. Until I hear from you again, I remain,

your friend,
Hunter
        `
        , "Hunter S. Thompson, Letter to Hume Logan, April 22, 1958"
    ],

    [
        `
        In this universe there is one great energy and we have no name for it.

People have tried various names for it like God, like Brahmin, like Tao, but in the West the word God has got so many funny associations attached to it that most of us are bored with it. (…)

But according to Buddhist philosophy, all this universe is one ‘dadada.’ That means ‘ten thousand functions, ten thousand things, one suchness,’ and we’re all one suchness.

And that means that suchess comes and goes like anything else because this whole world is an on-and-off system. As the Chinese say, it’s the yang and the yin, and therefore it consists of ‘now you see it now you don’t, here you are, here you aren’t, here you are’ because that the nature of energy to be like waves, and waves have crests and troughs.
Only we, being under a kind of sleepiness or illusion, imagine that the trough is going to overcome the wave or the crest, the yin or the dark principle is going to overcome the yang or the light principle, and that ‘off’ is going to finally triumph over ‘on.’

And we, shall I say, bug ourselves by indulging in that illusion. ‘Hey, supposing darkness did win out, wouldn’t that be terrible!’ And so we’re constantly trembling and thinking that it may because after all isn’t it odd that anything exists? It’s most peculiar. It requires effort, it requires energy, and it would have been so much easier for there to have been nothing at all. (…) Therefore we think ‘well since being, since the ‘is’ side of things is so much effort’ you always give up after a while and you sink back into death. But death is just the other face of energy and it’s the rest, the not being anything around, that produces something around, just in the same way that you can’t have ‘solid’ without ‘space’ or ‘space’ without ‘solid’.

When you wake up to this and realize that the more it changes the more it’s the same thing, as the French say, that you are really a playing of this one energy, and there is nothing else but that that is you, but that for you to be always you would be an insufferable bore, and therefore it is arranged that you stop being you after a while and then come back as someone else altogether.

And so when you find that out, you become full energy and delight. (…) And you suddenly see through the whole sham of things. You realize you’re That–we won’t put a name on it– you’re That, and you can’t be anything else.

So you are relieved of fundamental terror.

That doesn’t mean that you’re always going to be a great hero, that you won’t jump when you hear a bang, that you won’t worry occasionally, that you won’t lose your temper.

It means though that fundamentally deep, deep, deep down within you, you will be able to be human (…) in the pains, difficulties and struggles that naturally go with human existence. (…)

But to have no hang-ups, that is to say, to be able to drift like a cloud and flow like water, seeing that all life is a magnificent illusion, a playing of energy, and that there is absolutely nothing to be afraid of. Fundamentally.

You will be afraid on the surface. You will be afraid of putting your hand in the fire. You will be afraid of getting sick.

But you will not be afraid of fear. Fear will pass over your mind like a black cloud will be reflected in the mirror.
        `
        , "Alan Watts, You're it, from Zen Bones, 1967"
    ],

]

speeches.push(theAlchemist);
let i = 0;
while (i < speeches.length) {
    speeches[i][0] = prepareText(speeches[i][0])
    i++;
}