import "./App.css";
import Accordion from "./Accordion";

const App = () => {
  return (
    <div className="container">
      <Accordion
        title=" Tell me about yourself?"
        answer="At the beginning of the conversation, your interviewer will likely start out by asking you about yourself. They are seeking to understand your qualifications, what led you to the job and generally why you think you'd be a good fit. The key here is making your answer concise and direct, including only professional information relevant to the job. Your answer should be structured as follows:"
      />
      <Accordion
        title="How would you describe yourself?"
        answer="With this question, your interviewer wants to learn how your qualities and characteristics align with the skills they believe are required to succeed in the role. To answer this question, pick one to a few personal characteristics and elaborate on them with examples."
      />
      <Accordion
        title="How do you define success?"
        answer="Employers ask this to help them understand how your definition of success influences your goals and how you measure them. A good answer will show that you know how to define and measure goals and you’re willing to challenge yourself and work hard to meet them."
      />
    </div>
  );
};
export default App;
