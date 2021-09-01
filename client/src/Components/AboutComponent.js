import "../css/AboutComponent.css";

export default function AboutComponent() {
    return (
        <>
            <div className="about-container">
                <h1 className="about-headline">About:</h1>

                <section>
                    This project is a further development of my final project I
                    builded during my attendance to the Coding Bootcamp at
                    Spiced Academy in Berlin. At the homepage the user can
                    decide to search for shoppinglists or restaurants. It is
                    also possible to make an user account. Setting up an user
                    the account offers the possibility to save shopping list and
                    restaurants in a favourites list. It is also possible to
                    store and delete favourite lists. After adding to one of the
                    favourite lists, the user can also add and delete notes to
                    his favourites. A search function for special restaurants or
                    shopping lists inside the favourites is also available.
                    Finally the user candecide to logout or to delete the
                    account. Two different server side API calls are made for
                    the search functionality. Now the app is managed by Redux
                    and uses hooks instead of class-components. To keep the user
                    logged in even after a page refresh, I used localstorage.
                    <br></br> The app is optimized for mobile use.
                </section>
                <h2 className="about-headline">Technologies and Frameworks:</h2>
                <section>
                    The technologies used to build the website are React.js and
                    Redux on the client-side. And Node.js/Express and postgreSQl
                    on the server-side.
                </section>
                <h2 className="about-headline">Code:</h2>
                <section>
                    If you are interested, you can watch the code at{" "}
                    <a
                        className="github-link"
                        href="https://github.com/Phil-boter/react-recipeSearch"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github.
                    </a>
                </section>
            </div>
        </>
    );
}
