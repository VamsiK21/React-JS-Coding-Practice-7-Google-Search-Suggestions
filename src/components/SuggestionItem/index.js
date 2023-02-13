// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onUpdatedSearchInput = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="item-container">
      <p className="text">{suggestion}</p>
      <button
        type="button"
        onClick={onUpdatedSearchInput}
        className="arrow-button"
      >
        <img
          className="arrow-img"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
