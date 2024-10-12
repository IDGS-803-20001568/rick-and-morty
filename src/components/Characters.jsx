import React, { useState } from 'react';

const Characters = ({ characters, setCharacters }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0); 
    const charactersPerPage = 5; 

    const resetCharacters = () => {
        setCharacters(null);
        setSearchTerm(''); 
        setCurrentPage(0); 
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(0);
    };

    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = () => {
        console.log(`Buscando: ${searchTerm}`);
    };

    const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = currentPage * charactersPerPage;
    const currentCharacters = filteredCharacters.slice(startIndex, startIndex + charactersPerPage);

    return (
        <div>
            <h1>Characters</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver al inicio</span>
            <div className="container-characters">
                {currentCharacters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === 'Alive' ? (
                                    <>
                                        <span className="alive" />Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead" />Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios:</span><br />
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie:</span><br />
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                    Anterior
                </button>
                <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
                    Siguiente
                </button>
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver al inicio</span>
        </div>
    );
};

export default Characters;
