export default function SearchInput({ placeholder, setInput }) {
    return (
        <>
            <div className="login-container">
                <input
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={placeholder}
                    className="recipedata-input"
                />
            </div>
        </>
    );
}
