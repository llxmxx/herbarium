import CollectionCard from "./collectionCard";
import { collections } from "../data/collections";
import { useRef } from "react";
import { collectionsAnimation } from "../animations/collectionsAnimation";
import { useGSAP } from '@gsap/react';

function Collections() {
    const colRef = useRef(null);
    const boardRef = useRef(null);

    useGSAP(() => {
        collectionsAnimation(colRef, boardRef);
    }, []);

    return(
        <section className="collections" ref={colRef}>
            <h2>Collections</h2>
            <p>explore our curated botanical selections</p>
            <div className="collections-board" ref={boardRef}>
                {collections.map((collection) => (
                    <CollectionCard key={collection.id} collection={collection} />
                ))}
            </div>
        </section>
    )
}

export default Collections