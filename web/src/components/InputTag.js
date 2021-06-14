import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class InputTag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      suggestions: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    // this.handleDrag = this.handleDrag.bind(this);
  }
  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    this.setState((state) => ({ tags: [...state.tags, tag] }));
  }
  componentDidUpdate() {
    if (this.props.tags.length !== this.state.tags.length) {
      this.props.getTags(this.state.tags);
    }
  }

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div className="inputTag">
        <ReactTags
          classNames={{
            tags: "tagsClass",
            tagInput: "tagInputClass",
            tagInputField: "tagInputFieldClass",
            selected: "selectedClass",
            tag: "tagClass",
            remove: "removeClass",
            suggestions: "suggestionsClass",
            activeSuggestion: "activeSuggestionClass",
          }}
          tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleChange={this.handleChange}
          handleAddition={this.handleAddition}
          // handleDrag={this.handleDrag}
          delimiters={delimiters}
        />
      </div>
    );
  }
}

export default InputTag;
