import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
    return (
        <>
            <button className={s.button} onClick={onLeaveFeedback}>
                Good
            </button>

            <button className={s.button} onClick={onLeaveFeedback}>
                Neutral
            </button>

            <button className={s.button} onClick={onLeaveFeedback}>
                Bad
            </button>
        </>
    );
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

// OLD CLASS
// function FeedbackOptions({ options, onLeaveFeedback }) {
// return options.map(option => (
//     <button
//         key={'btn-' + option}
//         className={s.button}
//         onClick={onLeaveFeedback}
//     >
//         {option}
//     </button>
// ));
// }
