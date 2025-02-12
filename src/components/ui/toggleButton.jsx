function ToggleButton ({checked, onToggle}) {

    return (
        <button
        onClick={onToggle}
        className={`relative w-14 h-8 flex items-center rounded-full transition-colors ${
          checked ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    )

}

export default ToggleButton