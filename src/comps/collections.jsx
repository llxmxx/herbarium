import CollectionCard from "./collectionCard";
import { collections } from "../data/collections";
import { useEffect, useRef } from "react";
import { collectionsAnimation } from "../animations/collectionsAnimation";

function Collections() {
    const colRef = useRef(null);
    const boardRef = useRef(null);
    const pinRef = useRef(null);

    useEffect(() => {
        collectionsAnimation(colRef, boardRef, pinRef);
    }, []);

    return(
        <section className="collections" ref={colRef}>
            <section className="collections-pin" ref={pinRef}>
                <h2>Collections</h2>
                <p>explore our curated botanical selections</p>
                <div className="collections-board" ref={boardRef}>
                    {collections.map((collection) => (
                        <CollectionCard key={collection.id} collection={collection} />
                    ))}
                </div>
            </section>
        </section>
    )
}

export default Collections