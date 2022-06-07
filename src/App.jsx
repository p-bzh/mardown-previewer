import { Component } from 'react'
import { parse } from 'marked'

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:
        "# H1" +
        "\n" +
        "## H2" +
        "\n" +
        "`printf('goodbye world!')`" +
        "\n" +
        "```" +
        "\n" +
        "print('goodbye world!')" +
        "\n" +
        "```" +
        "\n" +
        "[link](https://www.google.com)" +
        "\n" +
        "1. First item 2. Second item 3. Third item" +
        "\n" +
        "> blockquote" +
        "\n" +
        "![react logo](https://logos-download.com/9747-react-logo-download.html)  " +
        "\n" +
        "**bold text**"
    };
    this.handleChange = this.handleChange.bind(this);
    this.parseMarkdown = this.parseMarkdown.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  parseMarkdown() {
    const markdown = parse(this.state.input, { breaks: true });
    return { __html: markdown };
  }
  render() {
    return (
      <div>
        <textarea value={this.state.input} onChange={this.handleChange} id="editor" col="30" row="15">

        </textarea>
        <div id="preview" dangerouslySetInnerHTML={this.parseMarkdown()}></div>
      </div>
    );
  }
}
