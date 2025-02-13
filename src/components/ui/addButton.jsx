function AddButton({addAction}) {

    return(
        <button
            className="bg-green-500 dark:text-[#141F0E] p-3 rounded-xl"
            onClick={addAction}>
            +
        </button>
    );

}

export default AddButton;