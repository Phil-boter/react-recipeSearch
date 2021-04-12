export default function ToggleModalButton({ setShowModal }) {
    const toggleShowModal = () => {
        console.log("click");
        setShowModal(true);
    };

    return (
        <button
            className="main-info-button main-info-button-recipe delete"
            onClick={() => toggleShowModal()}
        >
            More information
        </button>
    );
}
