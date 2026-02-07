import ShowcaseTechnologies from "./components/ShowcaseTechnologies/ShowcaseTechnologies"
import ShowcaseEditors from "./components/ShowcaseEditors/ShowcaseEditors"
import ShowcaseLibFram from "./components/ShowcaseLibFram/ShowcaseLibFram"
import ShowcaseInterested from "./components/ShowcaseInterested/ShowcaseInterested"
import ShowcaseSocial from "./components/ShowcaseSocial/ShowcaseSocial"

export default function ShowcaseContainer() {
    return (
        <article id="verde" className="box">
            <ShowcaseTechnologies />
            <ShowcaseEditors />
            <ShowcaseLibFram />
            <ShowcaseInterested />
            <ShowcaseSocial />
        </article>
    )
}