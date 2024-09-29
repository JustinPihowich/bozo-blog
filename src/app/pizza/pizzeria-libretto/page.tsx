import React from 'react';
import ReactMarkdown from 'react-markdown'

const markdownContent = `
placeholder for image
placeholder for image
placeholder for image

:::info
NOTE: I did not have this in August, but rather in June. Most of the review was complete before the Bozo Blog hiatus.
:::
Pizzeria Libretto has a couple locations in Toronto that focus on Neapolitan, style pizza. Their menu had a small mark of certification from something in Italy, but I don't remember what it said.
Crust
The crust is thin crust style which is pretty expected from a Neapolitan style pizza. It was on the thinner side of thin-crust and probably could have benefited from a tiny boost in thickness. It had a small to medium amount of flop which is mostly optimal. Crust for pizza should typically not be super straight as that is a signal of overcooked crust. However, overly floppy crust signifies undercooked crust or overloaded toppings. It had a floury crust flavor over a more bread-like flavor. I don't have a big preference between the two and I think it is dependent upon the synergy between the other ingredients. Overall, the crust was solid.
Sauce
The sauce was the best ingredient used in this pizza. It had a great tomatoey flavor and felt vibrant, but not overpowering. It was very synergetic with the crust and didn't feel too soggy or overloaded. The area of application is also good as there is basically not area where the the sauce felt underapplied. With sauce, I prefer a less spiced, more "tangy" flavor over a more marinara flavor that would be used for spaghetti.
Cheese
While this pizza was great, the cheese could use some improvement. I assume they used fresh mozzarella based on the splotches of the cheese. While I think using fresh mozzarella is not bad, and it is the style of traditional Neopolitan pizzas, it typically results in that uneven, splotchy, spread. Now, I'm sure many people might disagree with me on how much cheese is good, but I like a more even distribution of cheese on the pizza so that every bite gets a good amount of cheese. With this method, some bites will get the whole splotch of cheese, leaving the next bite to be practically just sauce. In this circumstance, the sauce was good enough that I was fine with even that, but in general I like more cheese. (This can be difficult to balance though, as too much cheese on a thin enough crust can cause lots of flopping/sagging  or even have the cheese slip off). The cheese itself was good though and had a good chewy texture without feeling too airy/bubbly. It had the nice flavor that fresh mozzarella brings as well.
Score
8.9
Comments:

Anonymous - 8.9 is a strong rating. I have lots of work to do.
Anonymous - Whoa. 8.9. That's better than Dave's, but not as good as Dave's after he perfects his.
`;

export default function PizzeriaLibrettoPage() {
    return (
        <>
            <ReactMarkdown>
                {markdownContent}
            </ReactMarkdown>
        </>
    )
}


