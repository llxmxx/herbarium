import CollectionCard from "./collectionCard"
import { collections } from "../data/collections"

function Collections() {
    return(
        <section className="collections">
            <h2>Collections</h2>
            <p>explore our curated botanical selections</p>
            <div className="collections-board">
                {collections.map((collection) => (
                    <CollectionCard key={collection.id} collection={collection} />
                ))}
            </div>
        </section>
    )
}

export default Collections