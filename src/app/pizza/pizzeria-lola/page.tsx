import React from 'react';
import ReactMarkdown from 'react-markdown'

const markdownContent = `
placeholder for image

Important Preface
Okay, so before I get into this review, I want to give a quick explanation on my rating scale. Yes, it is a 10 point based system. However, it is not a linear scale where going from 6 to 7 is the same as going from 8 to 9. Because pizzas are fairly difficult to completely mess up it is very hard to go below 6 ish. A rating of 7 means that I would be fine ordering that pizza again. For reference, Dominos is just barely at a 7. This also applies to the upper end of the scale. It is much harder for a pizza to go from 9 to 9.1 than it is to go from 7.5 to 8. A pizza will need to be exceptional to start breaking into the 9's and each .1 once there, is going to be much harder to earn. This is because if 10 is a perfect pizza, it must be very difficult to obtain that or get close to that. I think this is important to clarify this because this means that a lot of pizzas will fall between the 7-8 range, more than if the scale was perfectly linear.
Pizzeria Lola is a casual sit-down restaurant that is focused on pizza with a few other Italian items on the menu. The restaurant has a modern hipster feel to it. I know those are kind of opposite descriptors, but the place has giant opened tomato cans hanging from the ceiling with lights in them and the kitchen is semi exposed with a giant furnace in the middle of the place. It feels modern with their menu naming and service style. They even have an added gratuity and encourage you not to tip

placeholder for image
placeholder for image

Crust
The crust on this pizza was thin crust. It comes par for the course when ordering a margherita. The dough itself was very good and didn't have too much flour on the bottom. There was a decent amount of droop which could be due to the fact that is was fresh and still very hot. It wasn't an ultra thin crust where you can barely grip it which I appreciate as I eat with my hands so I need at least some area to hold it. It didn't really blow me away and it was a tad overcooked on the edges where you can see some black puffs and dark areas. 
Sauce
Now we're talking. This sauce was exceptional. The flavor was so great with a classic tomato taste with no over the top seasoning or spice. Exactly the type of sauce I expect when I order a margherita. Usually if the pizza is labeled as a cheese pizza, I can excuse the sauce not being as tomatoey, but when a place serves me a margherita with over seasoned tomato sauce, it immediately brings the pizza down. This, however, did not have that. The flavoring was sweet and rich without being too chunky. The distribution of it on the pizza was solid as it didn't have too much in the center or around the crust. It is the shining ingredient in this pizza for sure.
Cheese
With the cheese, my thoughts are similar to those regarding the crust. It tasted fine and had good texture and moisture. Very solid and I don't have very much to critique about it. It didn't really wow me, but didn't detract either. The only complaint I would have is that I would like a bit more of an even distribution as some slices had very little of it (see the middle right slice for example).

Final Thoughts

I really enjoyed this pizza and the restaurant itself. The sauce was the standout ingredient by far and really elevated the pizza. The only note I would add is that it does has that oily feel to it so I ended up having to wipe my hands and face quite a lot, but that is not really a bad thing. They did have some interesting variations on their menu that might or might not work, but as usual, I only care about three ingredients.

Score
9.0
■
`;

export default function PizzeriaLolaPage() {
    return (
        <>
            <ReactMarkdown>
                {markdownContent}
            </ReactMarkdown>
        </>
    )
}

