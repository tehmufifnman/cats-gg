import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './EmojiPage.css';
import catEmojis from '../data/cat-emoji.json';

class EmojiPage extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        copyAnimationDuration: PropTypes.number,
    };

    static defaultProps = {
        className: '',
        copyAnimationDuration: 1000,
    };

    state = {
        copiedEmoji: null,
    };

    handleEmojiClicked = event => {
        const emoji = event.target.textContent;
        const textElement = document.createElement('input');
        document.body.appendChild(textElement);
        textElement.value = emoji;
        textElement.select();
        document.execCommand('copy');
        textElement.remove();

        this.runCopyAnimation(emoji);
    };

    runCopyAnimation = emoji => {
        this.setState({
            copiedEmoji: emoji,
        });
        if (this.copyAnimationTimeout) {
            window.clearTimeout(this.copyAnimationTimeout);
        }
        this.copyAnimationTimeout = window.setTimeout(() => this.setState({
            copiedEmoji: null,
        }), this.props.copyAnimationDuration);
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
                        <button
                            className={[
                                'emoji-listing__emoji',
                                this.state.copiedEmoji === emoji && 'copied',
                            ]
                                .filter(Boolean)
                                .join(' ')
                            }
                            key={emoji}
                            onClick={this.handleEmojiClicked}
                        >
                            {emoji}
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default EmojiPage;
