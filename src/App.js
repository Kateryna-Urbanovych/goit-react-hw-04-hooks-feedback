import { useState } from 'react';

import Container from './components/Container';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';

export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleChange = ({ target }) => {
        let option = target.textContent;

        switch (option) {
            case 'Good':
                setGood(state => state + 1);
                break;
            case 'Neutral':
                setNeutral(state => state + 1);
                break;
            case 'Bad':
                setBad(state => state + 1);
                break;
            default:
                return;
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const totalCount = countTotalFeedback();
        return Math.round((good / totalCount) * 100);
    };

    return (
        <Container>
            <Section title="Please leave feedback">
                <FeedbackOptions onLeaveFeedback={handleChange} />
            </Section>

            <Section title="Statictics">
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                />
            </Section>
        </Container>
    );
}

// OLD CLASS
// class App extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     };

//     getOptions = () => {
//         const keys = Object.keys(this.state);
//         return keys.map(
//             key => `${key.slice(0, 1).toUpperCase()}${key.slice(1)}`,
//         );
//     };

//     handleChange = ({ target }) => {
//         const feedbackOption = target.textContent.toLowerCase();
//         this.setState({ [feedbackOption]: this.state[feedbackOption] + 1 });
//     };

//     countTotalFeedback = () => {
//         const values = Object.values(this.state);
//         return values.reduce((total, value) => total + value, 0);
//     };

//     countPositiveFeedbackPercentage = () => {
//         const { good } = this.state;
//         const totalCount = this.countTotalFeedback();
//         return Math.round((good / totalCount) * 100);
//     };

//     render() {
//         const options = this.getOptions();
//         const { good, neutral, bad } = this.state;

//         return (
//             <Container>
//                 <Section title="Please leave feedback">
//                     <FeedbackOptions
//                         options={options}
//                         onLeaveFeedback={this.handleChange}
//                     />
//                 </Section>

//                 <Section title="Statictics">
//                     <Statistics
//                         good={good}
//                         neutral={neutral}
//                         bad={bad}
//                         total={this.countTotalFeedback()}
//                         positivePercentage={this.countPositiveFeedbackPercentage()}
//                     />
//                 </Section>
//             </Container>
//         );
//     }
// }
