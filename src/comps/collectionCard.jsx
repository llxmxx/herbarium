function CollectionCard({collection}) {
    return(
        <div className={`collection-card ${collection.featured ? "featured": ""}`} style={{left: `${collection.x}%`, top: `${collection.y}%`}}>
            <img src={collection.image} alt={collection.title} />
            <div className="card-overlay">
                <h3>{collection.title}</h3>
            </div>
        </div>
    )
}

export default CollectionCard;