import React from 'react';
import ReactMarkdown from 'react-markdown'

const markdownContent = `
placeholder for image
placeholder for image
placeholder for image

Luigi's is a small, cozy pizza place that offers delivery, to-go, and dining in. It is a fairly family friendly, 'quick lunch' type of place. They focus primarily on thin crust pizzas and offer gluten free along with vegetarian options.
:::info
Note: The pizza is in a box. I got it to-go and just ate it in my car. It's still representative of what you would get eating in.
:::
Crust
The crust is a thin crust with some flop near the middle. Parts of the edges were a bit too crispy, with some burning in areas. Some pizza places like to cut their pizzas like the one above with a quadrant-like cut. While I respect trying to be different than the pizza establishment, there is a reason center-intersecting cuts are standard. With this style, the center piece has no outside crust which is very poor for 'eatability'. It also results in weird corner slices where half the slice is the outer crust with one bite worth of cheese. An 8 slice center-intersecting cut is what I consider to be the standard. The quality of the crust itself wasn't anything impressive either and lacked that nice chewiness you expect from pizza crust.
Sauce
The sauce here was decidedly mediocre. It wasn't really bad, but didn't have as much of a tomatoey taste to it and leaned more toward a light marinara sauce. The distribution of the sauce itself is quite good in terms of area covered and the amount. The strength of the flavor was a bit weak as well. It did not detract very much from the pizza and is a relatively safe flavor profile overall.
Cheese
The cheese was actually pretty solid. It was very chewy and has good moisture levels along with flavor. It didn't slip off the slice which is a plus. It seemed to be mozzarella that isn't fresh which is actually what you want for pizzas (unless you are going for Neapolitan style in which case you would use fresh mozz). Overall, the cheese was definitely the best part of the pizza.
Score
7.2

Comments:
Carla - I like the show/hide button up above. That works well for guessing. 😀
Carla - Whoa. I prefer the standard slicing vs the squares too and when the cheese doesn't slide off. Pizza Lola was superior! But wait until you try Dave's. 😊
Anonymous - Yikes. The pizza looked delicious. I agree with the comments on the cut. You would never see a pizza cut like that in Italy or New York. I am taking notes and hopefully I will be ready for the Bozoblog challenge this summer.
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

