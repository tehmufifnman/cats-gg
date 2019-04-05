import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './EmojiPage.css';
import catEmojis from '../data/cat-emoji.json';

class EmojiPage extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: '',
    };

    handleEmojiClicked = event => {
        const emoji = event.target.textContent;
        const textElement = document.createElement('input');
        document.body.appendChild(textElement);
        textElement.value = emoji;
        textElement.select();
        document.execCommand('copy');
        textElement.remove();
    };

    render() {
        return (
            <div
                className={[
                    this.props.className,
                    'emoji-page',
                ]
                    .filter(Boolean)
                    .join(' ')
                }
            >
                <div className="emoji-page__click-prompt">Click to copy!</div>
                <div className="emoji-listing">
                    {catEmojis.map(emoji =>
                        <div
                            className="emoji-listing__emoji"
                            key={emoji}
                            onClick={this.handleEmojiClicked}
                        >
                            {emoji}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default EmojiPage;
