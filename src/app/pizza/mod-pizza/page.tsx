import React from 'react';
import ReactMarkdown from 'react-markdown'

const markdownContent = `
**This is the first pizza review on the blog and the format is likely to change in the future**

placeholder for image

MOD pizza is a fast casual pizzeria with a style similar to a Subway for pizza. You can either order online or walk in and order. If you walk in, there is a counter with ingredients that you can choose to add to your pizza. There is also a sign with options already created for you.

placeholder for image

Now obviously for me, it was fairly quick with a standard cheese pizza. This review, and likely the next few, will be subdivided into three categories: crust, cheese, and sauce. These categories will not have an individual score, but I considering that for the future.

placeholder for image

Crust
The crust is a thin crust style. The edges of the crust do not have any extra seasoning (that's a plus for me). Continuing with the edges, they were crispy, but not burnt. Some areas, were a bit too crispy for me though. In certain areas, the edges were not very easy to pick up without touching cheese/sauce, but that was not really a problem. For the under crust, it was not super stiff and had a good amount of flop to it. Along with this, the under crust did not feel too floury which a lot of Italian style pizzas suffer from. One significant detractor for the crust was that it had air pockets/folds in some areas between the cheese which kind of ended up feeling feeling like a crunchy bread feel. In these areas, the cheese also had a tendency to slip off. Overall, the crust was second in the ranking of ingredients.
Sauce
The sauce is a marinara sauce that feels very similar to a New York style pizza sauce flavor. It is not as tomatoey as a Neopolitan sauce, but not a very 'spicy'/seasoned sauce. The flavor of the sauce itself was quite good for me. It wasn't too strong and had a good presence in combination with the cheese. I do prefer a bit more tomatoey flavor, but this was not a significant problem. What was a problem with the sauce, however, was its distribution after cooking. When the pizza was being put in the oven, the sauce had a nice even distribution. Once it was done cooking though, the sauce was much greater in certain areas of the pizza. This lead to some bites feeling like there was just no sauce. I liked the sauce, but it was not anything special and I needed more of it on the pizza. Overall, the sauce is third in the ranking of ingredients.
Cheese
The cheese was by far the standout ingredient in the pizza and is what elevated it. It had great texture with that stringy pull you expect in pizza. Along with the pull, it was also chewy felt very fresh. Flavor wise, it was once again a more New York style over a traditional mozzarella. When combined with the New York style sauce, it works. These ingredients can sometimes fail if mixed with the wrong type of cheese/sauce even if they are good on their own. The cheese also was very moist and not dry at all (likely helped by being fresh out of the oven). I really don't have a lot of negative thing to say about the cheese other than when it cooked it did have some folds (possibly due the crust as talked about earlier). Overall, the cheese is first in the ranking of ingredients.
Final Thoughts
I was very surprised how much I liked this pizza. When I first saw it, I was expecting a much worse crust. I also really liked the Subway style of adding your own ingredients and allows for a lot of cool combinations and can also accommodate any eating requirements. I will caveat the review by saying that I did eat in the restaurant right after the pizza was done, so it was not takeout/delivery. I don't think any pizza gets better in the time period it's being delivered or sitting out as slices on a tray, so it is important to keep that in mind.
Score
8.4
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

