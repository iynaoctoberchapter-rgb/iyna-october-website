import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NextExamComponent() {



    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [score, setScore] = useState(0);
        const [userAnswers, setUserAnswers] = useState(() => {
    // Try to load from localStorage
    const saved = localStorage.getItem("bb_exam_answers");
    return saved ? JSON.parse(saved) : {};
});
// Save answers to localStorage whenever they change
useEffect(() => {
    localStorage.setItem("bb_exam_answers", JSON.stringify(userAnswers));
}, [userAnswers]);

// When a radio is selected, update state and localStorage
const handleRadioChange = (qKey, answerId) => {
    setUserAnswers(prev => {
        const updated = { ...prev, [qKey]: answerId };
        return updated;
    });
};
    const [showResults, setShowResults] = useState(false);

    const correctAnswers = {
        q1: 'q1a3', // Q1
        q2: 'q2a2', // Q2
        q3: 'q3a2', // Q3
        q4: 'q4a3', // Q4
        q5: 'q5a3', // Q5
        q6: 'q6a3', // Q6
        q7: 'q7a1', // Q7
        q8: 'q8a3', // Q8
        q9: 'q9a4', // Q9
        q10: 'q10a1', // Q10
        q11: 'q11a3', // Q11
        q12: 'q12a4', // Q12
        q13: 'q13a4', // Q13
        q14: 'q14a3', // Q14
        q15: 'q15a3', // Q15
        q16: 'q16a5', // Q16
        q17: 'q17a4', // Q17
        q18: 'q18a5', // Q18
        q19: 'q19a3', // Q19
        q20: 'q20a4', // Q20
        q21: 'q21a3', // Q21
        q22: 'q22a4', // Q22
        q23: 'q23a4', // Q23
        q24: 'q24a4', // Q24
        q25: 'q25a3', // Q25
        q26: 'q26a5', // Q26
        q27: 'q27a3', // Q27
        q28: 'q28a2', // Q28
        q29: 'q29a5', // Q29
        q30: 'q30a4', // Q30
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        let currentScore = 0;
        const answers = {};
        const unansweredQuestions = [];

        // Check all questions
        for (let i = 1; i <= 30; i++) {
            const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
            if (!selectedAnswer) {
                unansweredQuestions.push(i);
                continue;
            }
            
            answers[`q${i}`] = selectedAnswer.id;
            if (selectedAnswer.id === correctAnswers[`q${i}`]) {
                currentScore++;
            }
        }

        // Validation
        if (!name) {
            setPopupMessage("Please enter your full name");
            setShowPopup(true);
            return;
        }

        if (!email) {
            setPopupMessage("Please enter your email address");
            setShowPopup(true);
            return;
        }

        if (unansweredQuestions.length > 0) {
            setPopupMessage(`Please answer the following questions: ${unansweredQuestions.join(', ')}`);
            setShowPopup(true);
            return;
        }

        // Calculate score and show results
        setScore(currentScore);
        setUserAnswers(answers);
        setShowResults(true);
        setPopupMessage(`Good job ${name}! Your score is ${currentScore} out of 30`);
        setShowPopup(true);

        // The form will automatically submit to Netlify
    };

    const getAnswerClass = (questionNumber, answerId) => {
        if (!showResults) return "";
        
        const correctAnswerId = correctAnswers[`q${questionNumber}`];
        
        if (answerId === correctAnswerId) {
            return "correct-answer";
        }
        
        if (userAnswers[`q${questionNumber}`] === answerId && answerId !== correctAnswerId) {
            return "wrong-answer";
        }
        
        return "";
    };

    return (
        <div>
            <div className="title" style={{ marginTop: "130px" }}>
                <hr />
                <h2>Welcome to the First Exam!</h2>
                <hr />
            </div>
            <br />
            <br />
            <form
                id="first-form"
                name="first-form"
                method="POST"
                className="exam-form"
                onSubmit={handleSubmit}
                data-netlify="true"
                netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="first-form" />
                <p hidden>
                    <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                </p>

                <h3>Personal info</h3>
                <hr />
                <div className="row">
                    <div className="formField">
                        <input type="text" required name="name" id="name" />
                        <span>Full Name</span>
                    </div>
                    <div className="formField">
                        <input type="email" required name="email" id="email" />
                        <span>Email Address</span>
                    </div>
                </div>
                <h3>Questions</h3>
                <hr />
                {/* Q1 */}
                <div className="finish qes">
                    <h3 id="Q1">Q.1 Most of the neurons in the human central nervous system<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q1" id="q1a1" />
                        <label htmlFor="q1a1" className={getAnswerClass(1, 'q1a1')}>sensory neurons</label>
                        <input type="radio" name="q1" id="q1a2" />
                        <label htmlFor="q1a2" className={getAnswerClass(1, 'q1a2')}>motor neurons</label>
                        <input type="radio" name="q1" id="q1a3" />
                        <label htmlFor="q1a3" className={getAnswerClass(1, 'q1a3')}>interneurons</label>
                        <input type="radio" name="q1" id="q1a4" />
                        <label htmlFor="q1a4" className={getAnswerClass(1, 'q1a4')}>peripheral neurons</label>
                    </div>
                </div>
                {/* Q2 */}
                <div className="finish qes">
                    <h3 id="Q2">Q.2 For a neuron with an initial membrane potential at -70 mV, an increase in the movement of potassium ions out of that neuron's cytoplasm would result in the ________<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q2" id="q2a1" />
                        <label htmlFor="q2a1" className={getAnswerClass(2, 'q2a1')}>depolarization of the neuron</label>
                        <input type="radio" name="q2" id="q2a2" />
                        <label htmlFor="q2a2" className={getAnswerClass(2, 'q2a2')}>hyperpolarization of the neuron</label>
                        <input type="radio" name="q2" id="q2a3" />
                        <label htmlFor="q2a3" className={getAnswerClass(2, 'q2a3')}>replacement of potassium ions with sodium ions</label>
                        <input type="radio" name="q2" id="q2a4" />
                        <label htmlFor="q2a4" className={getAnswerClass(2, 'q2a4')}>replacement of potassium ions with calcium ions</label>
                    </div>
                </div>
                {/* Q3 */}
                <div className="finish qes">
                    <h3 id="Q3">Q.3 The "undershoot" phase of hyperpolarization is due to ________<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q3" id="q3a1" />
                        <label htmlFor="q3a1" className={getAnswerClass(3, 'q3a1')}>slow opening of voltage-gated sodium channels</label>
                        <input type="radio" name="q3" id="q3a2" />
                        <label htmlFor="q3a2" className={getAnswerClass(3, 'q3a2')}>sustained opening of voltage-gated potassium channels </label>
                        <input type="radio" name="q3" id="q3a3" />
                        <label htmlFor="q3a3" className={getAnswerClass(3, 'q3a3')}>rapid opening of voltage-gated calcium channels</label>
                        <input type="radio" name="q3" id="q3a4" />
                        <label htmlFor="q3a4" className={getAnswerClass(3, 'q3a4')}>slow restorative actions of the sodium-potassium ATPase</label>
                    </div>
                </div>
                {/* Q4 */}
                <div className="finish qes">
                    <h3 id="Q4">Q.4 Which neurotransmitter is considered the brain's most common inhibitory neurotransmitter?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q4" id="q4a1" />
                        <label htmlFor="q4a1" className={getAnswerClass(4, 'q4a1')}>Dopamine</label>
                        <input type="radio" name="q4" id="q4a2" />
                        <label htmlFor="q4a2" className={getAnswerClass(4, 'q4a2')}>Acetylcholine</label>
                        <input type="radio" name="q4" id="q4a3" />
                        <label htmlFor="q4a3" className={getAnswerClass(4, 'q4a3')}>GABA</label>
                        <input type="radio" name="q4" id="q4a4" />
                        <label htmlFor="q4a4" className={getAnswerClass(4, 'q4a4')}>Glutamate</label>
                    </div>
                </div>
                {/* Q5 */}
                <div className="finish qes">
                    <h3 id="Q5">Q.5 which category of neuron would be most involved in learning and tuning signals in a neural circuit?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q5" id="q5a1" />
                        <label htmlFor="q5a1" className={getAnswerClass(5, 'q5a1')}>Excitatory pyramidal cells</label>
                        <input type="radio" name="q5" id="q5a2" />
                        <label htmlFor="q5a2" className={getAnswerClass(5, 'q5a2')}>Inhibitory interneurons</label>
                        <input type="radio" name="q5" id="q5a3" />
                        <label htmlFor="q5a3" className={getAnswerClass(5, 'q5a3')}>Both equally</label>
                        <input type="radio" name="q5" id="q5a4" />
                        <label htmlFor="q5a4" className={getAnswerClass(5, 'q5a4')}>none of the above</label>
                    </div>
                </div>
                {/* Q6 */}
                <div className="finish qes">
                    <h3 id="Q6">Q.6 Which of the following would y result in seizures? <span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q6" id="q6a1" />
                        <label htmlFor="q6a1" className={getAnswerClass(6, 'q6a1')}>Balanced activity between excitatory and inhibitory neurons</label>
                        <input type="radio" name="q6" id="q6a2" />
                        <label htmlFor="q6a2" className={getAnswerClass(6, 'q6a2')}>Enhanced activity of both excitatory and inhibitory neurons by an equal amount</label>
                        <input type="radio" name="q6" id="q6a3" />
                        <label htmlFor="q6a3" className={getAnswerClass(6, 'q6a3')}>Unbalanced activity between excitatory and inhibitory neurons</label>
                        <input type="radio" name="q6" id="q6a4" />
                        <label htmlFor="q6a4" className={getAnswerClass(6, 'q6a4')}>none of the above</label>
                    </div>
                </div>
                {/* Q7 */}
                <div className="finish qes">
                    <h3 id="Q7">Q.7 which of the following best describes that Drugs of abuse act as imposters?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q7" id="q7a1" />
                        <label htmlFor="q7a1" className={getAnswerClass(7, 'q7a1')}>They can block neurotransmitter action</label>
                        <input type="radio" name="q7" id="q7a2" />
                        <label htmlFor="q7a2" className={getAnswerClass(7, 'q7a2')}>They are natural components</label>
                        <input type="radio" name="q7" id="q7a3" />
                        <label htmlFor="q7a3" className={getAnswerClass(7, 'q7a3')}>They have the ability to induce pleasure</label>
                        <input type="radio" name="q7" id="q7a4" />
                        <label htmlFor="q7a4" className={getAnswerClass(7, 'q7a4')}>They can cause severe headaches</label>
                    </div>
                </div>
                {/* Q8 */}
                <div className="finish qes">
                    <h3 id="Q8">Q.8 Protoplasmic astrocytes are present in ________<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q8" id="q8a1" />
                        <label htmlFor="q8a1" className={getAnswerClass(8, 'q8a1')}>Grey matter with open association with neurons</label>
                        <input type="radio" name="q8" id="q8a2" />
                        <label htmlFor="q8a2" className={getAnswerClass(8, 'q8a2')}>white matter with close association with neurons</label>
                        <input type="radio" name="q8" id="q8a3" />
                        <label htmlFor="q8a3" className={getAnswerClass(8, 'q8a3')}>Grey matter with close association with neurons</label>
                        <input type="radio" name="q8" id="q8a4" />
                        <label htmlFor="q8a4" className={getAnswerClass(8, 'q8a4')}>d-Grey matter without association with neurons</label>
                    </div>
                </div>
                {/* Q9 */}
                <div className="finish qes">
                    <h3 id="Q9">Q.9 How many lobes of the brain 4 lobes are parts of the semantic system?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q9" id="q9a1" />
                        <label htmlFor="q9a1" className={getAnswerClass(9, 'q9a1')}>1</label>
                        <input type="radio" name="q9" id="q9a2" />
                        <label htmlFor="q9a2" className={getAnswerClass(9, 'q9a2')}>2</label>
                        <input type="radio" name="q9" id="q9a3" />
                        <label htmlFor="q9a3" className={getAnswerClass(9, 'q9a3')}>3</label>
                        <input type="radio" name="q9" id="q9a4" />
                        <label htmlFor="q9a4" className={getAnswerClass(9, 'q9a4')}>4</label>
                    </div>
                </div>
                {/* Q10 */}
                <div className="finish qes">
                    <h3 id="Q10">Q.10 Which receptors the endorphins can stimulate?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q10" id="q10a1" />
                        <label htmlFor="q10a1" className={getAnswerClass(10, 'q10a1')}>Opioid receptors</label>
                        <input type="radio" name="q10" id="q10a2" />
                        <label htmlFor="q10a2" className={getAnswerClass(10, 'q10a2')}>Photoreceptor cell</label>
                        <input type="radio" name="q10" id="q10a3" />
                        <label htmlFor="q10a3" className={getAnswerClass(10, 'q10a3')}>Thermo receptor</label>
                        <input type="radio" name="q10" id="q10a4" />
                        <label htmlFor="q10a4" className={getAnswerClass(10, 'q10a4')}>Rods and Cons</label>
                    </div>
                </div>
                {/* Q11 */}
                <div className="finish qes">
                    <h3 id="Q11">Q.11 If the eye has poor visual acuity it is called:<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q11" id="q11a1" />
                        <label htmlFor="q11a1" className={getAnswerClass(11, 'q11a1')}>Estropia</label>
                        <input type="radio" name="q11" id="q11a2" />
                        <label htmlFor="q11a2" className={getAnswerClass(11, 'q11a2')}>Extropia</label>
                        <input type="radio" name="q11" id="q11a3" />
                        <label htmlFor="q11a3" className={getAnswerClass(11, 'q11a3')}>Amblyopic</label>
                        <input type="radio" name="q11" id="q11a4" />
                        <label htmlFor="q11a4" className={getAnswerClass(11, 'q11a4')}>Cataract</label>
                    </div>
                </div>
                {/* Q12 */}
                <div className="finish qes">
                    <h3 id="Q12">Q.12 The release of neurotransmitter at a chemical synapse in the central nervous system is dependent upon which of the following?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q12" id="q12a1" />
                        <label htmlFor="q12a1" className={getAnswerClass(12, 'q12a1')}>Synthesis of acetylcholinesterase</label>
                        <input type="radio" name="q12" id="q12a2" />
                        <label htmlFor="q12a2" className={getAnswerClass(12, 'q12a2')}>Hyperpolarization of the synaptic terminal</label>
                        <input type="radio" name="q12" id="q12a3" />
                        <label htmlFor="q12a3" className={getAnswerClass(12, 'q12a3')}>Opening of ligand-gated ion calcium channels</label>
                        <input type="radio" name="q12" id="q12a4" />
                        <label htmlFor="q12a4" className={getAnswerClass(12, 'q12a4')}>Influx of calcium into the presynaptic terminal</label>
                    </div>
                </div>
                {/* Q13 */}
                <div className="finish qes">
                    <h3 id="Q13">Q.13 Which substance enhances the sensitivity of pain receptors but does not directly excite them?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q13" id="q13a1" />
                        <label htmlFor="q13a1" className={getAnswerClass(13, 'q13a1')}>Bradykinin</label>
                        <input type="radio" name="q13" id="q13a2" />
                        <label htmlFor="q13a2" className={getAnswerClass(13, 'q13a2')}>Serotonin</label>
                        <input type="radio" name="q13" id="q13a3" />
                        <label htmlFor="q13a3" className={getAnswerClass(13, 'q13a3')}>Potassium ions</label>
                        <input type="radio" name="q13" id="q13a4" />
                        <label htmlFor="q13a4" className={getAnswerClass(13, 'q13a4')}>Prostaglandins</label>
                    </div>
                </div>
                {/* Q14 */}
                <div className="finish qes">
                    <h3 id="Q14">Q.14 Which structure carries axons from neurons in the ventral posterolateral nucleus of the thalamus to the primary somatosensory cortex?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q14" id="q14a1" />
                        <label htmlFor="q14a1" className={getAnswerClass(14, 'q14a1')}>Medial lemniscus</label>
                        <input type="radio" name="q14" id="q14a2" />
                        <label htmlFor="q14a2" className={getAnswerClass(14, 'q14a2')}>External capsule</label>
                        <input type="radio" name="q14" id="q14a3" />
                        <label htmlFor="q14a3" className={getAnswerClass(14, 'q14a3')}>Internal capsule</label>
                        <input type="radio" name="q14" id="q14a4" />
                        <label htmlFor="q14a4" className={getAnswerClass(14, 'q14a4')}>Extreme capsule</label>
                    </div>
                </div>
                {/* Q15 */}
                <div className="finish qes">
                    <h3 id="Q15">Q.15 Which statement concerning synaptic transmission is correct?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q15" id="q15a1" />
                        <label htmlFor="q15a1" className={getAnswerClass(15, 'q15a1')}>When a specific population of synaptic terminals is spread over the considerable surface of a neuron, their collective effects cannot spatially summate and lead to initiation of an action potential</label>
                        <input type="radio" name="q15" id="q15a2" />
                        <label htmlFor="q15a2" className={getAnswerClass(15, 'q15a2')}>Even if the successive discharges of an excitatory synapse occur sufficiently close in time, they cannot temporally summate and initiate an action potential</label>
                        <input type="radio" name="q15" id="q15a3" />
                        <label htmlFor="q15a3" className={getAnswerClass(15, 'q15a3')}>A neuron is “facilitated” when its membrane potential is moved in the less negative or depolarizing direction</label>
                        <input type="radio" name="q15" id="q15a4" />
                        <label htmlFor="q15a4" className={getAnswerClass(15, 'q15a4')}>Even when rapidly stimulated by excitatory synaptic input for a prolonged period, neurons typically do not exhibit synaptic fatigue</label>
                    </div>
                </div>
                {/* Q16 */}
                <div className="finish qes">
                    <h3 id="Q16">Q.16 Light entering the eye passes through which retinal layer first?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q16" id="q16a1" />
                        <label htmlFor="q16a1" className={getAnswerClass(16, 'q16a1')}>Inner nuclear layer </label>
                        <input type="radio" name="q16" id="q16a2" />
                        <label htmlFor="q16a2" className={getAnswerClass(16, 'q16a2')}>Outer nuclear layer</label>
                        <input type="radio" name="q16" id="q16a3" />
                        <label htmlFor="q16a3" className={getAnswerClass(16, 'q16a3')}>Outer plexiform layer</label>
                        <input type="radio" name="q16" id="q16a4" />
                        <label htmlFor="q16a4" className={getAnswerClass(16, 'q16a4')}>Photoreceptor layer</label>
                        <input type="radio" name="q16" id="q16a5" />
                        <label htmlFor="q16a5" className={getAnswerClass(16, 'q16a5')}>Retinal ganglion layer</label>
                    </div>
                </div>
                {/* Q17 */}
                <div className="finish qes">
                    <h3 id="Q17">Q.17 All of the following may cause amensia except:<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q17" id="q17a1" />
                        <label htmlFor="q17a1" className={getAnswerClass(17, 'q17a1')}>Ecephalitis</label>
                        <input type="radio" name="q17" id="q17a2" />
                        <label htmlFor="q17a2" className={getAnswerClass(17, 'q17a2')}>Stroke</label>
                        <input type="radio" name="q17" id="q17a3" />
                        <label htmlFor="q17a3" className={getAnswerClass(17, 'q17a3')}>Tumor</label>
                        <input type="radio" name="q17" id="q17a4" />
                        <label htmlFor="q17a4" className={getAnswerClass(17, 'q17a4')}>Pain</label>
                    </div>
                </div>
                {/* Q18 */}
                <div className="finish qes">
                    <h3 id="Q18">Q.18 The precentral gyrus and corticospinal tract are essential for which of the following?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q18" id="q18a1" />
                        <label htmlFor="q18a1" className={getAnswerClass(18, 'q18a1')}>Vision</label>
                        <input type="radio" name="q18" id="q18a2" />
                        <label htmlFor="q18a2" className={getAnswerClass(18, 'q18a2')}>Olfaction</label>
                        <input type="radio" name="q18" id="q18a3" />
                        <label htmlFor="q18a3" className={getAnswerClass(18, 'q18a3')}>Auditory identification</label>
                        <input type="radio" name="q18" id="q18a4" />
                        <label htmlFor="q18a4" className={getAnswerClass(18, 'q18a4')}>Kinesthesia</label>
                        <input type="radio" name="q18" id="q18a5" />
                        <label htmlFor="q18a5" className={getAnswerClass(18, 'q18a5')}>Voluntary movement</label>
                    </div>
                </div>
                {/* Q19 */}
                <div className="finish qes">
                    <h3 id="Q19">Q.19 The following steps refer to various stages in transmission at a chemical synapse: <br /><br /><span className="arrange">1. Neurotransmitter binds with receptors associated with the postsynaptic membrane <br /> 2. Calcium ions rush into neuron's cytoplasm <br /> 3. An action potential depolarizes the membrane of the presynaptic axon terminal <br /> 4. The ligand-gated ion channels open <br /> 5. The synaptic vesicles release neurotransmitter into the synaptic cleft</span><span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q19" id="q19a1" />
                        <label htmlFor="q19a1" className={getAnswerClass(19, 'q19a1')}>1 → 2 → 3 → 4 → 5</label>
                        <input type="radio" name="q19" id="q19a2" />
                        <label htmlFor="q19a2" className={getAnswerClass(19, 'q19a2')}>2 → 3 → 5 → 4 → 1</label>
                        <input type="radio" name="q19" id="q19a3" />
                        <label htmlFor="q19a3" className={getAnswerClass(19, 'q19a3')}>3 → 2 → 5 → 1 → 4</label>
                        <input type="radio" name="q19" id="q19a4" />
                        <label htmlFor="q19a4" className={getAnswerClass(19, 'q19a4')}>4 → 3 → 1 → 2 → 5</label>
                    </div>
                </div>
                {/* Q20 */}
                <div className="finish qes">
                    <h3 id="Q20">Q.20 Use the figure to answer the following question. <br /><br /> Which of the following region(s) arose developmentally from the hindbrain?<span className="reqiuered">*</span></h3>
                    <img src="imgs/q20.png" alt="" />
                    <div className="input-content q20">
                        <input type="radio" name="q20" id="q20a1" />
                        <label htmlFor="q20a1" className={getAnswerClass(20, 'q20a1')}>only A</label>
                        <input type="radio" name="q20" id="q20a2" />
                        <label htmlFor="q20a2" className={getAnswerClass(20, 'q20a2')}>both A and D</label>
                        <input type="radio" name="q20" id="q20a3" />
                        <label htmlFor="q20a3" className={getAnswerClass(20, 'q20a3')}>only C</label>
                        <input type="radio" name="q20" id="q20a4" />
                        <label htmlFor="q20a4" className={getAnswerClass(20, 'q20a4')}>both C and E</label>
                    </div>
                </div>
                {/* Q21 */}
                <div className="finish qes">
                    <h3 id="Q21">Q.21 Wakefulness is regulated by the reticular formation, which is present in the ________<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q21" id="q21a1" />
                        <label htmlFor="q21a1" className={getAnswerClass(21, 'q21a1')}>basal nuclei</label>
                        <input type="radio" name="q21" id="q21a2" />
                        <label htmlFor="q21a2" className={getAnswerClass(21, 'q21a2')}>cerebral cortex</label>
                        <input type="radio" name="q21" id="q21a3" />
                        <label htmlFor="q21a3" className={getAnswerClass(21, 'q21a3')}>brainstem</label>
                        <input type="radio" name="q21" id="q21a4" />
                        <label htmlFor="q21a4" className={getAnswerClass(21, 'q21a4')}>limbic system</label>
                    </div>
                </div>
                {/* Q22 */}
                <div className="finish qes">
                    <h3 id="Q22">Q.22 After suffering a stroke, a patient can see objects anywhere in front of him, but pays attention only to objects in his right field of vision. When asked to describe these objects, he has difficulty judging their size and distance. What part of the brain was likely damaged by the stroke?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q22" id="q22a1" />
                        <label htmlFor="q22a1" className={getAnswerClass(22, 'q22a1')}>the left frontal lobe</label>
                        <input type="radio" name="q22" id="q22a2" />
                        <label htmlFor="q22a2" className={getAnswerClass(22, 'q22a2')}>the right frontal lobe</label>
                        <input type="radio" name="q22" id="q22a3" />
                        <label htmlFor="q22a3" className={getAnswerClass(22, 'q22a3')}>the left parietal lobe</label>
                        <input type="radio" name="q22" id="q22a4" />
                        <label htmlFor="q22a4" className={getAnswerClass(22, 'q22a4')}>the right parietal lobe</label>
                    </div>
                </div>
                {/* Q23 */}
                <div className="finish qes">
                    <h3 id="Q23">Q.23 One of the fundamental processes by which memories are stored and learning takes place ________<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q23" id="q23a1" />
                        <label htmlFor="q23a1" className={getAnswerClass(23, 'q23a1')}>is related to changes in the degree of myelination of axons</label>
                        <input type="radio" name="q23" id="q23a2" />
                        <label htmlFor="q23a2" className={getAnswerClass(23, 'q23a2')}>results in an increase in the diameter of axons</label>
                        <input type="radio" name="q23" id="q23a3" />
                        <label htmlFor="q23a3" className={getAnswerClass(23, 'q23a3')}>results in a shift from aerobic to anaerobic respiration in neurons</label>
                        <input type="radio" name="q23" id="q23a4" />
                        <label htmlFor="q23a4" className={getAnswerClass(23, 'q23a4')}>involves changing the responsiveness of postsynaptic neurons to neurotransmitter</label>
                    </div>
                </div>
                {/* Q24 */}
                <div className="finish qes">
                    <h3 id="Q24">Q.24 Sensory transduction of light in the vertebrate retina is accomplished by ________<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q24" id="q24a1" />
                        <label htmlFor="q24a1" className={getAnswerClass(24, 'q24a1')}>ganglion cells</label>
                        <input type="radio" name="q24" id="q24a2" />
                        <label htmlFor="q24a2" className={getAnswerClass(24, 'q24a2')}>amacrine cells</label>
                        <input type="radio" name="q24" id="q24a3" />
                        <label htmlFor="q24a3" className={getAnswerClass(24, 'q24a3')}>bipolar cells</label>
                        <input type="radio" name="q24" id="q24a4" />
                        <label htmlFor="q24a4" className={getAnswerClass(24, 'q24a4')}>rods and cones</label>
                    </div>
                </div>
                {/* Q25 */}
                <div className="finish qes">
                    <h3 id="Q25">Q.25 Two students studying physiology taste a known "bitter" substance, and both reports sensing bitterness. They then sample another substance. Student A reports sensing both a bitter taste and a salty taste, but student B reports only a salty taste. What is the most logical explanation?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q25" id="q25a1" />
                        <label htmlFor="q25a1" className={getAnswerClass(25, 'q25a1')}>Student A had an allergic reaction to the food, causing him to perceive the food as being bitter</label>
                        <input type="radio" name="q25" id="q25a2" />
                        <label htmlFor="q25a2" className={getAnswerClass(25, 'q25a2')}>Student A has normal "bitter" taste buds; student B has defective "bitter" taste buds that result in lower sensitivity to bitterness</label>
                        <input type="radio" name="q25" id="q25a3" />
                        <label htmlFor="q25a3" className={getAnswerClass(25, 'q25a3')}>Student A has a protein receptor capable of detecting a bitter molecule found in that substance, whereas student B lacks that particular protein receptor</label>
                        <input type="radio" name="q25" id="q25a4" />
                        <label htmlFor="q25a4" className={getAnswerClass(25, 'q25a4')}>Student A has normal saliva, whereas student B's saliva is more alkaline than normal</label>
                    </div>
                </div>
                {/* Q26 */}
                <div className="finish qes">
                    <h3 id="Q26">Q.26 A 72-year-old man visits his physician because he finds it difficult to hold his hand steady when painting. Examination reveals a resting tremor and rigidity. The symptoms are relieved by a single dose of levodopa. This patient’s neurological signs are most likely related to a lesion within which of the following?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q26" id="q26a1" />
                        <label htmlFor="q26a1" className={getAnswerClass(26, 'q26a1')}>Caudate nucleus and putamen</label>
                        <input type="radio" name="q26" id="q26a2" />
                        <label htmlFor="q26a2" className={getAnswerClass(26, 'q26a2')}>Cerebellum</label>
                        <input type="radio" name="q26" id="q26a3" />
                        <label htmlFor="q26a3" className={getAnswerClass(26, 'q26a3')}>Hippocampus</label>
                        <input type="radio" name="q26" id="q26a4" />
                        <label htmlFor="q26a4" className={getAnswerClass(26, 'q26a4')}>Premotor area</label>
                        <input type="radio" name="q26" id="q26a5" />
                        <label htmlFor="q26a5" className={getAnswerClass(26, 'q26a5')}>Substantia nigra</label>
                    </div>
                </div>
                {/* Q27 */}
                <div className="finish qes">
                    <h3 id="Q27">Q.27 Which of the following characteristics of an axon is most dependent on its diameter?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q27" id="q27a1" />
                        <label htmlFor="q27a1" className={getAnswerClass(27, 'q27a1')}>The magnitude of its resting potential</label>
                        <input type="radio" name="q27" id="q27a2" />
                        <label htmlFor="q27a2" className={getAnswerClass(27, 'q27a2')}>The duration of its refractory period</label>
                        <input type="radio" name="q27" id="q27a3" />
                        <label htmlFor="q27a3" className={getAnswerClass(27, 'q27a3')}>The conduction velocity of its action potential</label>
                        <input type="radio" name="q27" id="q27a4" />
                        <label htmlFor="q27a4" className={getAnswerClass(27, 'q27a4')}>The overshoot of its action potential</label>
                        <input type="radio" name="q27" id="q27a5" />
                        <label htmlFor="q27a5" className={getAnswerClass(27, 'q27a5')}>The activity of its sodium-potassium pump</label>
                    </div>
                </div>
                {/* Q28 */}
                <div className="finish qes">
                    <h3 id="Q28">Q.28 A 22-year-old man sees his ophthalmologist because it is becoming increasingly difficult for him to read the newspaper. His vision problem most likely results from an inability to contract which of the following?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q28" id="q28a1" />
                        <label htmlFor="q28a1" className={getAnswerClass(28, 'q28a1')}>The iris</label>
                        <input type="radio" name="q28" id="q28a2" />
                        <label htmlFor="q28a2" className={getAnswerClass(28, 'q28a2')}>The ciliary body</label>
                        <input type="radio" name="q28" id="q28a3" />
                        <label htmlFor="q28a3" className={getAnswerClass(28, 'q28a3')}>The suspensory ligaments</label>
                        <input type="radio" name="q28" id="q28a4" />
                        <label htmlFor="q28a4" className={getAnswerClass(28, 'q28a4')}>The extraocular muscles</label>
                        <input type="radio" name="q28" id="q28a5" />
                        <label htmlFor="q28a5" className={getAnswerClass(28, 'q28a5')}>The pupil</label>
                    </div>
                </div>
                {/* Q29 */}
                <div className="finish qes">
                    <h3 id="Q29">Q.29 he precentral gyrus and corticospinal tract are essential for which of the following?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q29" id="q29a1" />
                        <label htmlFor="q29a1" className={getAnswerClass(29, 'q29a1')}>Vision</label>
                        <input type="radio" name="q29" id="q29a2" />
                        <label htmlFor="q29a2" className={getAnswerClass(29, 'q29a2')}>Olfaction</label>
                        <input type="radio" name="q29" id="q29a3" />
                        <label htmlFor="q29a3" className={getAnswerClass(29, 'q29a3')}>Auditory identification</label>
                        <input type="radio" name="q29" id="q29a4" />
                        <label htmlFor="q29a4" className={getAnswerClass(29, 'q29a4')}>Kinesthesia</label>
                        <input type="radio" name="q29" id="q29a5" />
                        <label htmlFor="q29a5" className={getAnswerClass(29, 'q29a5')}>Voluntary movemen</label>
                    </div>
                </div>
                {/* Q30 */}
                <div className="finish qes last">
                    <h3 id="Q30">Q.30 A 25-year-old student studies for a test in medical physiology. The visual contrast of the subject matter is enhanced due to lateral inhibition of the visual input by which cell type in the retina?<span className="reqiuered">*</span></h3>
                    <div className="input-content">
                        <input type="radio" name="q30" id="q30a1" />
                        <label htmlFor="q30a1" className={getAnswerClass(30, 'q30a1')}>Amacrine cells</label>
                        <input type="radio" name="q30" id="q30a2" />
                        <label htmlFor="q30a2" className={getAnswerClass(30, 'q30a2')}>Bipolar cells</label>
                        <input type="radio" name="q30" id="q30a3" />
                        <label htmlFor="q30a3" className={getAnswerClass(30, 'q30a3')}>Ganglion cells</label>
                        <input type="radio" name="q30" id="q30a4" />
                        <label htmlFor="q30a4" className={getAnswerClass(30, 'q30a4')}>Horizontal cells</label>
                    </div>
                </div>
                <div className="finish end">
                    <h3>Deadline ends in <strong>20th August, 2025</strong></h3>
                    <h4>You are now ready for the competition <a href="./BrainBliTz-Portal">Apply now!</a></h4>
                </div>
                <button className="btn" type="submit" id="submit">
                    Submit
                </button>
            </form>

            {/* Popup for showing messages and results */}
            {showPopup && (
                <div className="popup-container active">
                    <div className="popup">
                        <span className="close-btn" onClick={() => setShowPopup(false)}>&times;</span>
                        <p id="popup-text">{popupMessage}</p>
                        {showResults ? (
                            <NavLink
                                id="popup-link"
                                href="/BrainBliTz"
                                style={{ cursor: "pointer" }}
                            >
                                Go to Competition Page
                            </NavLink>
                        ) : (
                            <a
                                style={{ cursor: "pointer" }}
                                onClick={() => setShowPopup(false)}
                                id="popup-link"
                            >
                                Close
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

function BrainBlitzFirstExam() {
    const [started, setStarted] = useState(false);

    if (started) {
        return <NextExamComponent />;
    }

    return (
        <div className="exam-container">
            <h1>Brain Blitz First Exam</h1>
            <p>Welcome to the first exam of Brain Blitz! This exam will test your knowledge and skills.</p>
            <p>Please ensure you have a stable internet connection and a quiet environment to focus.</p>
            <p>Good luck!</p>
            <button
                className="start-exam-button"
                onClick={() => setStarted(true)}
            >
                Start Exam
            </button>
        </div>
    );
}

export default BrainBlitzFirstExam;