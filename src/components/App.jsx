import { useState } from 'react';
import Statictics from './Statictics';
import Section from './Section';
import Notification from './Notofication';
import FeedbackOptions from './FeedbackOption';
import css from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = e => {
    // const option = e.target;
    console.log(e);

    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        console.log(`No option called ${option}`);
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const goodFeedback = good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return `${result}%`;
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statictics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
}
// function App() {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const handleClickButton = e => {
//     const option = e.target.name;

//     switch (option) {
//       case 'good':
//         setGood(prevState => prevState + 1);
//         break;

//       case 'neutral':
//         setNeutral(prevState => prevState + 1);
//         break;

//       case 'bad':
//         setBad(prevState => prevState + 1);
//         break;

//       default:
//         console.log(`No option called ${option}`);
//         break;
//     }
//   };

//   const countTotalFeedback = () => good + neutral + bad;

//   const countPositiveFeedback = () => {
//     const totalFeedback = countTotalFeedback();
//     const goodFeedback = good;
//     let result = 0;

//     if (totalFeedback > 0) {
//       result = Math.ceil((goodFeedback / totalFeedback) * 100);
//     }

//     return `${result}%`;
//   };

//   return (
//     <div className={css.container}>
//       <div className={css.wrapper}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={handleClickButton}
//           />
//         </Section>
//         <Section title="Statistics">
//           {countTotalFeedback() > 0 ? (
//             <Statictics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={countTotalFeedback()}
//               positivePercentage={countPositiveFeedback()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     </div>
//   );
// }

// export default App;
